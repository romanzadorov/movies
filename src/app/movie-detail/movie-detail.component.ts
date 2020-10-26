import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  video: any;
  movieId: string;
  movieDetails: any;
  videoLink: any;
  innerWidth: any;

  constructor(private activatedRoute: ActivatedRoute,
    private readonly appService: AppService,
    private _sanitizer: DomSanitizer,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params['movieId'];
    this.getMovieDetailsById(this.movieId);

    this.innerWidth = window.innerWidth;
  }

  getMovieDetailsById(movieId){
    this.appService.getMovieDetailsById(movieId).subscribe(res => {
      console.log(res);
      this.movieDetails = this.mapMovie(res);
      this.getVideo(movieId);
    });
  }

  mapMovie(movie) {
    let result = Object.assign({}, movie);
    result["posterPath"] = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}?api_key=${this.appService.omdbKey}`
      : `../assets/img/tv_200.jpeg`;
    result["overviewPath"] = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}?api_key=${this.appService.omdbKey}`;
    result["releaseYear"] = movie.release_date.split("-")[0];
    
    const runtime = movie.runtime.toString();
    let runTimeHours = 0;
    let runTimeMinutes = 0;
    if (runtime && runtime.length) {
      const hour_1 = 60;
      const remainder = movie.runtime - hour_1;
      const remainder_2 = movie.runtime - hour_1*2;
      const remainder_3 = movie.runtime - hour_1*3;

      if(remainder_3 && remainder_3 >= 0){
        runTimeHours = 3;
        runTimeMinutes = remainder_3;
      } else if(remainder_2 && remainder_2 >= 0){
        runTimeHours = 2;
        runTimeMinutes = remainder_2;
      } else if(remainder && remainder >= 0){
        runTimeHours = 1;
        runTimeMinutes = remainder;
      } else if(remainder && remainder < 0){
        runTimeHours = 0;
        runTimeMinutes = movie.runtime;
      }
      
      result["runTime"] = `${runTimeHours}h ${runTimeMinutes}m`;
    }


    let favoriteMovies = new Array();
    favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    
    if (favoriteMovies && favoriteMovies.length > 0) {
      favoriteMovies.forEach(item => {
        if (item.id === result.id) {
          item["isFavorite"] === true ? result["isFavorite"] = true : result["isFavorite"] = false;
        }
      })
    } else {
      result["isFavorite"] = false;
    }
    return result;
  }


  addToFavorites(movieDetails) {
    this.movieDetails["isFavorite"] = true;
    let favoriteMovies = new Array();
    favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    
    if (favoriteMovies && favoriteMovies.length > 0) {
      favoriteMovies.forEach(movie => {
        if (movie.id !== movieDetails.id) {
          favoriteMovies.push(movieDetails)
          localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        }
      })
    } else {
      favoriteMovies = [];
      favoriteMovies.push(movieDetails);
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    }
    
  }

  removeFromFavorites(movieDetails) {
    this.movieDetails["isFavorite"] = false;
    let favoriteMovies = new Array();
    favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));

    if (favoriteMovies && favoriteMovies.length > 0) {
      favoriteMovies.map((movie, index) => {
        if (movie.id === movieDetails.id) {
          favoriteMovies.splice(index, 1);
          localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        }
      })
    }
  }

  getIsFavorite(movieDetails){
    console.log(movieDetails);
    return  this.movieDetails["isFavorite"];
  }

  getVideo(movieId) {
    this.appService.getVideo(movieId).subscribe(res => {
      this.video = res["results"][0];
      this.videoLink = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video["key"]}`);
    });
  }

  openVideoModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    if (this.innerWidth > 1500) {
      relativeWidth = (1500 * 80 ) / 100;
    } else {
      relativeWidth = (this.innerWidth * 80 ) / 100;
    }

    const relativeHeight = (relativeWidth * 9) / 16 + 120; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';
    dialogConfig.panelClass = "custom-modalbox";
 
    const dialogRef = this.dialog.open(VideoDialogComponent, dialogConfig);

    dialogRef.componentInstance.videoLink = this.videoLink;

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }
}

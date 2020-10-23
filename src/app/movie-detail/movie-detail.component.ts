import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: string;
  movieDetails: any;

  constructor(private activatedRoute: ActivatedRoute,
    private readonly appService: AppService) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params['movieId'];
    console.log(this.movieId);
    
    this.getMovieDetailsById(this.movieId);
  }

  getMovieDetailsById(movieId){
    this.appService.getMovieDetailsById(movieId).subscribe(res => {
      console.log(res);
      this.movieDetails = this.mapMovie(res);
    });
  }

  mapMovie(movie) {
    let result = Object.assign({}, movie);
    result["posterPath"] = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}?api_key=${this.appService.omdbKey}`
      : `../assets/img/tv_200.jpeg`;
    result["overviewPath"] = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}?api_key=${this.appService.omdbKey}`;
    return result;

  }

}

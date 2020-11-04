import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from "rxjs";
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit, OnDestroy {
  @Input() sectionMovies: Array<Object>;
  latestMovies: any;
  popularMovies: any;
  comingSoonMovies: any;
  criticMovies: any;
  sectionMoviesAlt: Array<Object>;
  section: string;
  isNotFound = false;
  getMoviesObservableSubscription: Subscription;

  constructor(private readonly appService: AppService,
    private readonly activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getMoviesObservableSubscription = this.appService.searchMoviesEmit.asObservable().subscribe(refresh => {
        this.sectionMovies = [];
        this.sectionMovies = refresh;
        if (this.sectionMovies && this.sectionMovies.length === 0) {
          this.getSectionMovies("alt");
        }
      });

      switch (this.activatedRoute.snapshot['_routerState'].url) {
        case "/movies/new-releases":
          this.section = "new-releases";
          break;
        case "/movies/popular":
          this.section = "popular";
          break;
        case "/movies/coming-soon":
          this.section = "coming-soon";
          break;
        case "/movies/myfavorites":
          this.section = "myfavorites";
          break;
      }
  }

  ngOnInit() {
    if(this.section && !this.sectionMovies){
      this.getSectionMovies();
    }
  }

  ngOnDestroy(): void {
    if(this.getMoviesObservableSubscription){
      this.getMoviesObservableSubscription.unsubscribe();
    }
  }

  getSectionMovies(type?: string){
    if(this.section && this.section !== "myfavorites") {
      this.appService.getSectionMovies(this.section).subscribe((res) => {
        // making alternative call to display a swiper in case if no results returned from 
        // the searchMoviesEmit observable:
        this.sectionMovies = this.mapMovies(res["results"]);
      });
    } else {
      this.sectionMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    }
  }


  private mapMovies(movies) {
    return movies.map((movie) => {
      let result = Object.assign({}, movie);
      result["posterPath"] = movie.poster_path
        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}?api_key=${this.appService.omdbKey}`
        : `assets/img/frink.png`;
      result[
        "overviewPath"
      ] = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}?api_key=${this.appService.omdbKey}`;
      return result;
    });
  }

  goToMovieDetails(details) {
    this.appService.movieDetails = details;
    this.router.navigate([`movies/${details.id}`])
  }
}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject, Subscription } from "rxjs";
import {
  map,
  debounceTime,
  catchError,
  distinctUntilChanged,
  mergeMap,
} from "rxjs/operators";
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit, OnDestroy {
  @ViewChild("filter", { static: false }) filter: ElementRef;
  keyUpSubscription: Subscription;
  latestMovies: any;
  popularMovies: any;
  comingSoonMovies: any;
  criticMovies: any;
  sectionMovies: Array<Object>;
  sectionMoviesAlt: Array<Object>;
  section: string;
  isNotFound = false;
  getMoviesObservableSubscription: Subscription;

  public keyUp = new Subject<KeyboardEvent>();

  constructor(private readonly appService: AppService,
    private readonly activatedRoute: ActivatedRoute,
    private router: Router) {
      // console.log(this.activatedRoute.snapshot['_routerState'].url);
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
this.getSectionMovies();

    this.getMoviesObservableSubscription = this.appService.searchMoviesEmit.asObservable().subscribe(refresh => {
      this.sectionMovies = refresh;
      console.log(this.sectionMovies);
this.getSectionMovies("alt");
      
    });

  }

  ngOnDestroy(): void {
    if (this.keyUpSubscription) {
    this.keyUpSubscription.unsubscribe();
    }
    if(this.getMoviesObservableSubscription){
      this.getMoviesObservableSubscription.unsubscribe();
    }
  }

  getSectionMovies(type?){
    if(this.section && this.section !== "myfavorites") {
      this.appService.getSectionMovies(this.section).subscribe((res) => {
        // making alternative call to display a swiper in case if no results returned from 
        // the searchMoviesEmit observable:
        if (type && type === "alt") {
          this.sectionMoviesAlt = this.mapMovies(res["results"]);
        } else {
          this.sectionMovies = this.mapMovies(res["results"]);
        }
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
        : `../assets/img/tv_200.jpeg`;
      result[
        "overviewPath"
      ] = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}?api_key=${this.appService.omdbKey}`;
      return result;
    });
  }

  goToMovieDetails(details) {
    console.log(details);
    this.appService.movieDetails = details;
    this.router.navigate([`movies/${details.id}`])
  }
}

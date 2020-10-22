import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  section: string;
  isNotFound = false;

  public keyUp = new Subject<KeyboardEvent>();

  constructor(private readonly appService: AppService,
    private readonly activatedRoute: ActivatedRoute) {
      console.log(this.activatedRoute.snapshot['_routerState'].url);
      switch (this.activatedRoute.snapshot['_routerState'].url) {
        case "/new-releases":
          this.section = "new-releases";
          break;
        case "/popular":
          this.section = "popular";
          break;
        case "/coming-soon":
          this.section = "coming-soon";
          break;
      }
  }

  ngOnInit() {

    this.appService.getSectionMovies(this.section).subscribe((res) => {
      console.log(res);
      this.sectionMovies = this.mapMovies(res["results"]);
      // this.sectionMovies = res['results'];
    });
  }

  ngOnDestroy(): void {
    this.keyUpSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.keyUpSubscription = this.keyUp
      .pipe(
        map((event) => event.target["value"]),
        debounceTime(500),
        distinctUntilChanged(),
        mergeMap((search) =>
          this.appService.getMovie(this.section, search).pipe(
            catchError((err) => {
              console.log("Handling error locally and rethrowing it...", err);
              this.isNotFound = true;
              return of({ results: null });
            })
          )
        )
      )
      .subscribe(
        (res) => {
          console.log(res);

          if (res) {
            this.sectionMovies = [];
            // this.countries.push(data[0]);
            // localStorage.setItem("cities", JSON.stringify(this.countries));
            this.sectionMovies = this.mapMovies(res["results"]);
          }
          if (res["results"] === null) {
            console.log("no search results");
          }
          if (res === "noValueEntered") {
            console.log("No Value Entered");
            // this.countries = this.allCountries;
            this.isNotFound = false;
          }
        },
        (error) => {
          if (error && error["status"] == 404) {
            console.log("error", error);
            this.isNotFound = true;
          }
        },
        () => console.log("HTTP request completed.")
      );
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
}

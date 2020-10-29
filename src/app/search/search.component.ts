import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild("filter", { static: false }) filter: ElementRef;
  keyUpSubscription: Subscription;
  sectionMovies: Array<Object>;
  section: string;
  isNotFound = false;

  public keyUp = new Subject<KeyboardEvent>();

  constructor(private readonly appService: AppService,
    private readonly activatedRoute: ActivatedRoute,
    private router: Router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const titleArray = this.getData(router.routerState, router.routerState.root);
          if (titleArray[0].title !== "Search") {
            this.filter.nativeElement.value = ""; 
          }
        }
      })
    }

  ngOnInit() {
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
          this.appService.getMovieBySectionAndName(this.section, search).pipe(
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
          this.router.navigate([`movies/search`])
          if (res && res["results"]) {
            this.sectionMovies = [];
            this.sectionMovies = this.mapMovies(res["results"]);
            this.appService.searchMoviesEmit.next(this.sectionMovies)
          }
          if (res["results"] === null) {
            console.log("no search results");
              // HERE do the message - no results found, but we have some suggestions for you:
              // and make a call for popular movies
          }
          if (res === "noValueEntered") {
            console.log("No Value Entered");
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

  getData(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data);
    }

    if (state && parent) {
      data.push(... this.getData(state, state.firstChild(parent)));
    }
    return data;
  }

}

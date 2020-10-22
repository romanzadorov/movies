import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {
  latestMovies: any;
  popularMovies: any;
  comingSoonMovies: any;
  criticMovies: any;
  sectionMovies: Array<Object>;
  section: string;

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

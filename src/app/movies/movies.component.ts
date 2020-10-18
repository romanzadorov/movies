import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  latestMovies: any = [];
  popularMovies: any = [];
  comingSoonMovies: any = [];
  criticMovies: any = [];

  config: any = {
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      490: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.appService.getMovies().subscribe((allMovies) => {
      console.log(allMovies);
      this.latestMovies = this.mapMovies(allMovies[0]["results"]);
      this.popularMovies = this.mapMovies(allMovies[1]["results"]);
      this.comingSoonMovies = this.mapMovies(allMovies[2]["results"]);
      this.criticMovies = this.mapMovies(allMovies[3]["results"]);
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

  overview(movie) {
    console.log(movie);
  }
}

import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  latestMovies: any = [];
  popularMovies: any = [];
  comingSoonMovies: any = [];
  criticMovies: any = [];


  config: any = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  };

  constructor(private readonly appService: AppService) { }

  ngOnInit() {
    this.appService.getMovies().subscribe(allMovies => {
      console.log(allMovies);
      this.latestMovies = this.mapMovies(allMovies[0]['results']);
      this.popularMovies = this.mapMovies(allMovies[1]['results']);
      this.comingSoonMovies = this.mapMovies(allMovies[2]['results']);
      this.criticMovies = this.mapMovies(allMovies[3]['results']);
    });
  }

  private mapMovies(movies) {
    return movies.map(movie => {
      let result = Object.assign({}, movie);
      result['posterPath'] = `https://image.tmdb.org/t/p/w200/${movie.poster_path}?api_key=abe23ad125116fdc6637848dc070b68e`
      result['overviewPath'] = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}?api_key=abe23ad125116fdc6637848dc070b68e`
      return result;
    });
  }

  overview(movie){
    console.log(movie);
  }

}

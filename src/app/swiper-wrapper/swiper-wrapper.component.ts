import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-swiper-wrapper',
  templateUrl: './swiper-wrapper.component.html',
  styleUrls: ['./swiper-wrapper.component.scss']
})
export class SwiperWrapperComponent implements OnInit {
  @Input() movies: Array<[]>;
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

  constructor(private readonly appService: AppService,
    private router: Router) { }

  ngOnInit() {
  }

  goToMovieDetails(details) {
    this.appService.movieDetails = details;
    this.router.navigate([`movies/${details.id}`])
  }

}

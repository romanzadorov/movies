import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies/movies.component";
import { NgxUsefulSwiperModule } from "ngx-useful-swiper";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperWrapperComponent } from './swiper-wrapper/swiper-wrapper.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent, 
    MoviesComponent, 
    MoviesGridComponent, MovieDetailComponent, VideoDialogComponent, FooterComponent, SwiperWrapperComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    VideoDialogComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

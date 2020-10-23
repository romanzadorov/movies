import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/movies",
    pathMatch: "full"
  },
  {
    path: "movies",
    component: MoviesComponent,
    data: {
      title: "Movies"
    }
  },
  {
    path: "movies/new-releases",
    component: MoviesGridComponent,
    data: {
      title: "New Releases"
    }
  },
  {
    path: "movies/popular",
    component: MoviesGridComponent,
    data: {
      title: "Popular"
    }
  },
  {
    path: "movies/coming-soon",
    component: MoviesGridComponent,
    data: {
      title: "Coming Soon"
    }
  },
  {
    path: "movies/:movieId",
    component: MovieDetailComponent,
    data: {
      title: "Movies"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

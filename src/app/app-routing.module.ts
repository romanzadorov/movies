import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {
    path: "",
    component: MoviesComponent,
    data: {
      title: "Movies"
    }
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: MoviesComponent,
    data: {
      title: "Movies"
    }
  },
  {
    path: "new-releases",
    component: MoviesGridComponent,
    data: {
      title: "New Releases"
    }
  },
  {
    path: "popular",
    component: MoviesGridComponent,
    data: {
      title: "Popular"
    }
  },
  {
    path: "coming-soon",
    component: MoviesGridComponent,
    data: {
      title: "Coming Soon"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

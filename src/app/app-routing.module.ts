import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieGuard } from './guards/movie.guard';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    canActivate: [MovieGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}

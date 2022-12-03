import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series.component';
import { SerialGuard } from './guards/serial.guard';

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent,
    canActivate: [SerialGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesRoutingModule {}

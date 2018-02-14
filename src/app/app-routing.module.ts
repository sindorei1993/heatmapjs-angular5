import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeatmapComponent} from "./heatmap/heatmap.component";

const routes: Routes = [
  {path:'', component:HeatmapComponent},
  {path:'heatmap', component:HeatmapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

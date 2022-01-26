import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { featureComponent } from './feature/feature.component';

const routes: Routes = [
  { path: 'home',component:homeComponent},
  {path: 'feature', component:featureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [homeComponent,featureComponent]
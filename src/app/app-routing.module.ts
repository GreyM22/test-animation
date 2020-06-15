import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'lazy', loadChildren: './lazy-loaded/lazy-loaded.module#LazyLoadedModule'},
  {path: 'home', component: HomeComponent, data: { animation: 'home'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

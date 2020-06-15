import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedComponent } from './lazy-loaded.component';


const routes: Routes = [
  {path: 'lazycomponent', component: LazyLoadedComponent, data: { animation: 'lazy'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }

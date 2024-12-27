import {Routes} from '@angular/router';
import {Component1Component} from './pages/component1/component1.component';
import {Component2Component} from './pages/component2/component2.component';
import {Component3Component} from './pages/component3/component3.component';
import {PageNoFoundComponent} from './pages/page-no-found/page-no-found.component';

export const routes: Routes = [
  { path: 'item1/element1', component: Component1Component },
  { path: 'item1/element2', component: Component2Component },
  { path: 'item1/element3', component: Component3Component },
  { path: 'no-found', pathMatch: 'full', component: PageNoFoundComponent},
  { path: '**', redirectTo: 'no-found' }
];

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { HomelistComponent }   from './homelist/homelist.component';

const appRoutes: Routes = [
{
  path: 'about',
  component: AboutComponent
},
{
    path: 'homelist',
    component: HomelistComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { HomelistComponent }   from './homelist/homelist.component';
import { HomeDetailComponent }   from './home-detail/home-detail.component';

const appRoutes: Routes = [
  {
  path: 'about',
  component: AboutComponent
  },

  {
    path: 'homelist',
    component: HomelistComponent
  },
  {
    path: 'homes/:id',
  }

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

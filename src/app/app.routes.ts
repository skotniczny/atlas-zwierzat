import { Routes } from '@angular/router';
import { AnimalsList } from './animals-list/animals-list';

export const routes: Routes = [
  {
    path: '',
    component: AnimalsList,
    title: 'Atlas Zwierząt Polski'
  },
  },
  {
    path: '**',
    redirectTo: ''
  }

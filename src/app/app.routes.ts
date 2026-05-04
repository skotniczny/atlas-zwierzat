import { Routes } from '@angular/router';
import { AnimalDetail } from './animal-detail/animal-detail';
import { AnimalsList } from './animals-list/animals-list';

export const routes: Routes = [
  {
    path: '',
    component: AnimalsList,
    title: 'Atlas Zwierząt Polski'
  },
  {
    path: 'animals/:animalId',
    component: AnimalDetail
  },
  {
    path: 'site-index',
    component: AnimalsIndex,
    title: 'Skorowidz | Atlas Zwierząt Polski'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

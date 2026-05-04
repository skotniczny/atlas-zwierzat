import { Routes } from '@angular/router';
import { AnimalDetail } from './animal-detail/animal-detail';
import { AnimalsIndex } from './animals-index/animals-index';
import { AnimalsList } from './animals-list/animals-list';
import { AnimalsClasses } from './animals-classes/animals-classes';

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
    path: 'classes',
    component: AnimalsClasses,
    title: 'Gromady | Atlas Zwierząt Polski'
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

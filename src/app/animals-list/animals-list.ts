import { Component, computed, inject } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { signal } from '@angular/core';
import { AnimalsListItem } from '../models/animal';
import { RouterLink } from '@angular/router';
import { AnimalCard } from '../animal-card/animal-card';

@Component({
  selector: 'app-animals-list',
  imports: [RouterLink, AnimalCard],
  templateUrl: './animals-list.html',
  styleUrl: './animals-list.css',
})
export class AnimalsList {
  service = inject(AnimalService);
  query = signal('')
  animals = toSignal(this.service.getAnimals(), { initialValue: [] as AnimalsListItem[] })
  filteredAnimals = computed(() => {
    return this.animals().filter(animal => animal.name.toLocaleLowerCase().includes(this.query().toLocaleLowerCase()))
  })
}

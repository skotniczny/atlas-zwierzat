import { Component, computed, inject } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AnimalsListItem } from '../models/animal';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { PageNav } from '../page-nav/page-nav';

@Component({
  selector: 'app-animals-index',
  imports: [RouterLink, PageNav],
  templateUrl: './animals-index.html',
  styleUrl: './animals-index.css',
})
export class AnimalsIndex {
  service = inject(AnimalService);
  animals = toSignal(this.service.getAnimals(), { initialValue: [] as AnimalsListItem[]});
  pageIndex = computed(() => {
    const index = this.animals()
      .reduce<Record<string, AnimalsListItem[]>>((acc, animal) => {
        const letter = animal.name[0];
        (acc[letter] ??= []).push(animal);
        return acc;
      }, {});

      return Object.entries(index)
        .map(([letter, animals]) => ({letter, animals}))
        .sort((a, b) => a.letter.localeCompare(b.letter));
  });

  scroller = inject(ViewportScroller)

  gotoHash(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}

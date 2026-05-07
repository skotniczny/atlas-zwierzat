import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AnimalsListItem } from '../models/animal';
import { RouterLink } from '@angular/router';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-animals-index',
  imports: [RouterLink, SiteHeader],
  templateUrl: './animals-index.html',
  styleUrl: './animals-index.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}

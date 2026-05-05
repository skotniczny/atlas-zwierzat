import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { AnimalClasses } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { AnimalCard } from '../animal-card/animal-card';
import { PageNav } from '../page-nav/page-nav';

@Component({
  selector: 'app-animals-classes',
  imports: [RouterLink, AnimalCard, PageNav],
  templateUrl: './animals-classes.html',
  styleUrl: './animals-classes.css',
})
export class AnimalsClasses {
  service = inject(AnimalService);
  classes = toSignal(this.service.getClasses(), { initialValue: {} as AnimalClasses });
  classEntries = computed(() => Object.entries(this.classes()).map(([name, animals]) => ({ name, animals })));

  activeTab = signal('owady');

  setTab(name: string) {
    this.activeTab.set(name);
  }
}

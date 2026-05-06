import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  classEntries = this.service.classEntries;

  activeTab = signal('owady');

  setTab(name: string) {
    this.activeTab.set(name);
  }
}

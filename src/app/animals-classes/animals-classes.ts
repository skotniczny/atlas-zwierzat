import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { AnimalCard } from '../animal-card/animal-card';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-animals-classes',
  imports: [RouterLink, AnimalCard, SiteHeader],
  templateUrl: './animals-classes.html',
  styleUrl: './animals-classes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsClasses {
  service = inject(AnimalService);
  classEntries = this.service.classEntries;

  activeTab = signal('owady');

  setTab(name: string) {
    this.activeTab.set(name);
  }
}

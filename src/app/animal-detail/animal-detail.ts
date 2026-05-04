import { Component, inject, input } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { AnimalService } from '../services/animal.service';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-animal-detail',
  imports: [RouterLink],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.css',
})
export class AnimalDetail {
  animalId = input.required<string>();
  service = inject(AnimalService);
  title = inject(Title);
  animal = toSignal(
    toObservable(this.animalId).pipe(
      switchMap(id => this.service.getAnimal(id)),
      tap(animal => this.title.setTitle(animal.name + ' | Atlas Zwierząt Polski'))
    )
  );

  print() {
    window.print();
  }

  back() {
    window.history.back();
  }
}

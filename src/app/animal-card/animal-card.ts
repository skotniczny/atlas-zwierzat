import { Component, input } from '@angular/core';
import { AnimalsListItem } from '../models/animal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  imports: [RouterLink],
  templateUrl: './animal-card.html',
  styleUrl: './animal-card.css',
})
export class AnimalCard {
  animal = input.required<AnimalsListItem>();
}

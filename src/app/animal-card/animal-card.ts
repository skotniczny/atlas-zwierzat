import { Component, input } from '@angular/core';
import { AnimalsListItem } from '../models/animal';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-animal-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './animal-card.html',
  styleUrl: './animal-card.css',
})
export class AnimalCard {
  animal = input.required<AnimalsListItem>();
}

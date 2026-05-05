import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable } from "rxjs"
import { Animal, AnimalsListItem, AnimalClasses } from "../models/animal";
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class AnimalService {
  #http = inject(HttpClient);
  #base = inject(PlatformLocation).getBaseHrefFromDOM();

  getAnimals(): Observable<AnimalsListItem[]> {
    return this.#http.get<AnimalsListItem[]>(`${this.#base}animals/animals.json`);
  }

  getClasses(): Observable<AnimalClasses> {
    return this.#http.get<AnimalClasses>(`${this.#base}animals/classes.json`);
  }

  getAnimal(id: string): Observable<Animal> {
    return this.#http.get<Animal>(`${this.#base}animals/${id}.json`);
  }
}

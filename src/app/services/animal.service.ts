import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject } from '@angular/core';
import { Observable } from "rxjs"
import { Animal, AnimalsListItem, AnimalClasses } from "../models/animal";
import { PlatformLocation } from '@angular/common';
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})

export class AnimalService {
  #http = inject(HttpClient);
  #base = inject(PlatformLocation).getBaseHrefFromDOM();

  #classes = toSignal(this.#getClasses(), { initialValue: {} as AnimalClasses });
  classEntries = computed(() => Object.entries(this.#classes()).map(([name, animals]) => ({ name, animals })));

  getAnimals(): Observable<AnimalsListItem[]> {
    return this.#http.get<AnimalsListItem[]>(`${this.#base}animals/animals.json`);
  }

  getAnimal(id: string): Observable<Animal> {
    return this.#http.get<Animal>(`${this.#base}animals/${id}.json`);
  }

  #getClasses(): Observable<AnimalClasses> {
    return this.#http.get<AnimalClasses>(`${this.#base}animals/classes.json`);
  }
}

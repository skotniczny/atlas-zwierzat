import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable } from "rxjs"
import { Animal, AnimalsListItem, AnimalClasses } from "../models/animal";

@Injectable({
  providedIn: 'root',
})

export class AnimalService {
  #http = inject(HttpClient);

  getAnimals(): Observable<AnimalsListItem[]> {
    return this.#http.get<AnimalsListItem[]>("/animals/animals.json");
  }

  getClasses(): Observable<AnimalClasses> {
    return this.#http.get<AnimalClasses>("/animals/classes.json");
  }

  getAnimal(id: string): Observable<Animal> {
    return this.#http.get<Animal>(`/animals/${id}.json`);
  }
}



export interface Animal {
  id: string;
  name: string;
  latinName: string;
  habitat: string;
  food: string;
  chronotype: string;
  activity: string;
  conservation?: string;
  development: string;
  img: string;
}

export type AnimalsListItem = Pick<Animal, "id" | "name" | "img">;
export type AnimalClasses = Record<string, AnimalsListItem[]>;
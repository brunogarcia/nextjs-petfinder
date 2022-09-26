import type { Animal, AnimalType, AnimalTypeBreed } from './petfinder.interface.model';

export interface AnimalsRequestQuery {
  type?: string;
  breed?: string;
  size?: string;
  gender?: string;
  age?: string;
  color?: string;
  coat?: string;
  status?: "adoptable" | "adopted";
  name?: string;
  organization?: string;
  good_with_children?: boolean | 1 | 0;
  good_with_dogs?: boolean | 1 | 0;
  good_with_cats?: boolean | 1 | 0;
  house_trained?: true | 1;
  declawed?: true | 1;
  special_needs?: true | 1;
  location?: string;
  distance?: number;
  before?: string;
  after?: string;
  sort: "recent" | "-recent" | "distance" | "-distance" | "random";
  page?: number;
  limit?: number;
}

export interface AnimalResponse {
  animal: Animal;
}

export interface AnimalsResponse {
  animals: Animal[];
  pagination: {
    count_per_page: number;
    total_count: number;
    current_page: number;
    total_pages: number;
    _links: {};
  };
}

export interface AnimalTypeResponse {
  type: AnimalType;
}

export interface AnimalTypeBreedsResponse {
  breeds: AnimalTypeBreed[];
}

export interface AnimalTypesResponse {
  types: AnimalType[];
}

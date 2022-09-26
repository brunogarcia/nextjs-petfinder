import type { IGetBlurhashReturn, ILoadImageReturn } from "./petfinder.interface.image";

export interface AnimalAttributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean;
  special_needs: boolean;
  shots_current: boolean;
}

export interface AnimalBreed {
  primary: string;
  secondary: string | null;
  mixed: boolean;
  unknown: boolean;
}

export interface AnimalColor {
  primary: string;
  secondary: string | null;
  tertiary: string | null;
}

export interface AnimalContact {
  email: string;
  phone: string;
  address: {
    address1: string | null;
    address2: string | null;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
}

export interface AnimalEnvironment {
  children: false;
  dogs: boolean;
  cats: boolean;
}

export interface AnimalPhoto {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export interface AnimalVideo {
  embed: string;
}

export interface Animal {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: AnimalBreed;
  colors: AnimalColor;
  age: "Baby" | "Young" | "Adult" | "Senior";
  gender: "Male" | "Female" | "Unknown";
  size: "Small" | "Medium" | "Large" | "Xlarge";
  coat: "Short" | "Medium" | "Long" | "Wire" | "Hairless" | "Curly";
  name: string;
  description: string;
  photos: AnimalPhoto[];
  videos: AnimalVideo[];
  status: "adoptable" | "adopted";
  attributes: AnimalAttributes;
  environment: AnimalEnvironment;
  tags: string[];
  contact: AnimalContact;
  published_at: string;
  distance: number;
  _links: {
    self: {
      href: string;
    };
    type: {
      href: string;
    };
    organization: {
      href: string;
    };
  };
}

export interface AnimalTypeBreed {
  name: string;
  _links: {
    type: {
      href: string;
    };
  };
}

export interface AnimalType {
  id?: string;
  blurhash?: IGetBlurhashReturn;
  img?: ILoadImageReturn;
  name: string;
  coats: string[];
  colors: string[];
  genders: string[];
  breeds?: AnimalTypeBreed[];
  _links: {
    self: {
      href: string;
    };
    breeds: {
      href: string;
    };
  };
}

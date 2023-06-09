export type CharacterAPIResponse = {
  info: Info;
  results: Result[];
};

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};

export type Result = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export type Location = {
  name: string;
  url: string;
};

export interface IMovie {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
  name?: String;
}

export interface IFullMovieData {
  adult: Boolean;
  backdrop_path: String;
  genres: IGenre[];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
  name?: String;
}

export type TMovieList = [IMovie];

export interface IGenre {
  id: Number;
  name: String;
}

export type TGenresList = [IGenre];

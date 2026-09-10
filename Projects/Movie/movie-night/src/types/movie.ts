export interface Movie {
  id: number;
  title: string;
  posterPath: string | null;
  releaseDate: string;
  genreIds: number[];
}
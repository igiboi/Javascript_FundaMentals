export interface Movie {
  id: number;
  title: string;
  posterPath: string | null;
  releaseDate: string | null;
  genreIds: number[];
}
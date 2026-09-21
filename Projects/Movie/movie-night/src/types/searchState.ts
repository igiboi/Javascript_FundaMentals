import type { Movie } from "./movie";

export type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; movies: Movie[] };

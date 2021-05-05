class MovieSummary {
  title: Readonly<String>;
  year: Readonly<string>;
  imdbID: Readonly<string>;
  poster: Readonly<string>;
  nominated: boolean;

  constructor(
    imdbID: string,
    title: string,
    year: string,
    poster: string,
    nominated: boolean,
  ) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.poster = poster;
    this.nominated = nominated;
  }

  eq(o: MovieSummary) {
    this.imdbID === o.imdbID;
  }
}

export default MovieSummary;

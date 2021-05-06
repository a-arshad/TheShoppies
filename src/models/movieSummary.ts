class MovieSummary {
  id: Readonly<string>;
  title: Readonly<String>;
  year: Readonly<string>;
  poster: Readonly<string>;
  nominated: boolean;

  constructor(
    id: string,
    title: string,
    year: string,
    poster: string,
    nominated: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.nominated = nominated;
  }

  equals(o: MovieSummary) {
    this.id === o.id;
  }
}

export default MovieSummary;

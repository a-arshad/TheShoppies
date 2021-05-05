import MovieSummary from 'src/models/movieSummary';
// TODO: hide the api key in a .env file
const API_URL = `http://www.omdbapi.com/?apikey=4e29ebc&type=movie`;

interface IMovieSearchResponse {
  Response: string;
  Search: {
    imdbID: string;
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
  }[];
  Error: string;
}

const requestInit: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const moviesFetch = async (urlParams: string) =>
  fetch(API_URL + `&${urlParams}`, requestInit)
    .then(async resp => {
      if (!resp.ok) {
        const msg = 'API Fetch failed with HTTP Status ' + resp.status;
        console.error(msg);
        throw Error();
      }
      return await resp.json();
    })
    .catch(err => {
      console.error(err);
      throw Error();
    });

export const searchMovies = async (
  searchTerm: string,
  page: number,
): Promise<MovieSummary[]> =>
  moviesFetch(`s=${searchTerm}&page=${page}`).then(
    (movieSearchResponse: IMovieSearchResponse) => {
      if (movieSearchResponse.Response.toLowerCase() == 'true') {
        return movieSearchResponse.Search.map(
          searchResult =>
            new MovieSummary(
              searchResult.imdbID,
              searchResult.Title,
              searchResult.Year,
              searchResult.Poster,
              false,
            ),
        );
      } else {
        throw Error(movieSearchResponse.Error);
      }
    },
  );

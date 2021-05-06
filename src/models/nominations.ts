import MovieSummary from './movieSummary';

export type Nominees = ReadonlyMap<string, MovieSummary>;

class Nominations {
  _nominees: Map<string, MovieSummary>;
  _updateNominations: (nominees: Nominees) => void;

  constructor(
    updateNominations: (nominees: Nominees) => void,
    nominees?: Map<string, MovieSummary>,
  ) {
    this._updateNominations = updateNominations;
    this._nominees = nominees ?? new Map<string, MovieSummary>();
  }

  getNominees(): Nominees {
    return this._nominees;
  }

  isNominated(id: string): boolean {
    return this._nominees.has(id);
  }

  toggleNomination(movieSummary: MovieSummary) {
    const nominee = this._nominees.get(movieSummary.id);
    if (nominee) {
      nominee.nominated = false;
      this._nominees.delete(movieSummary.id);
    } else {
      movieSummary.nominated = true;
      this._nominees.set(movieSummary.id, movieSummary);
    }

    this._updateNominations(this.getNominees());
  }
}

export default Nominations;

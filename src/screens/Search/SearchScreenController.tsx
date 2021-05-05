import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import IMovieSummary from 'src/models/movieDetail';
import {searchMovies} from 'src/util/movieEndpoint';
import SearchScreenView from './SearchScreenView';

const SearchScreenController = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IMovieSummary[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    search();
  }, [page, searchTerm]);

  const onRefresh = () => {
    setPage(1);
    setIsRefreshing(true);
  };

  const onNewSearch = (newSearchTerm: string) => {
    setPage(1);
    setSearchTerm(newSearchTerm);
  };

  const loadNextPage = () => {
    if (page < 100) {
      setPage(page + 1);
    }
  };

  const search = async () => {
    if (searchTerm) {
      setIsLoading(true);
      searchMovies(searchTerm, page)
        .then(newSearchResults => {
          setErrorMessage('');
          if (page > 1) {
            setSearchResults(
              _.uniqBy([...searchResults, ...newSearchResults], 'imdbID'),
            );
          } else {
            setSearchResults(newSearchResults);
          }
        })
        .catch(resp => {
          setSearchResults([]);
          setErrorMessage(
            resp.message ?? 'An error has occurred, please try again.',
          );
        })
        .finally(() => {
          setIsLoading(false);
          setIsRefreshing(false);
        });
    } else {
      setErrorMessage('');
      setSearchResults([]);
    }
  };

  return (
    <SearchScreenView
      searchResults={searchResults}
      page={page}
      isLoading={isLoading}
      isRefreshing={isRefreshing}
      errorMessage={errorMessage}
      onSearch={onNewSearch}
      loadNextPage={loadNextPage}
      onRefresh={onRefresh}
      onSearchResultSelect={() => null}
      onBack={() => null}
    />
  );
};

export default SearchScreenController;

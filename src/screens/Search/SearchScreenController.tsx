import {StackNavigationProp} from '@react-navigation/stack';
import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import MovieSummary from 'src/models/movieSummary';
import {searchMovies} from 'src/util/moviesGateway';
import {RootStackParamList, ScreenName} from 'src/util/screens';
import context from 'src/util/context';
import SearchScreenView from './SearchScreenView';

interface SearchScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, ScreenName.SEARCH>;
}

const SearchScreenController = (props: SearchScreenControllerProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieSummary[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {nominations: nomiations} = useContext(context);

  useEffect(() => {    
    search();
  }, [page, searchTerm]);

  const onRefresh = () => {
    setIsRefreshing(true);
    // useEffect doesn't get called if setPage doesn't change the value of page (when page === 1)
    if (page === 1) {
      search();
    } else {
      setPage(1);
    }
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
      searchMovies(searchTerm, page, nomiations)
        .then(newSearchResults => {
          setErrorMessage('');
          addSearchResults(newSearchResults);
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

  const addSearchResults = (newSearchResults: MovieSummary[]) => {
    if (page > 1) {
      newSearchResults = _.uniqWith(
        [...searchResults, ...newSearchResults],
        (a, b) => a.id === b.id,
      );
    }

    newSearchResults = newSearchResults.map(searchResult => {
      return searchResult;
    });

    setSearchResults(newSearchResults);
  };

  const onBack = () => props.navigation.goBack();

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
      onBack={onBack}
    />
  );
};

export default SearchScreenController;

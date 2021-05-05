import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import SearchBar from 'src/components/SearchBar/SearchBar';
import IMovieSummary from '~/src/models/movieSummary';
import {theme} from 'src/util/themes';
import useStyles from './SearchScreen.modules';
import MovieList from 'src/components/MovieList/MovieList';

interface SearchScreenViewProps {
  searchResults: IMovieSummary[];
  isLoading: boolean;
  isRefreshing: boolean;
  errorMessage: string;
  page: number;
  onSearch: (searchTerm: string) => void;
  loadNextPage: () => void;
  onRefresh: () => void;
  onSearchResultSelect: () => void;
  onBack: () => void;
}

const SearchScreenView = (props: SearchScreenViewProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder={'Search movies'}
            onChangeText={props.onSearch}
          />
        </View>
        <TouchableHighlight
          style={styles.cancelButton}
          underlayColor={theme.lightGrey}
          onPress={props.onBack}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableHighlight>
      </View>
      <MovieList
        data={props.searchResults}
        page={props.page}
        refreshing={props.isRefreshing}
        errorMessage={props.errorMessage}
        keyExtractor={searchResult => searchResult.imdbID}
        onRefresh={props.onRefresh}
        onMovieSelect={props.onSearchResultSelect}
        onEndReached={props.loadNextPage}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

export default SearchScreenView;

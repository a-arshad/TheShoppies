import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import SearchBar from 'src/components/SearchBar/SearchBar';
import MovieSummary from 'src/models/movieSummary';
import {theme} from 'src/util/themes';
import useStyles from './SearchScreen.modules';
import MovieList from 'src/components/MovieList/MovieList';

interface SearchScreenViewProps {
  searchResults: MovieSummary[];
  isLoading: boolean;
  isRefreshing: boolean;
  errorMessage: string;
  page: number;
  onSearch: (searchTerm: string) => void;
  loadNextPage: () => void;
  onRefresh: () => void;
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
        keyExtractor={(searchResult: MovieSummary) => searchResult.id}
        onRefresh={props.onRefresh}
        onEndReached={props.loadNextPage}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

export default SearchScreenView;

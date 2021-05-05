import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  VirtualizedListWithoutRenderItemProps,
} from 'react-native';
import MovieItem from 'src/components/SearchResult/SearchResult';
import Divider from 'src/components/Divider/Divider';
import useStyles from './MovieList.modules';

interface MovieListProps extends VirtualizedListWithoutRenderItemProps<any> {
  errorMessage: string;
  page?: number;
  refreshing: boolean;
  onRefresh: () => void;
  onMovieSelect: () => void;
}

const MovieList = (props: MovieListProps) => {
  const styles = useStyles();
  const [flatList, setFlatList] = useState<FlatList | null>(null);

  if (props?.page === 1) {
    flatList?.scrollToOffset({animated: true, offset: 0});
  }

  return (
    <View style={styles.container}>
      {props.errorMessage ? (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      ) : (
        <FlatList
          ref={flatList => setFlatList(flatList)}
          ItemSeparatorComponent={Divider}
          data={props.data}
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          renderItem={({item}) => (
            <MovieItem movieSummary={item} onSelect={props.onMovieSelect} />
          )}
          {...props}
        />
      )}
    </View>
  );
};

export default MovieList;

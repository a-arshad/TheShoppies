import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View, Image} from 'react-native';
import IMovieSummary from 'src/models/movieDetail';
import {theme} from 'src/util/themes';
import useStyles from './SearchResult.modules';

interface MovieItemProps {
  movieSummary: IMovieSummary;
  onSelect: (moveSummary: IMovieSummary) => void;
}

const MovieItem = (props: MovieItemProps) => {
  const styles = useStyles();

  return (
    <View
      style={styles.container}
      onTouchStart={() => props.onSelect(props.movieSummary)}>
      <Image
        style={styles.poster}
        source={{
          uri: props.movieSummary.poster,
        }}
      />
      <View style={styles.movieInfo}>
        <Text style={styles.title} numberOfLines={2}>
          {props.movieSummary.title}
        </Text>
        <Text style={styles.year} numberOfLines={1}>
          {props.movieSummary.year}
        </Text>
      </View>
      <FontAwesomeIcon
        color={theme.grey}
        size={theme.iconSizeRegular}
        icon={faPlusCircle}
      />
    </View>
  );
};

export default MovieItem;

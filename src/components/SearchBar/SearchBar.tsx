import React, {useCallback, useState} from 'react';
import {TextInput, TextInputProps, TouchableOpacity, View} from 'react-native';
import {faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import useStyles from './SearchBar.modules';
import {theme} from 'src/util/themes';
import {debounce} from 'lodash';

const SEARCH_DEBOUNCE_DELAY = 500;

const SearchBar = (props: TextInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [textInput, setTextInput] = useState<TextInput | null>(null);
  const styles = useStyles();

  const onChangeTextDebounced = useCallback(
    debounce(
      (text: string) => props.onChangeText?.(text),
      SEARCH_DEBOUNCE_DELAY,
    ),
    [],
  );
  const onChangeText = (text: string) => {
    setSearchTerm(text);
    onChangeTextDebounced(text);
  };
  const clearText = () => {
    textInput?.clear();
    setSearchTerm('');
    props.onChangeText?.('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <FontAwesomeIcon
          style={styles.searchIcon}
          color={theme.grey}
          size={theme.iconSizeRegular}
          icon={faSearch}
        />
        <TextInput
          ref={textInput => setTextInput(textInput)}
          style={styles.textInput}
          placeholderTextColor={theme.grey}
          {...props}
          onChangeText={onChangeText}
        />
        {searchTerm ? (
          <TouchableOpacity onPress={clearText}>
            <FontAwesomeIcon
              style={styles.searchIcon}
              color={theme.grey}
              size={theme.iconSizeRegular}
              icon={faTimesCircle}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SearchBar;

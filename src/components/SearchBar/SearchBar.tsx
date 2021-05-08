import React, {useCallback, useState} from 'react';
import {TextInput, TextInputProps, TouchableOpacity, View} from 'react-native';
import {CircleCancelMajor, SearchMajor} from 'src/components/Icons/PolarisIcon';
import useStyles from './SearchBar.modules';
import {isLightTheme, theme} from 'src/util/themes';
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
        <SearchMajor style={styles.searchIcon} />
        <TextInput
          ref={textInput => setTextInput(textInput)}
          style={styles.textInput}
          placeholderTextColor={
            isLightTheme() ? theme.colors.darkGrey : theme.colors.lightGrey
          }
          {...props}
          onChangeText={onChangeText}
        />
        {searchTerm ? (
          <TouchableOpacity style={styles.searchIcon} onPress={clearText}>
            <CircleCancelMajor />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SearchBar;

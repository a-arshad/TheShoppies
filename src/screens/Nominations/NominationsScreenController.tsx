import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList, ScreenName} from 'src/util/screens';
import NominationsScreenView from './NominationsScreenView';

interface NominationsScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, ScreenName.NOMINATIONS>;
}

const NominationsScreenController = (
  props: NominationsScreenControllerProps,
) => {
  const onSearchIconPress = () => props.navigation.navigate(ScreenName.SEARCH);

  return <NominationsScreenView onSearchIconPress={onSearchIconPress} />;
};

export default NominationsScreenController;

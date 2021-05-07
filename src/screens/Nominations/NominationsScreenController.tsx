import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {RootStackParamList, ScreenName} from 'src/util/screens';
import context from 'src/util/context';
import NominationsScreenView from './NominationsScreenView';

interface NominationsScreenControllerProps {
  navigation: StackNavigationProp<RootStackParamList, ScreenName.NOMINATIONS>;
}

const NominationsScreenController = (
  props: NominationsScreenControllerProps,
) => {
  const {nominations} = useContext(context);

  const onSearchIconPress = () => props.navigation.navigate(ScreenName.SEARCH);

  return (
    <NominationsScreenView
      onSearchIconPress={onSearchIconPress}
      nominees={[...nominations._nominees.values()]}
    />
  );
};

export default NominationsScreenController;

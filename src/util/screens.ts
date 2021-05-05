import NominationsScreenController from 'src/screens/Nominations/NominationsScreenController';
import SearchScreenController from 'src/screens/Search/SearchScreenController';

export enum ScreenName {
  NOMINATIONS = 'Nominations',
  SEARCH = 'Search',
}

export const screenComponents = {
  [ScreenName.NOMINATIONS]: NominationsScreenController,
  [ScreenName.SEARCH]: SearchScreenController,
};

export type RootStackParamList = {
  [ScreenName.NOMINATIONS]: undefined;
  [ScreenName.SEARCH]: undefined;
};

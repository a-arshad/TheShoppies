import {Appearance} from 'react-native';

export const isLightTheme = () => Appearance.getColorScheme() === 'light';

export const theme = {
  colors: {
    primary: '#F9A825',
    darkGrey: '#5C5F62',
    grey: '#AAAAAA',
    lightGrey: '#F2F2F2',
    borderColor: isLightTheme() ? '#E8E8E8' : '#252525',
    textColor: isLightTheme() ? 'black' : 'white',
    backgroundColor: isLightTheme() ? 'white' : 'black',
  },
  font: {
    fontSizeHeading: 24,
    fontSizeRegular: 18,
    iconSizeRegular: 25,
  },
  spacing: {
    extraTight: 4,
    tight: 8,
    base: 16,
    loose: 20,
  },
};

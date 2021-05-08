import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieSummary from '../models/movieSummary';
import {Nominees} from '../models/nominations';

const NOMINEES_KEY = 'nominees';

export const updateNominees = async (nominees: Nominees) => {
  try {
    await AsyncStorage.setItem(NOMINEES_KEY, JSON.stringify([...nominees]));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getNominees = async (): Promise<Map<string, MovieSummary>> => {
  try {
    const nominees = JSON.parse(
      (await AsyncStorage.getItem(NOMINEES_KEY)) ?? 'null',
    );
    return nominees
      ? new Map<string, MovieSummary>(nominees)
      : new Map<string, MovieSummary>();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Alert.alert('Failed to save the data to the storage');
  }
};

export const getData = async (key: string, fallback: number) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return fallback;
  }
};

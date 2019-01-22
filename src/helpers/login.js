import { AsyncStorage } from 'react-native';

import { AUTH_ID_TOKEN } from '../config/constants';

export const setUserToken = token => AsyncStorage.setItem(AUTH_ID_TOKEN, token);

export const getUserToken = () => AsyncStorage.getItem(AUTH_ID_TOKEN);

export const removeUserToken = () => AsyncStorage.removeItem(AUTH_ID_TOKEN);

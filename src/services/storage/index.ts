import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
    getBaseURL: () => AsyncStorage.getItem('URL'),
    setBaseURL: (url: string) => AsyncStorage.setItem('URL', url),
};

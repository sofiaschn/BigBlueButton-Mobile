import AsyncStorage from '@react-native-async-storage/async-storage';
import { University } from './types';

export const Storage = {
    getUniversity: async (): Promise<University | null> => {
        const saved = await AsyncStorage.getItem('University');

        return saved ? JSON.parse(saved) : null;
    },

    setUniversity: (university: University) =>
        AsyncStorage.setItem('University', JSON.stringify(university)),
};

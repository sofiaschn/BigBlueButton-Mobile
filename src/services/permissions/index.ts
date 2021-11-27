import { Platform } from 'react-native';
import {
    Permission,
    PERMISSIONS,
    requestMultiple,
} from 'react-native-permissions';

export const Permissions = {
    request: async (request: Array<'camera' | 'microphone'>) => {
        const permissions: Permission[] = [];

        if (request.includes('camera')) {
            permissions.push(
                Platform.OS === 'ios'
                    ? PERMISSIONS.IOS.CAMERA
                    : PERMISSIONS.ANDROID.CAMERA,
            );
        }
        if (request.includes('microphone')) {
            permissions.push(
                Platform.OS === 'ios'
                    ? PERMISSIONS.IOS.MICROPHONE
                    : PERMISSIONS.ANDROID.RECORD_AUDIO,
            );
        }

        const result = await requestMultiple(permissions);

        if (Object.values(result).some((status) => status !== 'granted')) {
            throw new Error('User did not grant all permissions.');
        }
    },
};

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';
import PushNotification, {
    PushNotificationObject,
} from 'react-native-push-notification';

export const Notifications = {
    configure: () => {
        PushNotification.configure({
            onNotification: (notification) =>
                notification.finish(PushNotificationIOS.FetchResult.NoData),

            requestPermissions: Platform.OS === 'ios',
        });

        PushNotification.createChannel(
            {
                channelId: 'bbbmobilenotification',
                channelName: 'bbbmobilenotification',
                vibrate: true,
                playSound: true,
            },
            () => {},
        );
    },

    removeAll: () => PushNotification.removeAllDeliveredNotifications(),

    create: (notification: PushNotificationObject) =>
        PushNotification.localNotification(notification),
};

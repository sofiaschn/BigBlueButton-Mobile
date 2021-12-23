import BackgroundService from 'react-native-background-actions';
import translate from '../translations';

export const Background = {
    start: async () => {
        await BackgroundService.start(
            async () => {
                await new Promise(async () => {
                    for (let i = 0; BackgroundService.isRunning(); i++) {
                        await new Promise((resolve) =>
                            setTimeout(resolve, 1000),
                        );
                    }
                });
            },
            {
                taskName: 'bbbmobiletask',
                taskTitle: translate('meeting_in_progress_notification'),
                taskDesc: '',
                taskIcon: {
                    name: 'ic_launcher',
                    type: 'mipmap',
                },
                linkingURI: 'bbb://',
            },
        );
    },
    stop: async () => BackgroundService.stop(),
};

import React, { useEffect, useState } from 'react';
import { Button, Linking } from 'react-native';
import {
    Container,
    Text,
    PrimaryContainer,
    MainContainer,
    LinkInput,
    ErrorText,
    LinkText,
    Link,
    InfoContainer,
} from './styles';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { Notifications } from '../../services/notifications';
import { useIsFocused } from '@react-navigation/native';
import translate from '../../services/translations';
import { Permissions } from '../../services/permissions';

Notifications.configure();

const bbbPath = '/mod/bigbluebuttonbn/view.php?id=';
const githubURL = 'https://matheuschn.github.io/BigBlueButton-Mobile/';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
    const [link, setLink] = useState('');
    const [invalidLink, setInvalidLink] = useState(false);
    const [onMeeting, setOnMeeting] = useState(false);
    const university = route?.params?.university;
    const isFocused = useIsFocused();

    useEffect(() => {
        Linking.getInitialURL().then(async (url) => {
            await Permissions.request(['camera', 'microphone']);

            if (url?.includes(university.url) && !onMeeting) {
                setOnMeeting(true);
                setLink(url);
                navigation.navigate('Meeting', { url });
            }
        });
    }, []);

    useEffect(() => {
        if (isFocused) {
            Notifications.removeAll();
        }
    }, [isFocused]);

    const checkLink = () => {
        if (link.includes(university.url + bbbPath)) {
            setOnMeeting(true);
            navigation.navigate('Meeting', { url: link });
        } else {
            setInvalidLink(true);
        }
    };

    return (
        <Container>
            <PrimaryContainer>
                <MainContainer behavior="padding">
                    {onMeeting ? (
                        <Button
                            title={translate('back_to_meeting_button')}
                            onPress={() =>
                                navigation.navigate('Meeting', {
                                    url: link,
                                })
                            }
                        />
                    ) : (
                        <>
                            <Text>{translate('insert_link_text')}</Text>
                            {invalidLink && (
                                <ErrorText>
                                    {translate('invalid_link_text')}
                                </ErrorText>
                            )}
                            <LinkInput
                                value={link}
                                onChangeText={(text) => {
                                    setLink(text);
                                    setInvalidLink(false);
                                }}
                                returnKeyType={'go'}
                                onSubmitEditing={checkLink}
                                placeholder={
                                    university.url +
                                    bbbPath.substring(0, 20) +
                                    '...'
                                }
                                placeholderTextColor={'grey'}
                            />
                            <Button
                                title={translate('join_button')}
                                onPress={checkLink}
                                disabled={!link.length || invalidLink}
                            />
                        </>
                    )}
                </MainContainer>
                <InfoContainer>
                    <Link onPress={() => Linking.openURL(githubURL)}>
                        <LinkText>{translate('support_text')}</LinkText>
                    </Link>
                    <Text>
                        {translate('legal_text').replace(
                            '{uni}',
                            university.name,
                        )}
                    </Text>
                </InfoContainer>
            </PrimaryContainer>
        </Container>
    );
};

export default Home;

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
    LinkContainer,
} from './styles';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { Notifications } from '../../services/notifications';
import { useIsFocused } from '@react-navigation/native';
import translate from '../../services/translations';
import { Storage } from '../../services/storage';
import { Universities } from '../Configuration';

Notifications.configure();

const bbbPath = '/mod/bigbluebuttonbn/view.php?id=';
const githubURL = 'https://matheuschn.github.io/BigBlueButton-Mobile/';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
    const loggedIn = route?.params?.loggedIn;
    const [link, setLink] = useState('');
    const [invalidLink, setInvalidLink] = useState(false);
    const [onMeeting, setOnMeeting] = useState(false);
    const [baseURL, setBaseURL] = useState(route?.params?.baseURL);
    const isFocused = useIsFocused();

    Storage.getBaseURL().then((savedBaseURL) => {
        if (savedBaseURL) {
            setBaseURL(savedBaseURL);
        } else {
            navigation.navigate('Configuration');
        }
    });

    Linking.getInitialURL().then((url) => {
        if (loggedIn && url && baseURL && url.includes(baseURL) && !onMeeting) {
            setOnMeeting(true);
            setLink(url);
            navigation.navigate('Meeting', { url });
        }
    });

    useEffect(() => {
        if (!loggedIn && baseURL) {
            navigation.navigate('Login', { baseURL: baseURL });
        }
    }, [loggedIn, navigation, baseURL]);

    useEffect(() => {
        if (isFocused) {
            Notifications.removeAll();
        }
    }, [isFocused]);

    const checkLink = () => {
        if (link.includes(baseURL + bbbPath)) {
            setOnMeeting(true);
            navigation.navigate('Meeting', { url: link });
        } else {
            setInvalidLink(true);
        }
    };

    return (
        <Container>
            <PrimaryContainer>
                <MainContainer>
                    {!loggedIn && (
                        <>
                            <Text>{translate('need_login_text')}</Text>
                            <Button
                                title="LOGIN"
                                onPress={() =>
                                    navigation.navigate('Login', {
                                        baseURL: baseURL!,
                                    })
                                }
                            />
                        </>
                    )}
                    {loggedIn && (
                        <>
                            {!onMeeting && (
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
                                            baseURL +
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
                            {onMeeting && (
                                <Button
                                    title={translate('back_to_meeting_button')}
                                    onPress={() =>
                                        navigation.navigate('Meeting', {
                                            url: link,
                                        })
                                    }
                                />
                            )}
                        </>
                    )}
                </MainContainer>
                <LinkContainer>
                    <Link onPress={() => Linking.openURL(githubURL)}>
                        <LinkText>{translate('support_text')}</LinkText>
                    </Link>
                </LinkContainer>
                <Text>
                    {translate('legal_text').replace(
                        '{uni}',
                        Universities.find((obj) => obj.baseURL === baseURL)
                            ?.name!,
                    )}
                </Text>
            </PrimaryContainer>
        </Container>
    );
};

export default Home;

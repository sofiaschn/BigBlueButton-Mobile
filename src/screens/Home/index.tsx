import React, { useEffect, useState } from 'react';
import { Button, Linking } from 'react-native';
import { Permissions } from '../../services/permissions';
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

Notifications.configure();
Notifications.removeAll();

const baseURL = 'moodle.ufsc.br/mod/bigbluebuttonbn/view.php?id=';
const githubURL = 'https://github.com/matheuschn/big-blue-button-mobile';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
    const loggedIn = route?.params?.loggedIn;
    const [link, setLink] = useState('');
    const [invalidLink, setInvalidLink] = useState(false);
    const [onMeeting, setOnMeeting] = useState(false);

    Permissions.request(['camera', 'microphone']);

    Linking.getInitialURL().then((url) => {
        if (loggedIn && url) {
            setOnMeeting(true);
            setLink(url);
            navigation.navigate('Meeting', { url });
        }
    });

    useEffect(() => {
        if (!loggedIn) {
            navigation.navigate('Login');
        }
    }, [loggedIn, navigation]);

    const checkLink = () => {
        if (link.includes(baseURL)) {
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
                            <Text>
                                É necessário fazer login no Moodle. Clique no
                                botão abaixo para fazer login.
                            </Text>
                            <Button
                                title="LOGIN"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </>
                    )}
                    {loggedIn && (
                        <>
                            {!onMeeting && (
                                <>
                                    <Text>
                                        Insira abaixo o link da sala de
                                        conferência no Moodle.
                                    </Text>
                                    {invalidLink && (
                                        <ErrorText>
                                            Insira um link válido!
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
                                            baseURL.substring(0, 34) + '...'
                                        }
                                        placeholderTextColor={'grey'}
                                    />
                                    <Button
                                        title="ENTRAR"
                                        onPress={checkLink}
                                        disabled={!link.length || invalidLink}
                                    />
                                </>
                            )}
                            {onMeeting && (
                                <Button
                                    title="VOLTAR PARA REUNIÃO"
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
                        <LinkText>
                            Qualquer erro ou dúvida, entrar em contato pelo
                            repositório no GitHub, clicando aqui.
                        </LinkText>
                    </Link>
                </LinkContainer>
                <Text>Esse app não é afiliado à UFSC ou ConferênciaWeb.</Text>
            </PrimaryContainer>
        </Container>
    );
};

export default Home;

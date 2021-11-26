import React, { useEffect } from 'react';
import { Button, Linking } from 'react-native';
import { requestPermissions } from '../../services/permissions';
import { Container, LoginText, PrimaryContainer } from './styles';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';

const Home = ({ navigation, route }: Props<StackParameters, 'Home'>) => {
    const loggedIn = route?.params?.loggedIn;

    requestPermissions(['camera', 'microphone']);

    Linking.getInitialURL().then(
        (url) => loggedIn && url && navigation.navigate('Meeting', { url }),
    );

    useEffect(() => {
        if (!loggedIn) {
            navigation.navigate('Login');
        }
    }, [loggedIn, navigation]);

    return (
        <Container>
            <PrimaryContainer>
                {!loggedIn && (
                    <>
                        <LoginText>
                            É necessário fazer login no Moodle. Clique no botão
                            abaixo para fazer login.
                        </LoginText>
                        <Button
                            title="LOGIN"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </>
                )}
            </PrimaryContainer>
        </Container>
    );
};

export default Home;

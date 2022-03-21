import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { StackParameters } from '../../routes/types';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { Universities } from '../../screens/Configuration';
import translate from '../../services/translations';
import {
    ButtonContainer,
    Container,
    Input,
    ModalContainer,
    Text,
} from './styles';

const InputModal = ({
    navigation,
    route,
}: Props<StackParameters, 'InputModal'>) => {
    const onComplete = route.params.onComplete;
    const [url, setURL] = useState('');
    const [name, setName] = useState('');

    let URLInput: TextInput | null;

    return (
        <Container>
            <ModalContainer>
                <Text>{translate('insert_university_name')}</Text>
                <Input
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                    }}
                    returnKeyType={'next'}
                    placeholder={Universities[0].name}
                    placeholderTextColor={'grey'}
                    onSubmitEditing={() => URLInput?.focus()}
                    blurOnSubmit={false}
                />
                <Text>{translate('insert_university_url')}</Text>
                <Input
                    value={url}
                    onChangeText={(text) => {
                        setURL(text);
                    }}
                    returnKeyType={'go'}
                    placeholder={Universities[0].url}
                    placeholderTextColor={'grey'}
                    ref={(ref) => (URLInput = ref)}
                    onSubmitEditing={() => onComplete(name, url)}
                />
                <ButtonContainer>
                    <Button
                        title={translate('cancel')}
                        onPress={() => navigation.goBack()}
                    />
                    <Button
                        title={'OK'}
                        onPress={() => {
                            onComplete(name, url);
                            navigation.goBack();
                        }}
                        disabled={!name.length || !url.length}
                    />
                </ButtonContainer>
            </ModalContainer>
        </Container>
    );
};

export default InputModal;

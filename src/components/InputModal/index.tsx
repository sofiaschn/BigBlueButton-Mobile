import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { Universities } from '../../screens/Configuration';
import translate from '../../services/translations';
import {
    ButtonContainer,
    Input,
    ModalContainer,
    ModalTapDetection,
    Text,
} from './styles';

const InputModal: React.FC<{
    visible: boolean;
    onComplete: (name: string, url: string) => void;
    onPressOut?: () => void;
}> = ({ visible, onComplete, onPressOut }) => {
    const [url, setURL] = useState('');
    const [name, setName] = useState('');

    let clicked = false;
    let URLInput: TextInput | null;

    if (!visible) {
        return <></>;
    }

    return (
        <ModalTapDetection
            onPress={() => {
                if (!clicked && onPressOut) {
                    onPressOut();
                } else {
                    clicked = false;
                }
            }}
            disabled={!onPressOut}
            activeOpacity={1}>
            <ModalContainer onTouchStart={() => (clicked = true)}>
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
                        onPress={() => onPressOut && onPressOut()}
                    />
                    <Button
                        title={'OK'}
                        onPress={() => onComplete(name, url)}
                        disabled={!name.length || !url.length}
                    />
                </ButtonContainer>
            </ModalContainer>
        </ModalTapDetection>
    );
};

export default InputModal;

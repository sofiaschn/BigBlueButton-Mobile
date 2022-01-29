import React, { useState } from 'react';
import {
    Container,
    Text,
    PrimaryContainer,
    TextContainer,
    PickerContainer,
    ButtonContainer,
} from './styles';
import { StackScreenProps as Props } from '@react-navigation/stack';
import { StackParameters } from '../../routes/types';
import { Picker } from '@react-native-picker/picker';
import translate from '../../services/translations';
import { Storage } from '../../services/storage';
import { Button } from 'react-native';

export const Universities = [
    {
        name: 'UFSC',
        baseURL: 'moodle.ufsc.br',
    },
    {
        name: 'IFSC',
        baseURL: 'moodle.ifsc.edu.br',
    },
    {
        name: 'UDESC',
        baseURL: 'moodle.udesc.br',
    },
    {
        name: 'UDESC (Joinville)',
        baseURL: 'moodle.joinville.udesc.br',
    },
];

const Configuration = ({
    navigation,
}: Props<StackParameters, 'Configuration'>) => {
    Storage.getBaseURL().then((baseURL) => {
        if (baseURL) {
            navigation.navigate('Home', {
                loggedIn: false,
                baseURL,
            });
        }
    });

    const [universityURL, setUniversityURL] = useState(
        Universities.find((obj) => obj.name === 'UFSC')!.baseURL,
    );

    return (
        <Container>
            <PrimaryContainer>
                <TextContainer>
                    <Text>{translate('select_university')}</Text>
                </TextContainer>
                <PickerContainer>
                    <Picker
                        selectedValue={universityURL}
                        onValueChange={(value) => setUniversityURL(value)}
                        dropdownIconColor={'black'}
                        style={{ color: 'black' }}
                        prompt={translate('select_university')}>
                        {Universities.map((uni) => (
                            <Picker.Item
                                label={uni.name}
                                value={uni.baseURL}
                                key={uni.name}
                            />
                        ))}
                    </Picker>
                </PickerContainer>
                <ButtonContainer>
                    <Button
                        title={translate('next_button')}
                        onPress={() => {
                            Storage.setBaseURL(universityURL);
                            navigation.navigate('Home', {
                                loggedIn: false,
                                baseURL: universityURL,
                            });
                        }}
                    />
                </ButtonContainer>
            </PrimaryContainer>
        </Container>
    );
};

export default Configuration;

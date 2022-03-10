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
import InputModal from '../../components/InputModal';
import { University } from '../../services/storage/types';

export const Universities: Array<University> = [
    {
        name: 'UFSC',
        url: 'moodle.ufsc.br',
    },
    {
        name: 'IFSC',
        url: 'moodle.ifsc.edu.br',
    },
    {
        name: 'UDESC',
        url: 'moodle.udesc.br',
    },
    {
        name: 'UDESC (Joinville)',
        url: 'moodle.joinville.udesc.br',
    },
    {
        name: translate('add_custom_university'),
        url: 'custom',
    },
];

const Configuration = ({
    navigation,
}: Props<StackParameters, 'Configuration'>) => {
    const [university, setUniversity] = useState(Universities[0]);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <PrimaryContainer>
                <InputModal
                    visible={modalVisible}
                    onComplete={(name, url) => {
                        setUniversity({ name, url });
                        setModalVisible(false);
                    }}
                    onPressOut={() => setModalVisible(false)}
                />
                <TextContainer>
                    <Text>{translate('select_university')}</Text>
                </TextContainer>
                <PickerContainer>
                    <Picker
                        selectedValue={university}
                        onValueChange={(value) =>
                            value.url === 'custom'
                                ? setTimeout(() => setModalVisible(true), 100)
                                : setUniversity(value)
                        }
                        dropdownIconColor={'black'}
                        style={{ color: 'black' }}
                        prompt={translate('select_university')}>
                        {!Universities.includes(university) && (
                            <Picker.Item
                                label={university.name}
                                value={university}
                                key={university.name}
                            />
                        )}
                        {Universities.map((uni) => (
                            <Picker.Item
                                label={uni.name}
                                value={uni}
                                key={uni.name}
                            />
                        ))}
                    </Picker>
                </PickerContainer>
                <ButtonContainer>
                    <Button
                        title={translate('next_button')}
                        onPress={() => {
                            Storage.setUniversity(university);
                            navigation.replace('Login', {
                                university,
                            });
                        }}
                    />
                </ButtonContainer>
            </PrimaryContainer>
        </Container>
    );
};

export default Configuration;

import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.View`
    padding: 10px;
    width: 300px;
    height: 330px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-color: grey;
    border-width: 1px;
    border-radius: 10px;
`;

export const Input = styled.TextInput`
    font-size: 18px;
    width: 90%;
    text-align: center;
    color: black;
    border-bottom-color: black;
    border-bottom-width: 1px;
    margin-bottom: 20px;
`;

export const Text = styled.Text`
    text-align: center;
    color: black;
    width: 70%;
    font-size: 18px;
    padding: 10px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 50%;
`;

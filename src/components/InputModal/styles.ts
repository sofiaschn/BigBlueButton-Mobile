import styled from 'styled-components/native';

export const ModalTapDetection = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    padding: 10px;
    width: 300px;
    height: 330px;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: white;
    border-color: grey;
    border-width: 1px;
    border-radius: 10px;
    elevation: 20;
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

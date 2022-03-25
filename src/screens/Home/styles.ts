import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    flex: 1;
`;

export const PrimaryContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 10px;
    flex: 1;
`;

export const Text = styled.Text`
    text-align: center;
    color: black;
    width: 80%;
    font-size: 18px;
    padding: 1%;
`;

export const LinkText = styled.Text`
    text-align: center;
    color: #0000ff;
    width: 80%;
    font-size: 18px;
    padding: 1%;
    text-decoration: underline;
`;

export const Link = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ErrorText = styled.Text`
    padding: 1%;
    text-align: center;
    color: red;
    width: 80%;
    font-size: 20px;
`;

export const MainContainer = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const InfoContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const LinkInput = styled.TextInput`
    font-size: 18px;
    width: 90%;
    text-align: center;
    color: black;
    border-bottom-color: black;
    border-bottom-width: 1px;
    margin-bottom: 20px;
`;

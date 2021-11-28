import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
`;

export const PrimaryContainer = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 10px;
`;

export const Text = styled.Text`
    text-align: center;
    color: black;
    width: 70%;
    font-size: 18px;
    padding: 10px;
`;

export const LinkText = styled.Text`
    text-align: center;
    color: #0000ff;
    width: 70%;
    font-size: 18px;
    padding: 10px;
    text-decoration: underline;
`;

export const Link = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ErrorText = styled.Text`
    padding: 10px;
    text-align: center;
    color: red;
    width: 70%;
    font-size: 20px;
`;

export const MainContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const LinkContainer = styled.View`
    width: 100%;
    height: 15%;
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

import styled from 'styled-components/native';

export const ErrorContainer = styled.View`
    align-items: center;
    margin: 20px 0;
`;

export const ErrorText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.palette.text};
    font-size: 18px;
`;

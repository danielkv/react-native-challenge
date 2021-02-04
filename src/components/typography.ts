import styled from 'styled-components/native';

export const Typography = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.palette.text};
    font-size: 16px;
`;

import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadingText = styled.Text`
    color: ${({ theme }) => theme.palette.primaryContrast};
    font-size: 24px;
`;

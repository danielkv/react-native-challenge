import styled from 'styled-components/native';
import { Typography } from '../typography';

export const ErrorContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ErrorIndicator = styled.View``;

export const ErrorText = styled(Typography)`
    color: ${({ theme }) => theme.palette.error};
    font-size: 18px;
    text-align: center;
`;

export const ErrorButton = styled.TouchableOpacity`
    padding: 12px 25px;
    background-color: ${({ theme }) => theme.palette.primary};
    margin-top: 15px;
    border-radius: 6px;
`;
export const TextButton = styled(Typography)`
    color: ${({ theme }) => theme.palette.primaryContrast};
`;

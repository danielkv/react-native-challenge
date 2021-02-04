import styled from 'styled-components/native';
import { Typography } from '../typography';

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadingIndicator = styled.View``;

export const LoadingText = styled(Typography)`
    color: ${({ theme }) => theme.palette.primaryContrast};
    font-size: 24px;
`;

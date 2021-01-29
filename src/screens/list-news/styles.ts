import styled from 'styled-components/native';
import { Typography } from '../../components/typography';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

export const ReorderContainer = styled.View`
    background-color: ${({ theme }) => theme.palette.background};
    padding: 30px;
    border-radius: 10px;
`;

export const ReorderModalTitle = styled(Typography)`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 20px;
    padding-bottom: 10px;
    margin-bottom: 25px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.palette.lightText};
`;

export const ReorderContentContainer = styled.View`
    padding: 0 15px;
`;

type ListItemProps = {
    selected: boolean;
};

export const ReorderListItem = styled.TouchableOpacity<ListItemProps>`
    padding: 10px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: ${({ selected, theme }) =>
        !selected ? `1px solid ${theme.palette.lightText}` : 'none'};
    background-color: ${({ selected }) => (selected ? '#ccc' : 'transparent')};
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const ReorderListLabel = styled(Typography)``;

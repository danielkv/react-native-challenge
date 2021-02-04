import styled from 'styled-components/native';
import { Typography } from '../../components/typography';

export const NewContainer = styled.ScrollView`
    flex: 1;
`;

export const NewContentContainer = styled.View`
    padding: 0 15px 20px 15px;
`;

export const NewTitle = styled(Typography)`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 22px;
    margin-top: 10px;
`;

export const NewAuthorContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;
export const NewAuthor = styled(Typography)`
    font-size: 14px;
    max-width: 255px;
    color: ${({ theme }) => theme.palette.lightText};
`;
export const NewDate = styled(Typography)`
    font-size: 14px;
    color: ${({ theme }) => theme.palette.lightText};
`;

export const NewContent = styled(Typography)`
    margin-top: 15px;
    line-height: 25px;
`;

export const NewTags = styled(Typography)`
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.lightText};
`;
export const NewWebsite = styled(Typography)`
    font-size: 14px;
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.lightText};
`;

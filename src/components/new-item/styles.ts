import styled from 'styled-components/native';

export const NewContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 18px;
`;

export const NewImageContainer = styled.View`
    width: 100px;
    height: 56px;
    margin-right: 20px;
`;

export const NewDetailsContainer = styled.View`
    flex: 1;
    padding-right: 20px;
    padding-bottom: 18px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.palette.lightText};
`;

type ITitleProps = {
    read: boolean;
};

export const NewTitle = styled.Text<ITitleProps>`
    color: ${({ theme }) => theme.palette.text};
    font-size: 16px;
    font-family: ${(props) => (props.read ? 'Roboto_Regular' : 'Roboto_Bold')};
`;

export const NewDetailsFooter = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6px;
`;

export const NewAuthor = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.palette.lightText};
    max-width: 150px;
`;

export const NewDate = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.palette.lightText};
`;

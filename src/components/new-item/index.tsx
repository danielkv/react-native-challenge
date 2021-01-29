import React from 'react';
import { Image } from 'react-native';
import { NewScreenNavigationProps } from '../../index';
import {
    NewAuthor,
    NewContainer,
    NewDate,
    NewDetailsContainer,
    NewDetailsFooter,
    NewImageContainer,
    NewTitle,
} from './styles';
import { NewModel } from '../../models/new.model';

type IProps = {
    item: NewModel;
    navigation: NewScreenNavigationProps;
};

export default function NewItem({ navigation, item }: IProps) {
    return (
        <NewContainer
            onPress={() => {
                navigation.navigate('new', { newItem: item });
            }}
        >
            <NewImageContainer>
                <Image
                    source={{
                        uri: item.image_url,
                    }}
                    style={{ width: 100, height: 56 }}
                />
            </NewImageContainer>
            <NewDetailsContainer>
                <NewTitle read={false}>{item.title}</NewTitle>
                <NewDetailsFooter>
                    <NewAuthor>{item.authors}</NewAuthor>
                    <NewDate>{item.date}</NewDate>
                </NewDetailsFooter>
            </NewDetailsContainer>
        </NewContainer>
    );
}

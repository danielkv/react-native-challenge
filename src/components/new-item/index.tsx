import React, { useContext } from 'react';
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
import StoreContext from '../../store/posts';

type IProps = {
    item: NewModel;
    navigation: NewScreenNavigationProps;
};

export default function NewItem({ navigation, item }: IProps) {
    const {
        store: { readPosts = [] },
    } = useContext(StoreContext);

    const read = Boolean(readPosts.find((readTitle) => readTitle === item.title));

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
                <NewTitle read={read}>{item.title}</NewTitle>
                <NewDetailsFooter>
                    <NewAuthor>{item.authors}</NewAuthor>
                    <NewDate>{item.date}</NewDate>
                </NewDetailsFooter>
            </NewDetailsContainer>
        </NewContainer>
    );
}

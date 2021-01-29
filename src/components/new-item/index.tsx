import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NewModel } from '../../models/new.model';
import {
    NewAuthor,
    NewContainer,
    NewDate,
    NewDetailsContainer,
    NewDetailsFooter,
    NewImageContainer,
    NewTitle,
} from './styles';

type IProps = {
    item: NewModel;
};

export default function NewItem({ item }: IProps) {
    return (
        <NewContainer onPress={() => {}}>
            <NewImageContainer>
                <Image
                    source={{
                        uri: item.image_url,
                    }}
                    style={{ width: 100, height: 56, backgroundColor: '#0f0' }}
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

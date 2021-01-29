import React from 'react';

import { Image } from 'react-native';
import { NewScreenRouteProp } from '../..';
import {
    NewAuthorContainer,
    NewContentContainer,
    NewContainer,
    NewTitle,
    NewAuthor,
    NewDate,
    NewContent,
    NewTags,
    NewWebsite,
} from './styles';

type IProps = {
    route: NewScreenRouteProp;
};

export default function New({ route }: IProps) {
    const newItem = route.params.newItem;

    return (
        <NewContainer>
            <Image
                source={{ uri: newItem.image_url }}
                style={{ flex: 1, height: 300, resizeMode: 'cover' }}
            />
            <NewContentContainer>
                <NewTitle>{newItem.title}</NewTitle>
                <NewAuthorContainer>
                    <NewAuthor>{newItem.authors}</NewAuthor>
                    <NewDate>{newItem.date}</NewDate>
                </NewAuthorContainer>
                <NewContent>{newItem.content}</NewContent>
                <NewWebsite>{`Source: ${newItem.website}`}</NewWebsite>
                <NewTags>{`Tags: ${newItem.tags.map((tag) => tag.label)}`}</NewTags>
            </NewContentContainer>
        </NewContainer>
    );
}

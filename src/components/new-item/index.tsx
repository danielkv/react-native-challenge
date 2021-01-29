import React from 'react';
import { Text, View } from 'react-native';
import { NewModel } from '../../models/new.model';

type IProps = {
    item: NewModel;
};

export default function NewItem({ item }: IProps) {
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    );
}

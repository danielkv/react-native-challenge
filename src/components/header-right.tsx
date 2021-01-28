import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeType } from '../config/theme.interface';

type IProps = {
    theme: ThemeType;
    onPress: () => any;
};

export default function HeaderRight({ theme, onPress }: IProps) {
    return (
        <View style={{ marginRight: 15 }}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name="filter-outline" size={30} color={theme.palette.primaryContrast} />
            </TouchableOpacity>
        </View>
    );
}

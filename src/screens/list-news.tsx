import React from 'react';
import useSWR from 'swr';
import NewItem from '../components/new-item';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { LoadingBlock } from '../components/loading-block';
import { fetcher } from '../helpers/fetcher';
import { NewModel } from '../models/new.model';

export default function ListNews() {
    const { data: newsList, isValidating } = useSWR<NewModel[]>('challenge', fetcher);
    const theme = useTheme();

    // in case it's loading data
    if (isValidating) return <LoadingBlock color={theme.palette.primary} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={newsList}
                keyExtractor={(_, index) => String(index)}
                renderItem={NewItem}
            />
        </View>
    );
}

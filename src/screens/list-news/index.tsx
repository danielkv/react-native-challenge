import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import NewItem from '../../components/new-item';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { LoadingBlock } from '../../components/loading-block';
import { fetcher } from '../../helpers/fetcher';
import { NewModel } from '../../models/new.model';
import ErrorMessage from '../../components/error-message';
import Modal from 'react-native-modal';
import {
    ReorderContainer,
    ReorderContentContainer,
    ReorderListItem,
    ReorderListLabel,
    ReorderModalTitle,
} from './styles';
import { OrderType, sortNewsList } from '../../helpers/reorder-news-list';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderRight from '../../components/header-right';
import { NewScreenNavigationProps } from '../..';

const validOrder = [
    { id: 'date', label: 'Date' },
    { id: 'title', label: 'Title' },
    { id: 'authors', label: 'Author' },
];

export default function ListNews() {
    const { data: newsList = [], isValidating } = useSWR<NewModel[]>('challenge', fetcher);
    const theme = useTheme();
    const navigation = useNavigation<NewScreenNavigationProps>();

    const [order, setOrder] = useState<OrderType>({ field: validOrder[0].id, direction: 'ASC' });
    const [sortModalOpen, setSortModalOpen] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderRight
                    theme={theme}
                    onPress={() => {
                        setSortModalOpen(true);
                    }}
                />
            ),
        });
    }, [navigation]);

    function handleSortNews(currentOrder: typeof validOrder[0], selected: boolean) {
        return () => {
            setOrder({
                field: currentOrder.id,
                direction: selected ? (order.direction === 'ASC' ? 'DESC' : 'ASC') : 'ASC',
            });
        };
    }

    // in case it's loading data
    if (isValidating) return <LoadingBlock color={theme.palette.primary} />;

    const sortedNewsList = sortNewsList(newsList, order);

    return (
        <View style={{ flex: 1 }}>
            {Boolean(sortedNewsList && sortedNewsList.length) ? (
                <FlatList
                    data={sortedNewsList}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }) => <NewItem item={item} navigation={navigation} />}
                />
            ) : (
                <ErrorMessage>News were not found</ErrorMessage>
            )}
            <Modal
                isVisible={sortModalOpen}
                onBackdropPress={() => setSortModalOpen(false)}
                onDismiss={() => setSortModalOpen(false)}
                onModalHide={() => setSortModalOpen(false)}
                swipeDirection="up"
                animationIn="bounceInDown"
                animationOut="slideOutUp"
                onSwipeComplete={() => setSortModalOpen(false)}
            >
                <ReorderContainer>
                    <ReorderModalTitle>Reorder news</ReorderModalTitle>
                    <ReorderContentContainer>
                        {validOrder.map((currentOrder) => {
                            const selected = order.field === currentOrder.id;
                            return (
                                <View key={currentOrder.id}>
                                    <ReorderListItem
                                        onPress={handleSortNews(currentOrder, selected)}
                                        selected={selected}
                                    >
                                        <ReorderListLabel>{currentOrder.label}</ReorderListLabel>
                                        {selected && (
                                            <Ionicons
                                                name={
                                                    order.direction === 'ASC'
                                                        ? 'arrow-down-outline'
                                                        : 'arrow-up-outline'
                                                }
                                                size={20}
                                            />
                                        )}
                                    </ReorderListItem>
                                </View>
                            );
                        })}
                    </ReorderContentContainer>
                </ReorderContainer>
            </Modal>
        </View>
    );
}

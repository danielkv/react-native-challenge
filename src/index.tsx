import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ListNews from './screens/list-news';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { topNavigatorConfig } from './config/navigator.options';
import New from './screens/new';
import { NewModel } from './models/new.model';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    newsList: undefined;
    new: { newItem: NewModel };
};

export type NewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'newsList'>;

export type NewScreenRouteProp = RouteProp<RootStackParamList, 'new'>;

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <View style={{ marginTop: insets.top, flex: 1 }}>
            <Stack.Navigator screenOptions={{ ...topNavigatorConfig({ theme }) }}>
                <Stack.Screen name="newsList" options={{ title: 'News' }} component={ListNews} />
                <Stack.Screen name="new" options={{ title: 'New' }} component={New} />
            </Stack.Navigator>
        </View>
    );
}

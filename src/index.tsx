import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListNews from './screens/list-news';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { topNavigatorConfig } from './config/navigator.options';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderRight from './components/header-right';

const Stack = createStackNavigator();

export default function App() {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <View style={{ marginTop: insets.top, flex: 1 }}>
            <Stack.Navigator screenOptions={{ ...topNavigatorConfig({ theme }) }}>
                <Stack.Screen
                    name="route"
                    options={{
                        title: 'Título',
                        headerRight: () => <HeaderRight theme={theme} onPress={() => {}} />,
                    }}
                    component={ListNews}
                />
            </Stack.Navigator>
        </View>
    );
}

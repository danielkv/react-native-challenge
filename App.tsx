import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src';
import { ThemeProvider } from 'styled-components';
import { appTheme, navigationTheme } from './src/config/theme';
import { StatusBar } from 'expo-status-bar';
import { FontLoader } from './src/components/font-loader';
import StoreContext, { defaultPostStore, postReducer } from './src/store/posts';

export default function Wrapper() {
    const [postStore, dispatcher] = useReducer(postReducer, defaultPostStore);

    return (
        <ThemeProvider theme={appTheme}>
            <StoreContext.Provider value={{ store: postStore, dispatcher }}>
                <SafeAreaProvider style={{ flex: 1, backgroundColor: appTheme.palette.primary }}>
                    <NavigationContainer theme={navigationTheme}>
                        <StatusBar style="light" />
                        <FontLoader>
                            <App />
                        </FontLoader>
                    </NavigationContainer>
                </SafeAreaProvider>
            </StoreContext.Provider>
        </ThemeProvider>
    );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src';
import { ThemeProvider } from 'styled-components';
import { appTheme, navigationTheme } from './src/config/theme';
import { StatusBar } from 'expo-status-bar';
import { FontLoader } from './src/components/font-loader';

export default function Wrapper() {
    return (
        <ThemeProvider theme={appTheme}>
            <SafeAreaProvider style={{ flex: 1, backgroundColor: appTheme.palette.primary }}>
                <NavigationContainer theme={navigationTheme}>
                    <StatusBar style="light" />
                    <FontLoader>
                        <App />
                    </FontLoader>
                </NavigationContainer>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

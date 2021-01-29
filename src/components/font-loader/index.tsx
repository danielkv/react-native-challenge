import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { LoadingContainer, LoadingText } from './styles';
import { LoadingBlock } from '../loading-block';

export function FontLoader({ children }) {
    const [fontLoaded] = useFonts({
        Roboto_Regular: Roboto_400Regular,
        Roboto_Bold: Roboto_700Bold,
        Roboto_Medium: Roboto_500Medium,
    });
    if (!fontLoaded) return <LoadingBlock />;

    return children;
}

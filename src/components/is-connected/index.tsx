import React, { useEffect, useState } from 'react';
import { ConnectedContainer, ConnectedText } from './styles';
import NetInfo from '@react-native-community/netinfo';

export default function IsConnected() {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            if (isConnected !== state.isConnected) setIsConnected(state.isConnected);
        });

        return unsubscribe;
    }, []);

    // if has internet connection
    if (isConnected) return null;

    return (
        <ConnectedContainer>
            <ConnectedText>No internet connection!</ConnectedText>
        </ConnectedContainer>
    );
}

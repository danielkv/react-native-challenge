import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { LoadingContainer, LoadingText, LoadingIndicator } from './styles';

type IProps = {
    label?: string;
    color?: string;
    size?: number;
};

export function LoadingBlock({ label = '', color, size = 35 }: IProps) {
    const theme = useTheme();

    const definedColor = color || theme.palette.primaryContrast;

    return (
        <LoadingContainer>
            <LoadingIndicator>
                <ActivityIndicator color={definedColor} size={size} />
            </LoadingIndicator>
            {Boolean(label) && <LoadingText>{label}</LoadingText>}
        </LoadingContainer>
    );
}

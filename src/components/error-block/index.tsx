import React from 'react';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { ErrorContainer, ErrorText, ErrorIndicator, ErrorButton, TextButton } from './styles';

type IProps = {
    label?: string;
    color?: string;
    size?: number;
    onTryAgain?: () => void;
};

export function ErrorBlock({ label = '', color, size = 35, onTryAgain }: IProps) {
    const theme = useTheme();

    const definedColor = color || theme.palette.error;

    return (
        <ErrorContainer>
            <ErrorIndicator>
                <Ionicons name="warning-outline" size={size} color={definedColor} />
            </ErrorIndicator>
            {Boolean(label) && <ErrorText>{label}</ErrorText>}
            {Boolean(onTryAgain) && (
                <ErrorButton onPress={onTryAgain}>
                    <TextButton>Try Again</TextButton>
                </ErrorButton>
            )}
        </ErrorContainer>
    );
}

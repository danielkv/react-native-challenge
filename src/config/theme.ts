import { Theme } from '@react-navigation/native';
import { ITheme, ThemeType } from './theme.interface';

export const selectedTheme: string = 'light';

const themes: ITheme = {
    light: {
        palette: {
            error: '#a00',
            primary: '#673AB7',
            primaryContrast: '#ffffff',
            secondary: '',
            text: '#000000',
            lightText: '#999999',
            background: '#ffffff',
        },
        fonts: {
            regular: 'Roboto_Regular',
            medium: 'Roboto_Medium',
            bold: 'Roboto_Bold',
        },
    },
};

export const appTheme: ThemeType = themes[selectedTheme];

export const navigationTheme: Theme = {
    dark: selectedTheme === 'dark',
    colors: {
        primary: appTheme.palette.primary,
        background: appTheme.palette.background,
        text: appTheme.palette.text,
        border: 'none',
        card: '',
        notification: '',
    },
};

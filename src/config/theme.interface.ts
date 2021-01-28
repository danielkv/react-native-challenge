export type ThemeType = {
    palette: {
        primary: string;
        primaryContrast: string;
        secondary: string;
        text: string;
        lightText: string;
        background: string;
    };
};

export interface ITheme {
    light: ThemeType;
    dark?: ThemeType;
}

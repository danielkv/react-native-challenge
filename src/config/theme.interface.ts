export type ThemeType = {
    palette: {
        primary: string;
        primaryContrast: string;
        secondary: string;
        text: string;
        lightText: string;
        background: string;
        error: string;
    };
    fonts: {
        regular: string;
        medium: string;
        bold: string;
    };
};

export interface ITheme {
    light: ThemeType;
    dark?: ThemeType;
}

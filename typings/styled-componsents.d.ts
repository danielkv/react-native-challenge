import { ThemeType } from '../src/config/theme.interface';

declare module 'styled-components' {
    interface DefaultTheme extends ThemeType {}
}

import { extendTheme } from 'native-base';

export const theme = extendTheme({
  components: {
    Text: {
      variants: {
        '400': {
          fontFamily: 'Montserrat-Regular',
        },
        '500': {
          fontFamily: 'Montserrat-Medium',
        },
        '600': {
          fontFamily: 'Montserrat-SemiBold',
        },
        '700': {
          fontFamily: 'Montserrat-Bold',
        },
      },
    },
  },
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}

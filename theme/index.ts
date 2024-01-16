import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: '8px',
        },
      },
    },
  },
});

export default theme;

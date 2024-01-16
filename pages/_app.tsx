import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/index';
import { NextPage } from 'next';
import GlobalStyles from '@/theme/global-styles';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/utils/query-client';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';
import { SnackbarProvider } from 'notistack';

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line unused-imports/no-unused-vars
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppCacheProvider {...props}>
      <EmotionCacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles />
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </EmotionCacheProvider>
    </AppCacheProvider>
  );
}

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/provider';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';
import { makeServer } from '../services/mirage';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/react-query/client';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;

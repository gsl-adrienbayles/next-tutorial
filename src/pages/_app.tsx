import { ReactElement } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }): ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

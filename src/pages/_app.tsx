import { Fragment, ReactElement, useEffect } from 'react';
import Head from 'next/head';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }): ReactElement {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MaterialThemeProvider theme={theme}>
                <CssBaseline />

                <Component {...pageProps} />
            </MaterialThemeProvider>
        </Fragment>
    );
}

export default MyApp;

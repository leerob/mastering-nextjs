import React from 'react';
import App from 'next/app';
import {ThemeProvider, Styled} from 'theme-ui';

import theme from '../theme';

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Styled.root>
                    <Component {...pageProps} />
                </Styled.root>
            </ThemeProvider>
        );
    }
}

export default MyApp;

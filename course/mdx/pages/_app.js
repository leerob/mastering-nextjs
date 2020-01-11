import React from 'react';
import App from 'next/app';
import {ThemeProvider, Styled} from 'theme-ui';
import {StaticKitProvider} from '@statickit/react';

import theme from '../theme';

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Styled.root>
                    <StaticKitProvider site="SITE_ID_HERE">
                        <Component {...pageProps} />
                    </StaticKitProvider>
                </Styled.root>
            </ThemeProvider>
        );
    }
}

export default MyApp;

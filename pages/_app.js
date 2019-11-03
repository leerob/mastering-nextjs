import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import App, {Container} from 'next/app';

import '../styles/prism.css';

class CustomApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default withGA('UA-151409369-1', Router)(CustomApp);

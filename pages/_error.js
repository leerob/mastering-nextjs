import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Page from '../components/page';
import {column, heading} from '../styles/mixins';
import {spacing} from '../styles/vars';
import Nav from '../components/Nav';

const Article = styled.article`
    ${column}
    padding: ${spacing.normal};
    
    h3 {
        ${heading}
        margin: 8px 0 12px;
        font-size: 32px;
    }
    
    svg {
        display: inline-block;
        height: 32px;
        vertical-align: middle;
        width: 32px;
    }
`;

const Error = () => (
    <Page
        description={
            'The premiere video course for building production, server-side rendered applications with Next.js and React.'
        }
        image={'/images/banner.jpg'}
        title={'Mastering Next.js - Not Found'}
    >
        <Nav />
        <Article>
            <h3>{'Oops!'}</h3>
            <p>{'Whatever it was you were looking for no longer exists.'}</p>
            <p>{'Sorry about that!'}</p>
        </Article>
        <Footer />
    </Page>
);

export default Error;

import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/Nav';
import Page from '../components/page';
import {heading, column} from '../styles/mixins';
import {spacing} from '../styles/vars';

const Section = styled.section`
    ${column}
    padding: ${spacing.normal};
    
    h3 {
        ${heading}
        margin: 8px 0 12px;
        font-size: 32px;
    }

    p {
        padding-bottom: ${spacing.normal};
    }
`;

const Success = () => (
    <Page
        description={
            'The premiere video course for building production, server-side rendered applications with Next.js and React.'
        }
        image={'/images/banner.jpg'}
        title={'Mastering Next.js - 50+ lesson video course on React and Next'}
    >
        <Nav />
        <Main>
            <Section>
                <h3>{`You're in!`}</h3>
                <p>
                    {
                        'Enjoy two videos and almost an hour of content. The first is an introduction to Next.js. It also explains the differences between Next.js, Gatsby, and Create React App. The second is a tutorial on how to create a static site with Next.js 9.3 and Prisma. '
                    }
                </p>
                <iframe
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    src="https://www.youtube.com/embed/uQeidE2LA1s"
                    title="Introduction"
                    width="100%"
                />
                <iframe
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    src="https://www.youtube.com/embed/wk-dUsLUADg"
                    title="Static Sites"
                    width="100%"
                />
            </Section>
        </Main>
        <Footer />
    </Page>
);

export default Success;

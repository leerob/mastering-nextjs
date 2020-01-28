import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {Button, Container, Column, CenteredColumn, Small, Title, Description} from '../shared';
import LogosSection from '../Logos';

const Section = styled.section`
    background: linear-gradient(336deg, rgba(0, 0, 255, 0.45), rgba(0, 0, 255, 0) 70.71%),
        linear-gradient(217deg, rgba(255, 0, 0, 0.42), rgba(255, 0, 0, 0) 70.71%);
`;

const Hero = styled.div`
    padding: 24px;

    @media screen and (min-width: 1000px) {
        padding: 128px;
    }
`;

const Underlined = styled(Small)`
    background-image: linear-gradient(120deg, rgba(46, 199, 192, 0.4) 0%, rgba(26, 134, 228, 0.12) 100%);
    background-size: 108px 0.3em;
    background-repeat: no-repeat;
    background-position: 0px 100%;
`;

const EarlyAccessButton = styled(Button)`
    width: 100%;

    @media screen and (min-width: 520px) {
        width: 220px;
    }
`;

const HeroSection = () => (
    <Section>
        <Hero>
            <Container>
                <Column>
                    <Underlined>{'Coming Soon'}</Underlined>
                    <motion.div
                        animate="visible"
                        initial="hidden"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -100
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                    >
                        <Title>
                            <p>{'The Complete'}</p>
                            <span>{'Next.js Course'}</span>
                        </Title>
                    </motion.div>
                    <Description as="h2">
                        {
                            'The premiere video course for building production, server-side rendered applications with Next.js and React.'
                        }
                    </Description>
                    <Link href="#preorder">
                        <EarlyAccessButton whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}>
                            {'Get Early Access'}
                        </EarlyAccessButton>
                    </Link>
                </Column>
                <CenteredColumn>
                    <LogosSection />
                </CenteredColumn>
            </Container>
        </Hero>
    </Section>
);

export default HeroSection;

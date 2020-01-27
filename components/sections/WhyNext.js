import React from 'react';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';

import {Container, Column, CenteredColumn, Title, Description, Small, CheckIcon, FeatureList, Feature} from '../shared';
import A from '../elements/a';

const Section = styled.section`
    background-color: #f7f7f7;
    padding: 48px 24px 24px;

    @media screen and (min-width: 1000px) {
        padding: 128px;
    }
`;

const Bullet = styled.h4`
    font-weight: 800;
    font-size: 24px;
    line-height: 1;
    color: #4b4444;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    span {
        color: black;
        margin-right: 16px;
        font-size: 60px;
    }
`;

const MotionList = styled(motion.ul)`
    list-style: none;
    padding: 0;
`;

const BulletDescription = styled.div`
    margin-bottom: 24px;
`;

const list = {
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            when: 'beforeChildren'
        }
    }
};

const item = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0
    }
};

const WhyNextSection = () => {
    const [ref, inView] = useInView();

    return (
        <Section id="why">
            <Container>
                <Column>
                    <Title as="h3">
                        <p>{'Why'}</p>
                        <span>{'Next.js?'}</span>
                    </Title>
                    <Description>
                        {'Companies all over the world are using '}
                        <A href="https://nextjs.org/" underline>
                            {'Next.js'}
                        </A>
                        {
                            ' to build performant, scalable applications. This course will teach you the skills necessary to build best-in-class React applications.'
                        }
                    </Description>
                    <FeatureList ref={ref}>
                        <Feature>
                            <CheckIcon alt="Checkmark" src="/images/check.svg" />
                            {'Zero-Config Setup'}
                        </Feature>
                        <Feature>
                            <CheckIcon alt="Checkmark" src="/images/check.svg" />
                            {'Fully Extensible'}
                        </Feature>
                        <Feature>
                            <CheckIcon alt="Checkmark" src="/images/check.svg" />
                            {'Server-Side Rendering'}
                        </Feature>
                    </FeatureList>
                </Column>
                <CenteredColumn>
                    <Small>{'In this course'}</Small>
                    <MotionList animate={inView && 'visible'} initial="hidden" variants={list}>
                        <motion.li variants={item}>
                            <Bullet>
                                <span>{'2'}</span>
                                {'Example Applications'}
                            </Bullet>
                            <BulletDescription>
                                {
                                    'A blog using Markdown & React (MDX),  optimized for SEO. A Reddit-like crowdsourced voting app with a custom GraphQL API.'
                                }
                            </BulletDescription>
                        </motion.li>
                        <motion.li variants={item}>
                            <Bullet>
                                <span>{'4+'}</span>
                                {'Hours of Content'}
                            </Bullet>
                            <BulletDescription>
                                {
                                    'Master the best features of Next.js with ease. Dynamic routing, TypeScript integration, lazy-loading, deployment, API routes, handling static assets, performance optimization, and more!'
                                }
                            </BulletDescription>
                        </motion.li>
                        <motion.li variants={item}>
                            <Bullet>
                                <span>{'50+'}</span>
                                {'Jam-Packed Lessons'}
                            </Bullet>
                            <BulletDescription>
                                {`Pre-order now to get project updates, early previews, and be the first to know when it's ready.`}
                            </BulletDescription>
                        </motion.li>
                    </MotionList>
                </CenteredColumn>
            </Container>
        </Section>
    );
};

export default WhyNextSection;

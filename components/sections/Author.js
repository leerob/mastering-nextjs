import React from 'react';
import styled from 'styled-components';

import {Container, Column, CenteredColumn, Title, Description, Small, Feature, FeatureList, CheckIcon} from '../shared';
import A from '../elements/a';

const Section = styled.section`
    background-color: #f7f7f7;
    padding: 48px 24px 24px;

    @media screen and (min-width: 1000px) {
        padding: 80px;
    }
`;

const MaxWidthContainer = styled(Container)`
    max-width: 1050px;
    margin: 0 auto;
`;

const AuthorImage = styled.img`
    width: 150px;
    border-radius: 150px;
`;

const MeetTheAuthor = styled(Small)`
    margin-bottom: 40px;
`;

const AuthorSection = () => (
    <Section>
        <MaxWidthContainer>
            <Column>
                <Title as="h3">
                    <span>{'Who Is This For?'}</span>
                </Title>
                <Description>
                    {
                        'You will be expected to be familiar with basic HTML, CSS, JavaScript, and React. We’ll utilize the latest JavaScript features and best practices.'
                    }
                </Description>
                <Description>
                    {"If you're still not sure if this is for you, feel free to "}
                    <A href="mailto:me@leerob.io" underline>
                        {'email me'}
                    </A>
                    {' and ask.'}
                </Description>
                <FeatureList>
                    <Feature>
                        <CheckIcon alt="Checkmark" src="/images/check.svg" />
                        {'Beginner Friendly'}
                    </Feature>
                    <Feature>
                        <CheckIcon alt="Checkmark" src="/images/check.svg" />
                        {'Open-Source Code'}
                    </Feature>
                    <Feature>
                        <CheckIcon alt="Checkmark" src="/images/check.svg" />
                        {'High-Quality Video & Audio'}
                    </Feature>
                </FeatureList>
            </Column>
            <CenteredColumn>
                <AuthorImage alt="Lee Robinson" src="/images/lee.jpg" />
                <MeetTheAuthor>{'Meet The Author'}</MeetTheAuthor>
                <Description>
                    <A href="https://leerob.io" underline>
                        {'Lee Robinson'}
                    </A>
                    {
                        ' is a full-stack developer, writer, and creator from the Midwest. He’s used React & Next.js extensively in his professional career and for freelance clients.'
                    }
                </Description>
                <Description>
                    {
                        'Lee has spoken across the country at conferences and meet-ups about front-end development and design. He’s also a part-time videographer and musician. '
                    }
                </Description>
            </CenteredColumn>
        </MaxWidthContainer>
    </Section>
);

export default AuthorSection;

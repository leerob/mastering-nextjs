import React from 'react';
import styled from 'styled-components';

import {
  Container,
  Column,
  CenteredColumn,
  Small,
  Title,
  Description
} from '../shared';
import LogosSection from '../Logos';
import Nav from '../Nav';

import Subscribe from './Subscribe';

const Section = styled.section`
  background: linear-gradient(
      336deg,
      rgba(0, 0, 255, 0.45),
      rgba(0, 0, 255, 0) 70.71%
    ),
    linear-gradient(217deg, rgba(255, 0, 0, 0.42), rgba(255, 0, 0, 0) 70.71%);
`;

const Hero = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    padding: 0 80px 100px;
  }
`;

const Underlined = styled(Small)`
  background-image: linear-gradient(
    120deg,
    rgba(46, 199, 192, 0.4) 0%,
    rgba(26, 134, 228, 0.12) 100%
  );
  background-size: 120px 0.3em;
  background-repeat: no-repeat;
  background-position: 0px 100%;
`;

const LaunchBanner = styled.div`
  background: #a3f9c3;
  text-align: center;
  font-size: 14px;
  padding: 8px;
  color: #0a3e1d;
  font-weight: bold;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Star = styled.img`
  width: 14px;
  margin-right: 1px;
`;

const GumroadLogo = styled.img`
  width: 14px;
  margin-left: 8px;
`;

const HeroSection = () => (
  <Section>
    <LaunchBanner>
      {'🎉 Launch Price! Get 50% off for the next 30 days.'}
    </LaunchBanner>
    <Nav />
    <Hero>
      <Container>
        <Column>
          <Underlined>{'Available Now'}</Underlined>
          <Title>
            <p>{'The Complete'}</p>
            <span>{'Next.js Course'}</span>
          </Title>
          <RatingSection>
            <Star alt="star" src="/images/star.svg" />
            <Star alt="star" src="/images/star.svg" />
            <Star alt="star" src="/images/star.svg" />
            <Star alt="star" src="/images/star.svg" />
            <Star alt="star" src="/images/star.svg" />
            <GumroadLogo alt="Gumroad" src="/images/gumroad.png" />
          </RatingSection>
          <Description as="h2">
            {
              'The premiere video course for building static and server-side rendered applications with Next.js and React. Sign up now and get two videos instantly!'
            }
          </Description>
          <Subscribe />
        </Column>
        <CenteredColumn>
          <LogosSection />
        </CenteredColumn>
      </Container>
    </Hero>
  </Section>
);

export default HeroSection;

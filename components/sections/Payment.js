import React from 'react';
import styled from 'styled-components';
import Tweet from 'react-tweet-embed';

import { Button, Small } from '../shared';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 600px;
  background: linear-gradient(
      336deg,
      rgba(0, 0, 255, 0.45),
      rgba(0, 0, 255, 0) 70.71%
    ),
    linear-gradient(217deg, rgba(255, 0, 0, 0.42), rgba(255, 0, 0, 0) 70.71%);

  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  width: 350px;
  height: 450px;
  margin: 32px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  background: #f1f1f1;
  border-radius: 8px 8px 0px 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
`;

const EarlyAccessButton = styled(Button)`
  width: 90%;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.p`
  font-weight: 800;
  font-size: 60px;
  color: black;
  margin: 8px;
  display: flex;
  align-items: center;

  small {
    margin-right: 2px;
    font-size: 32px;
  }
`;

const Currency = styled.p`
  color: #4b4444;
  font-size: 20px;
`;

const OriginalPrice = styled(Currency)`
  text-decoration: line-through;
`;

const Features = styled.ul`
  list-style: none;
  margin-left: 32px;

  li {
    margin-bottom: 16px;
    display: inline-flex;
    align-items: flex-start;
  }

  p {
    margin: 0;
    max-width: 240px;
    line-height: 1.4;
  }
`;

const Check = styled.img`
  width: 20px;
  margin-right: 8px;
  margin-top: 2px;
`;

const Discount = styled.div`
  margin: 8px;
  font-size: 14px;
  text-align: center;
  color: #4b4444;
  font-weight: bold;
`;

const Tweets = styled.div`
  padding: 16px;
  max-width: 500px;
  width: 100%;
`;

const trackGoal = () => {
  window.fathom.trackGoal('RNVN6XHH', 0);
};

const PaymentSection = () => (
  <Section id="buy">
    <Tweets>
      <Tweet id="1229862330449747969" options={{ cards: 'hidden' }} />
      <Tweet id="1247011540579958786" options={{ cards: 'hidden' }} />
    </Tweets>
    <Card>
      <CardHeader>
        <Small>{'The Complete Package'}</Small>
      </CardHeader>
      <PriceContainer>
        <OriginalPrice>{'$199'}</OriginalPrice>
        <Price>
          <small>{'$'}</small>
          {'99'}
        </Price>
        <Currency>{'USD'}</Currency>
      </PriceContainer>
      <Features>
        <li>
          <Check alt="Checkmark" src="/images/check.svg" />
          <p>
            <strong>{'All 55'}</strong>
            {' jam-packed lessons'}
          </p>
        </li>
        <li>
          <Check alt="Checkmark" src="/images/check.svg" />
          <p>
            {'Access to the '}
            <strong>{'entire source code'}</strong>
            {' for both applications'}
          </p>
        </li>
        <li>
          <Check alt="Checkmark" src="/images/check.svg" />
          <p>
            <strong>{'Lifetime access'}</strong>
            {' to all content'}
          </p>
        </li>
      </Features>
      <Discount>{'🎉 50% launch discount! 🎉'}</Discount>
      <EarlyAccessButton
        as="a"
        href="https://gumroad.com/l/sDpG/launch"
        onClick={() => trackGoal()}
        rel="noopener noreferrer"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        {'Buy Now'}
      </EarlyAccessButton>
    </Card>
  </Section>
);

export default PaymentSection;

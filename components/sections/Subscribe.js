import React from 'react';
import styled from 'styled-components';

import {Button} from '../shared';

const Section = styled.section`
    background-color: #2a2d3c;
    color: white;
    padding: 8px 24px;

    @media screen and (min-width: 1000px) {
        padding: 8px 80px 32px 80px;
    }
`;

const Input = styled.input`
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Open Sans';
    height: 40px;
    padding: 28px 18px;
    width: 100%;
    margin-right: 8px;
    margin-bottom: 8px;

    @media screen and (min-width: 484px) {
        margin-bottom: 0;
    }
`;

const P = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding: 24px;
    margin: 0 auto 16px;
    max-width: 500px;

    @media screen and (min-width: 800px) {
        max-width: 100%;
        margin: 16px auto;
    }
`;

const Form = styled.form`
    max-width: 500px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 24px;
    flex-direction: column;

    @media screen and (min-width: 484px) {
        flex-direction: row;
    }
`;

const Subscribe = () => (
    <Section>
        <P>{"Sign up for project updates, early previews, and to find out when it's ready."}</P>
        <Form>
            <Input aria-label="Email Address" name="email" placeholder="Enter your email" type="text" />
            <Button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}} type="submit">
                {'Subscribe'}
            </Button>
        </Form>
    </Section>
);

export default Subscribe;

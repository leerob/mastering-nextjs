import React from 'react';
import styled from 'styled-components';

import {Container, Title, Description} from '../shared';

const Section = styled.section`
    background-color: #f7f7f7;
    padding: 48px 24px 24px;

    @media screen and (min-width: 1000px) {
        padding: 72px 160px;
    }
`;

const Heading = styled(Title)`
    text-align: center;
    margin-bottom: 60px;
`;

const Row = styled.div`
    border-bottom: 1px solid lightgrey;
`;

const QuestionAndAnswer = ({question, answer}) => (
    <Row>
        <Description>
            <strong>{question}</strong>
        </Description>
        <Description>{answer}</Description>
    </Row>
);

const FaqSection = () => (
    <Section>
        <Heading as="h3">
            <span>{'Frequently Asked Questions'}</span>
        </Heading>
        <QuestionAndAnswer
            answer="Mastering Next.js contains 12 video modules. Each module includes a handful of lessons. If the module has code referenced, it's included in the Mastering Next.js repository. There are also two full example applications to reference."
            question="What is the format of the course?"
        />
        <QuestionAndAnswer
            answer="Absolutely! Send me an email at me@leerob.io to discuss team pricing."
            question="Can I get Mastering Next.js for my entire team?"
        />
        <QuestionAndAnswer
            answer={`Totally! Click the "Generate" button on your receipt from Gumroad after you purchase and you can generate a detailed invoice with any additional information you need.`}
            question="Can I get an invoice?"
        />
        <QuestionAndAnswer
            answer="No problem at all! Email me at me@leerob.io and I'll refund you in full, no questions asked."
            question="What if I decide it's not for me?"
        />
    </Section>
);

export default FaqSection;

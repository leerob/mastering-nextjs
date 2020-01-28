import React from 'react';
import styled from 'styled-components';
import {FAQPageJsonLd} from 'next-seo';

import {Title, Description} from '../shared';

const QUESTIONS = [
    {
        acceptedAnswerText:
            "Mastering Next.js contains 12 video modules. Each module includes a handful of lessons. If the module has code referenced, it's included in the Mastering Next.js repository. There are also two full example applications to reference.",
        questionName: 'What is the format of the course?'
    },
    {
        acceptedAnswerText: 'Absolutely! Send me an email at me@leerob.io to discuss team pricing.',
        questionName: 'Can I get Mastering Next.js for my entire team?'
    },
    {
        acceptedAnswerText:
            'Totally! Click the generate button on your receipt from Gumroad after you purchase and you can generate a detailed invoice with any additional information you need.',
        questionName: 'Can I get an invoice?'
    },
    {
        acceptedAnswerText:
            "No problem at all! Email me at me@leerob.io and I'll refund you in full, no questions asked.",
        questionName: "What if I decide it's not for me?"
    }
];

const Section = styled.section`
    background-color: #f7f7f7;
    padding: 48px 24px 24px;

    @media screen and (min-width: 1000px) {
        padding: 72px 160px;
    }
`;

const MaxWidthContainer = styled.div`
    max-width: 1050px;
    margin: 0 auto;
`;

const Heading = styled(Title)`
    text-align: center;
    margin-bottom: 60px;
`;

const Row = styled.div`
    border-bottom: 1px solid lightgrey;
`;

const FaqSection = () => (
    <Section id="faq">
        <MaxWidthContainer>
            <Heading as="h3">
                <span>{'Frequently Asked Questions'}</span>
            </Heading>
            {QUESTIONS.map(({acceptedAnswerText, questionName}) => {
                return (
                    <Row key={questionName}>
                        <Description>
                            <strong>{questionName}</strong>
                        </Description>
                        <Description>{acceptedAnswerText}</Description>
                    </Row>
                );
            })}
            <FAQPageJsonLd mainEntity={QUESTIONS} />
        </MaxWidthContainer>
    </Section>
);

export default FaqSection;

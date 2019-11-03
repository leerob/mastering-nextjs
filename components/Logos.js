import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Logos = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    color: grey;

    span {
        padding: 0 8px;
    }
`;

const NextLogo = styled.img`
    width: 120px;

    @media screen and (min-width: 1000px) {
        width: 220px;
    }
`;

const SmallLogo = styled.img`
    width: 35px;
    opacity: 0.2;
    margin: 35px;
    filter: grayscale(100%);
    transition: all 0.8s ease;

    :hover {
        opacity: 1;
        filter: grayscale(0);
    }

    @media screen and (min-width: 1000px) {
        width: 55px;
    }
`;

const JsLogo = styled(SmallLogo)`
    margin-bottom: 8px;
`;

const ZeitLogo = styled(SmallLogo)`
    margin-left: 8px;
`;

const moveSlowly = {x: 3, y: 3};
const transition = {
    yoyo: Infinity,
    duration: 2,
    ease: 'easeInOut'
};

const LogosSection = () => (
    <Logos>
        <div>
            <motion.div animate={moveSlowly} transition={{...transition, delay: 1}}>
                <SmallLogo src="/static/images/html.svg" />
            </motion.div>
            <motion.div animate={moveSlowly} transition={{...transition, delay: 0.5}}>
                <ZeitLogo src="/static/images/zeit.svg" />
            </motion.div>
        </div>
        <motion.div animate={moveSlowly} transition={transition}>
            <NextLogo src="/static/images/next.svg" />
        </motion.div>
        <div>
            <motion.div animate={moveSlowly} transition={{...transition, delay: 1.5}}>
                <JsLogo src="/static/images/js.svg" />
            </motion.div>
            <motion.div animate={moveSlowly} transition={{...transition, delay: 2}}>
                <SmallLogo src="/static/images/react.svg" />
            </motion.div>
        </div>
    </Logos>
);

export default LogosSection;

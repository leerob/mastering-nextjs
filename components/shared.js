import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Title = styled.h1`
    font-weight: 800;
    font-size: 36px;
    line-height: 1;
    margin-bottom: 24px;

    @media screen and (min-width: 520px) {
        font-size: 48px;
    }

    @media screen and (min-width: 1272px) {
        font-size: 60px;
    }

    p {
        margin: 0;
    }
`;

export const Small = styled.p`
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.15em;
    margin-bottom: 8px;
    text-transform: uppercase;
`;

export const Description = styled.p`
    font-weight: 300;
    font-size: 16px;
    color: #000000;
    line-height: 1.5;
    margin-bottom: 24px;

    @media screen and (min-width: 520px) {
        font-size: 20px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const Column = styled.div`
    margin: 0 24px;
    width: inherit;
    min-width: inherit;

    @media screen and (min-width: 500px) {
        min-width: 342px;
    }

    @media screen and (min-width: 1000px) {
        width: 50%;
    }
`;

export const CenteredColumn = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 24px;

    @media screen and (min-width: 1000px) {
        margin-left: 48px;
    }
`;

export const Button = styled(motion.button)`
    background: #ebefff;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Open Sans';
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #404a72;
    text-decoration: none;
    padding: 16px 24px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.15s background;

    :hover {
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    :focus {
        background: #cfd5ec;
    }
`;

export const FeatureList = styled.div`
    margin: 48px 0;
`;

export const Feature = styled.div`
    display: flex;
    align-content: center;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 16px;
`;

export const CheckIcon = styled.img`
    width: 30px;
    margin-right: 16px;
`;

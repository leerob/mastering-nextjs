import styled, {css} from 'styled-components';

import {colors} from '../../styles/vars';

const A = styled.a`
    color: ${colors.accent};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
        color: ${colors.text};
    }

    ${(props) =>
        props.underline &&
        css`
            color: ${colors.accent};
            background-image: linear-gradient(120deg, #2ec7c0 0%, #1a86e4 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.2em;
            background-position: 0 100%;
            transition: background-size 0.25s ease-in;

            &:hover {
                background-size: 100% 88%;
                color: white;
            }
        `};
`;

export default A;

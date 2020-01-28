import React from 'react';
import styled from 'styled-components';

import {dateTime, full} from '../utils/date-format';
import {colors} from '../styles/vars';

const StyledDate = styled.time`
    background-color: #ebf8ff;
    border-radius: 8px;
    color: ${colors.accent};
    display: block;
    font-size: 12px;
    margin: 0.5em 0 0.5em;
    padding: 2px 10px;
    text-transform: uppercase;
    width: max-content;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`;

const Date = ({children}) => <StyledDate dateTime={dateTime(children)}>{full(children)}</StyledDate>;

export default Date;

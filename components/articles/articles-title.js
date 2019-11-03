import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import {spacing, colors} from '../../styles/vars';

const StyledArticlesTitle = styled.h1`
    ${heading};
    color: ${colors.text};
    font-size: 2.5em;
    font-weight: 800;
    margin-bottom: ${spacing.large};
`;

const ArticlesTitle = ({children}) => <StyledArticlesTitle>{children}</StyledArticlesTitle>;

export default ArticlesTitle;

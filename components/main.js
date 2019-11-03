import styled from 'styled-components';

import {column} from '../styles/mixins';
import {spacing, colors} from '../styles/vars';

const Main = styled.main`
    ${column};
    color: ${colors.text};
    margin-bottom: ${spacing.normal};
    padding: ${spacing.normal};
`;

export default Main;

import React from 'react';
import styled from 'styled-components';

import Link from './link';
import {color} from './styles';

const StyledNav = styled.nav`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (min-width: 822px) {
        padding: 2em 4em 4em;
    }
`;

const NavLink = styled(Link)`
    color: ${color.primary};
    font-size: 0.8em;
    letter-spacing: 0.03em;
    text-decoration: none;
    transition: all 0.15s ease;

    :hover {
        color: ${color.primary};
    }

    @media (min-width: 737px) {
        font-size: 0.9em;
    }

    + a {
        margin: 0 0 0 2em;

        @media (min-width: 737px) {
            margin: 0 0 0 3em;
        }
    }
`;

const ProjectsLink = styled(NavLink)`
    display: none;

    @media (min-width: 405px) {
        display: initial;
    }
`;

const Nav = () => (
    <StyledNav>
        <div />
        <div>
            <NavLink slug={'#why'}>{'Why Next.js?'}</NavLink>
            <NavLink slug={'#overview'}>{'Overview'}</NavLink>
            <NavLink slug={'blog'}>{'Blog'}</NavLink>
            <ProjectsLink slug={'#preorder'}>{'Preorder'}</ProjectsLink>
        </div>
    </StyledNav>
);

export default Nav;

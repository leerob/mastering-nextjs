import React from 'react';
import styled from 'styled-components';

import {colors} from '../styles/vars';

import Link from './link';

const StyledNav = styled.nav`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

    @media (min-width: 822px) {
        padding: 2em 3em 4em;
    }

    @media (min-width: 1000px) {
        padding: 2em 7em 4em;
    }

    @media (min-width: 1234px) {
        padding: 2em 8em 4em;
    }
`;

const Logo = styled.img`
    display: flex;
    height: 20px;
    padding-right: 2em;

    @media (min-width: 737px) {
        height: 26px;
        padding-right: 3em;
    }
`;

const NavLink = styled(Link)`
    color: ${colors.text};
    font-weight: bold;
    font-size: 0.9em;
    text-decoration: none;
    transition: all 0.15s ease;
    padding: 4px 12px;
    border-radius: 8px;

    :hover {
        background-color: rgba(18, 18, 18, 0.05);
    }

    @media (min-width: 737px) {
        font-size: 0.9em;
    }

    + a {
        margin: 0 0 0 0.5em;

        @media (min-width: 737px) {
            margin: 0 0 0 0.5em;
        }
    }
`;

const Centered = styled.div`
    display: flex;
    align-items: center;
`;

const Nav = () => (
    <StyledNav>
        <Link aria-label="Mastering Next.js - Home">
            <Logo alt="Mastering Next.js" src="/images/nextjs-logo.png" />
        </Link>
        <Centered>
            <NavLink slug={'resources'}>{'Resources'}</NavLink>
            <NavLink slug={'blog'}>{'Blog'}</NavLink>
            <NavLink slug={'#buy'}>{'Buy'}</NavLink>
        </Centered>
    </StyledNav>
);

export default Nav;

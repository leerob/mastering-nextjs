import React from 'react';
import styled from 'styled-components';

import {Title} from '../shared';
import Module from '../Module';
import A from '../elements/a';

const Section = styled.section`
    background-color: white;
    padding: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        padding: 80px;
    }
`;

const ModuleList = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: auto;
    margin-top: 40px;
    margin-right: auto;

    @media screen and (min-width: 700px) {
        grid-template-columns: auto auto;
        margin-right: 0;
    }

    @media screen and (min-width: 1060px) {
        grid-template-columns: auto auto auto;
    }
`;

const CourseOverviewSection = () => (
    <Section id="overview">
        <Title as="h3">
            <span>{'Course Overview'}</span>
        </Title>
        <ModuleList>
            <Module
                lessons={[
                    'Why Next.js?',
                    'Fundamentals of Next',
                    'Zero-Config approach',
                    'Universal JavaScript (Isomorphic)',
                    'Server-side rendering',
                    'Code splitting',
                    'Next vs. Create React App vs. Gatsby',
                ]}
                title={
                    <A
                        href="https://www.youtube.com/watch?v=uQeidE2LA1s"
                        rel="noopener noreferrer"
                        target="_blank"
                        underline
                    >
                        {'Introduction'}
                    </A>
                }
            />
            <Module
                lessons={[
                    'Classes vs Functional Components',
                    'Props & State',
                    'React Hooks (useState & useEffect)',
                    'ES6',
                    'JSX',
                ]}
                title="React Overview"
            />
            <Module
                lessons={['Installing Nextjs', 'Running locally', 'Linting', 'Formatting']}
                title="Developing Locally"
            />
            <Module
                lessons={['Link (client-side routing)', 'withRouter', 'getInitialProps', 'Retrieving data from URLs']}
                title="Navigating Between Pages"
            />
            <Module
                lessons={[
                    'CSS (Importing & Using)',
                    'Sass',
                    'CSS-in-JS (Custom _app.js)',
                    'Styled-Components',
                    'Responsive + Mobile-First Design',
                ]}
                title="Styling"
            />
            <Module
                lessons={[
                    <A
                        href="https://www.youtube.com/watch?v=wk-dUsLUADg"
                        key="static sites"
                        rel="noopener noreferrer"
                        target="_blank"
                        underline
                    >
                        {'Static Sites with Next.js 9.3'}
                    </A>,
                    'Custom Server',
                    'Node.js & API Routes',
                    'GraphQL',
                    'Hasura',
                ]}
                title="Fetching Data"
            />
            <Module
                lessons={[
                    'Static Assets',
                    'Public Files',
                    'Image Compression / Optimization',
                    'Custom _document.js',
                    'Open Graph (OG) tags',
                ]}
                title="Managing Assets and SEO"
            />
            <Module
                lessons={[
                    'MDX vs CMS',
                    'Initial Setup',
                    'Managing Posts',
                    'Building Forms (StaticKit)',
                    'Using a Component Library (Theme UI)',
                ]}
                title="Building A Blog With MDX"
            />
            <Module
                lessons={['What is a JWT?', 'Auth0', 'Firebase Auth', 'Login & Signup Pages']}
                title="Authentication"
            />
            <Module
                lessons={[
                    'Unit test vs Integration test',
                    'React Testing Library',
                    'Jest Snapshot Testing',
                    'Sentry Plugin',
                    'Custom Error Page (_error.js)',
                ]}
                title="Testing & Error Handling"
            />
            <Module
                lessons={['Redux', 'React Context', 'Adding TypeScript', 'Dynamic Imports']}
                title="State Management & More"
            />
            <Module
                lessons={['Static Pre-Rendering', 'Serverless Functions', 'Vercel', 'Netlify']}
                title="Exporting & Deployment"
            />
        </ModuleList>
    </Section>
);

export default CourseOverviewSection;

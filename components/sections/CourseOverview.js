import React from 'react';
import styled from 'styled-components';

import {Title} from '../shared';
import Module from '../Module';

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
                title="Introduction"
                lessons={[
                    'Why Next.js?',
                    'Fundamentals of Next',
                    'Zero-Config approach',
                    'Universal JavaScript (Isomorphic)',
                    'Server-side rendering',
                    'Code splitting',
                    'Next vs. Create React App vs. Gatsby'
                ]}
            />
            <Module
                title="React Overview"
                lessons={[
                    'Classes vs Functional Components',
                    'Props & State',
                    'React Hooks (useState & useEffect)',
                    'ES6',
                    'JSX'
                ]}
            />
            <Module
                title="Developing Locally"
                lessons={['Installing Nextjs', 'Running locally', 'Linting', 'Formatting']}
            />
            <Module
                title="Navigating Between Pages"
                lessons={['Link (client-side routing)', 'withRouter', 'getInitialProps', 'Retrieving data from URLs']}
            />
            <Module
                title="Styling"
                lessons={[
                    'CSS (Importing & Using)',
                    'Sass',
                    'CSS-in-JS (Custom _app.js)',
                    'Styled-Components',
                    'Responsive + Mobile-First Design'
                ]}
            />
            <Module title="Fetching Data" lessons={['Node.js & API Routes', 'Custom Server', 'GraphQL', 'CMS']} />
            <Module
                title="Managing Assets and SEO"
                lessons={[
                    'Static Assets',
                    'Public Files',
                    'Image Compression / Optimization',
                    'Custom _document.js',
                    'Open Graph (OG) tags'
                ]}
            />
            <Module
                title="Building A Blog With MDX"
                lessons={[
                    'MDX vs CMS',
                    'Initial Setup',
                    'Managing Posts',
                    'Building Forms',
                    'Using a Component Library'
                ]}
            />
            <Module
                title="Authentication"
                lessons={['What is a JWT?', 'Auth0', 'Passport.js', 'Login & Signup Pages']}
            />
            <Module
                title="Testing & Error Handling"
                lessons={[
                    'Unit test vs Integration test',
                    'Jest Snapshot Testing',
                    'React Testing Library',
                    'Sentry Plugin',
                    'Custom Error Page (_error.js)'
                ]}
            />
            <Module
                title="State Management & More"
                lessons={['Redux', 'React Context', 'Adding TypeScript', 'Dynamic Imports']}
            />
            <Module
                title="Exporting & Deployment"
                lessons={['Static Pre-Rendering', 'Serverless Functions', 'Zeit Now', 'Netlify']}
            />
        </ModuleList>
    </Section>
);

export default CourseOverviewSection;

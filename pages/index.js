import React from 'react';
import {CourseJsonLd, ProductJsonLd} from 'next-seo';

import Page from '../components/page';
import WhyNextSection from '../components/sections/WhyNext';
import HeroSection from '../components/sections/Hero';
import PaymentSection from '../components/sections/Payment';
import CourseOverviewSection from '../components/sections/CourseOverview';
import AuthorSection from '../components/sections/Author';

const Index = () => (
    <>
        <Page
            description={
                'The premiere video course for building production, server-side rendered applications with Next.js and React. Companies all over the world are using Next.js to build performant, scalable applications. This course will teach you the skills necessary to build best-in-class React applications.'
            }
            image={'/images/banner.jpg'}
            title={'Mastering Next.js - 50+ lesson video course on React and Next'}
        >
            <main>
                <HeroSection />
                <WhyNextSection />
                <CourseOverviewSection />
                <AuthorSection />
                <PaymentSection />
            </main>
        </Page>
        <CourseJsonLd
            courseName="Mastering Next.js"
            description="50+ lesson video course on React and Next.js."
            providerName="Lee Robinson"
            providerUrl="https://masteringnextjs.com"
        />
        <ProductJsonLd
            aggregateRating={{
                ratingValue: '5.0',
                reviewCount: '7'
            }}
            description="The premiere video course for building production, server-side rendered applications with Next.js and React. Companies all over the world are using Next.js to build performant, scalable applications. This course will teach you the skills necessary to build best-in-class React applications."
            images={['https://masteringnextjs.com/images/banner.jpg']}
            offers={{
                availability: 'http://schema.org/InStock',

                price: '99.99',
                priceCurrency: 'USD',
                seller: {
                    name: 'Lee Robinson'
                },
                url: 'https://masteringnextjs.com'
            }}
            productName="Mastering Next.js"
        />
    </>
);

export default Index;

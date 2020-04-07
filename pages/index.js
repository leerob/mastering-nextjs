import React from 'react';
import {CourseJsonLd, ProductJsonLd} from 'next-seo';

import Page from '../components/page';
import WhyNextSection from '../components/sections/WhyNext';
import HeroSection from '../components/sections/Hero';
import PaymentSection from '../components/sections/Payment';
import CourseOverviewSection from '../components/sections/CourseOverview';
import AuthorSection from '../components/sections/Author';
import FaqSection from '../components/sections/Faq';

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
                <FaqSection />
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
                reviewCount: '7',
            }}
            brand="Mastering Next.js"
            description="The premiere video course for building production, server-side rendered applications with Next.js and React. Companies all over the world are using Next.js to build performant, scalable applications. This course will teach you the skills necessary to build best-in-class React applications."
            images={['https://masteringnextjs.com/images/banner.jpg']}
            offers={{
                availability: 'http://schema.org/InStock',
                itemCondition: 'http://schema.org/NewCondition',
                price: '99.99',
                priceCurrency: 'USD',
                priceValidUntil: '2021-02-12',
                seller: {
                    name: 'Lee Robinson',
                },
                url: 'https://masteringnextjs.com',
            }}
            productName="Mastering Next.js"
            reviews={[
                {
                    author: {
                        name: 'Matt',
                        type: 'Person',
                    },
                    datePublished: '2020-01-24T03:37:40Z',
                    name: 'Shipped my first Next.js app last week - thank you!',
                    reviewBody:
                        'Hands down the best way to learn Next.js. High quality videos & audio. Would definitely recommend to others wanting to learn Next.js and React.',
                    reviewRating: {
                        bestRating: '5',
                        ratingValue: '5',
                        worstRating: '1',
                    },
                },
            ]}
        />
    </>
);

export default Index;

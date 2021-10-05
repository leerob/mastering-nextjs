# Mastering Next.js

Hey, everyone! 👋 [I'm Lee](https://leerob.io/), the creator of Mastering Next.js. This course was originally released in 2019. Next.js has evolved quite a bit since v9 and some of this course is officially "outdated".

I've updated the course overview below to annotate which parts are up to date, which have changed, and what my new suggestions are. In my opinion, this is the ideal way to _evolve_ this course. The videos will serve as a reference to a point in time, but newer additions to the framework make certain aspects _much_ easier.

- 🟢 **Up to date**
- 🟡 **Outdated**
- 🔴 **Do not recommend**

## Introduction

- [**🎥 Watch Now (26:07)**](https://www.youtube.com/watch?v=uQeidE2LA1s&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 Here are my [latest thoughts](https://leerob.io/blog/nextjs-gatsby-create-react-app) on the framework comparison
- 🟡 This video mentions Image Optimization, which is [now supported in Next.js](https://nextjs.org/docs/basic-features/image-optimization)

## React Overview

I taught Class Components in 2019 for those still in the process of converting to React Hooks. In 2021, it's now standard to use React Hooks for all projects and I would recommend starting there.

- [**🎥 Watch Lesson (21:01)**](https://www.youtube.com/watch?v=cahFm8eeeJI&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- [**👀 View Code**](https://github.com/leerob/mastering-nextjs/tree/main/course/react)
- 🟢 Props & State
- 🟢 Functional Components
- 🟢 React Hooks
- 🟢 ES6
- 🟢 JSX
- 🟡 Class Components

## Developing Locally

- [**🎥 Watch Lesson (9:49)**](https://www.youtube.com/watch?v=KojdxS-1ot8&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 `next dev`, `next build`, and `next start`
- 🟢 Prettier
- 🟡 Image Optimization is [now supported in Next.js](https://nextjs.org/docs/basic-features/image-optimization)
- 🟡 ESLint is [now integrated in Next.js](https://nextjs.org/docs/basic-features/eslint)
- 🔴 Standard (Prettier + ESLint won)

## Navigating Between Pages

- [**🎥 Watch Lesson (19:25)**](https://www.youtube.com/watch?v=ERUHYh_65F4&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- [**👀 View Code**](https://github.com/leerob/mastering-nextjs/tree/main/course/navigation)
- 🟢 `next/link` (client-side routing)
- 🟢 `useRouter`
- 🟢 Retrieving data from URLs
- 🟡 `getInitialProps` – This has largely been replaced by [newer APIs](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support)

## Styling

- [**🎥 Watch Lesson (20:04)**](https://www.youtube.com/watch?v=2t6y-bDIe0Y&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- [**👀 View Code**](https://github.com/leerob/mastering-nextjs/tree/main/course/styling)
- 🟢 Responsive + Mobile-First Design
- 🟢 styled-jsx
- 🟡 CSS & CSS Modules are now supported out of the box
- 🔴 Sass - I would recommend [other options](https://leerob.io/blog/css-with-react)
- 🔴 Styled-Components - I would recommend [other options](https://leerob.io/blog/css-with-react)

## Fetching Data

- [**🎥 Watch Lesson (46:30)**](https://www.youtube.com/watch?v=0UjtqQGLMks&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- [**👀 View Code**](https://github.com/leerob/mastering-nextjs/tree/main/course/fetching-data)
- 🟢 API Routes
- 🟢 [SWR](https://swr.vercel.app)
- 🟢 GraphQL
- 🟢 Hasura
- 🟡 Apollo Client - I'd recommend [SWR](https://swr.vercel.app/docs/data-fetching#graphql)
- 🟡 Custom Server - Most needs for this have moved into Next.js core `next start`.

## Managing Assets and SEO

- [**🎥 Watch Lesson (14:19)**](https://www.youtube.com/watch?v=fJL1K14F8R8&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 Favicons
- 🟢 Open Graph
- 🟢 Core themes are still valid for SEO
- 🟡 Image Optimization is [now supported in Next.js](https://nextjs.org/docs/basic-features/image-optimization)
- 🟡 There's now [official guidance on SEO](https://nextjs.org/learn/seo)

## Building A Blog With MDX

- [**🎥 Watch Lesson (32:32)**](https://www.youtube.com/watch?v=dsCfi0yRr1w&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- [**👀 View Code**](https://github.com/leerob/mastering-nextjs/tree/main/course/mdx)
- 🟢 MDX vs CMS
- 🟡 Component Library (Theme UI) – I would recommend [other options](https://leerob.io/blog/css-with-react)
- 🔴 StaticKit – Acquired by [Formspree](https://formspree.io/)

## Authentication

- [**🎥 Watch Lesson (23:34)**](https://www.youtube.com/watch?v=1BUT7T9ThlU&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 JWTs
- 🟢 Auth0
- 🟢 I have a [new course](https://react2025.com/) using Firebase and Next.js
- 🟡 Would recommend [next-auth](https://next-auth.js.org/) for an OSS solution now
- 🟡 Here are my [latest thoughts](https://leerob.io/blog/react-state-management) on State Management (Forms)

## Testing & Error Handling

- [**🎥 Watch Lesson (33:12)**](https://www.youtube.com/watch?v=yPBtVxDEC0w&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 Jest
- 🟢 React Testing Library
- 🟢 Sentry ([see latest example](https://github.com/vercel/next.js/tree/canary/examples/with-sentry))

## State Management & More

- [**🎥 Watch Lesson (25:41)**](https://www.youtube.com/watch?v=MR43-gYVQbI&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 TypeScript Integration
- 🟡 Here are my [latest thoughts](https://leerob.io/blog/react-state-management) on State Management
- 🟡 Redux ([see latest example](https://github.com/vercel/next.js/tree/canary/examples/with-redux))

## Exporting & Deployment

- [**🎥 Watch Lesson (11:20)**](https://www.youtube.com/watch?v=OQ4O4daD434&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR)
- 🟢 [Vercel](https://vercel.com)
- 🟢 You no longer need to customize anything in `vercel.json` - it just works!
- 🟡 ZEIT is now Vercel

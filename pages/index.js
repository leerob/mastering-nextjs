import Head from 'next/head';
import marked from 'marked';
import hljs from 'highlight.js';

const title = 'Learn Next.js – A free video course on React and Next.js.';
const description =
  'Learn how to build static and server-rendered applications with Next.js and React.';

export default function Home({ content }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:url" content="https://masteringnextjs.com" />
        <link rel="canonical" href="https://masteringnextjs.com" />
        <meta property="og:site_name" content="Learn Next.js" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content="https://masteringnextjs.com/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://masteringnextjs.com/og.png"
        />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getStaticProps() {
  const rawContent = await fetch(
    'https://raw.githubusercontent.com/leerob/mastering-nextjs/main/README.md'
  );
  const markdown = await rawContent.text();

  marked.setOptions({
    highlight: function (code, language) {
      return hljs.highlight(code, { language }).value;
    },
  });

  return {
    props: {
      content: marked(markdown),
    },
  };
}

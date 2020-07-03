const title = 'Learn Next.js – A free video course on React and Next.js.';
const description =
  'Learn how to build static and server-rendered applications with Next.js and React.';

const SEO = {
  title,
  description,
  canonical: 'https://masteringnextjs.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://masteringnextjs.com',
    title,
    description,
    images: [
      {
        url: 'https://masteringnextjs.com/og.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;

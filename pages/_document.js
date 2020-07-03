import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#da532c" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="5e41b2275db646a5" name="yandex-verification" />
          <meta
            content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc"
            name="google-site-verification"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://pbs.twimg.com" crossOrigin="" />
          <link
            rel="preconnect"
            href="https://cdn.usefathom.com"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#5bbad5"
            href="/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

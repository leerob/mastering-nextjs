import React, { useEffect } from 'react';

import '../styles/prism.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const tracker = window.document.createElement('script');
      const firstScript = window.document.querySelectorAll('script')[0];

      tracker.defer = true;
      tracker.setAttribute('site', 'ZXGRHUJX');
      tracker.setAttribute('spa', 'auto');
      tracker.src = 'https://cdn.usefathom.com/script.js';
      firstScript.parentNode.insertBefore(tracker, firstScript);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;

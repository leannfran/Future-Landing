// components/GoogleAnalytics.js

import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JZ8Q7K7VXR";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-JZ8Q7K7VXR');
  }, []);

  return null;
};

export default GoogleAnalytics;


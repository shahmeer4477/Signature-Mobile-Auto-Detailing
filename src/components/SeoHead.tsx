import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const SeoHead: React.FC = () => {
  useEffect(() => {
    // Generate valid Schema.org JSON-LD structured data for LocalBusiness & AutomotiveBusiness
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["AutomotiveBusiness", "LocalBusiness"],
          "@id": `${SITE_CONFIG.SITE_URL}/#business`,
          "name": SITE_CONFIG.SITE_NAME,
          "url": SITE_CONFIG.SITE_URL,
          "logo": `${SITE_CONFIG.SITE_URL}${SITE_CONFIG.SITE_LOGO}`,
          "image": `${SITE_CONFIG.SITE_URL}${SITE_CONFIG.OG_IMAGE}`,
          "description": SITE_CONFIG.SITE_DESCRIPTION,
          "telephone": SITE_CONFIG.PHONE_NUMBER,
          "email": SITE_CONFIG.EMAIL,
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "13348 186th Ave SE",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90001",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": SITE_CONFIG.SERVICE_AREA
          },
          "openingHours": "Mo-Su 08:00-18:00",
          "sameAs": [
            SITE_CONFIG.INSTAGRAM_URL !== "ADD_INSTAGRAM_URL_HERE" ? SITE_CONFIG.INSTAGRAM_URL : null,
            SITE_CONFIG.FACEBOOK_URL !== "ADD_FACEBOOK_URL_HERE" ? SITE_CONFIG.FACEBOOK_URL : null,
            SITE_CONFIG.TIKTOK_URL !== "ADD_TIKTOK_URL_HERE" ? SITE_CONFIG.TIKTOK_URL : null,
          ].filter(Boolean)
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_CONFIG.SITE_URL}/#website`,
          "url": SITE_CONFIG.SITE_URL,
          "name": SITE_CONFIG.SITE_NAME,
          "description": SITE_CONFIG.SITE_DESCRIPTION,
          "publisher": {
            "@id": `${SITE_CONFIG.SITE_URL}/#business`
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${SITE_CONFIG.SITE_URL}/#faq`,
          "mainEntity": SITE_CONFIG.FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    const scriptId = "signature-schema-jsonld";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLdData);

    return () => {
      // Clean up if unmounted
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return null;
};

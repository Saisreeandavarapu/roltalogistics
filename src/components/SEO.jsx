import { useEffect } from 'react';
import { SITE_URL, DEFAULT_SEO } from '../seoConfig';

/**
 * Lightweight, zero-dependency SEO & Head manager for React 19 / Vite.
 * Dynamically synchronizes document title, canonical link, meta tags,
 * Open Graph, Twitter cards, and JSON-LD structured data on route transitions.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = `${SITE_URL}/og-image.png`,
  schema,
  keywords,
}) {
  const fullTitle = title || DEFAULT_SEO.title;
  const fullDesc = description || DEFAULT_SEO.description;
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical}`
    : SITE_URL;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper: update or create meta tag by attribute selector
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard SEO Meta
    setMetaTag('name', 'description', fullDesc);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', fullDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'roltaLogistics');
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', fullDesc);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data Injection
    let scriptTag = document.getElementById('route-structured-data');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, fullDesc, canonicalUrl, ogType, ogImage, schema, keywords]);

  return null;
}

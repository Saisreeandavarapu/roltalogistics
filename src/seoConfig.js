/**
 * Centralized SEO & Structured Data Configuration for Rolta Logistics.
 * 
 * Update SITE_URL below with your exact domain when connecting through Hostinger.
 */

export const SITE_URL = 'https://roltalogistics.com';

export const BUSINESS_INFO = {
  name: 'roltaLogistics',
  legalName: 'Rolta Logistics',
  telephone: '+91 77831589',
  phoneDisplay: '9177831589',
  address: {
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  geo: {
    latitude: '17.3068065',
    longitude: '78.4463182',
  },
  mapsUrl: 'https://maps.app.goo.gl/VQC5jycFRkww5GW39',
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, Cheque, Commercial Invoice',
  serviceType: [
    'Full Truck Load (FTL) Transportation',
    'Interstate Freight Transportation',
    'Long-Haul Road Transport',
    'Commercial Goods Logistics',
    'Dedicated Fleet Road Freight',
  ],
  areaServed: [
    { name: 'Pan-India', type: 'Country' },
    { name: 'Hyderabad', type: 'City' },
    { name: 'Bhubaneswar', type: 'City' },
    { name: 'Kolkata', type: 'City' },
    { name: 'Siliguri', type: 'City' },
    { name: 'Guwahati', type: 'City' },
  ],
};

export const DEFAULT_SEO = {
  title: 'roltaLogistics | Full Truck Load (FTL) Transportation Across India',
  description:
    'roltaLogistics provides reliable Full Truck Load (FTL) truck transportation across India, with dedicated daily routes connecting Hyderabad to Bhubaneswar, Kolkata, Siliguri, Guwahati, and Pan-India destinations.',
  image: `${SITE_URL}/og-image.png`,
  type: 'website',
  locale: 'en_IN',
};

/**
 * Generates Root Organization & LogisticsService JSON-LD Schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LogisticsService',
        '@id': `${SITE_URL}/#organization`,
        'name': BUSINESS_INFO.name,
        'legalName': BUSINESS_INFO.legalName,
        'url': SITE_URL,
        'logo': `${SITE_URL}/logo.png`,
        'image': `${SITE_URL}/og-image.png`,
        'description': DEFAULT_SEO.description,
        'telephone': BUSINESS_INFO.telephone,
        'hasMap': BUSINESS_INFO.mapsUrl,
        'priceRange': BUSINESS_INFO.priceRange,
        'currenciesAccepted': BUSINESS_INFO.currenciesAccepted,
        'paymentAccepted': BUSINESS_INFO.paymentAccepted,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': BUSINESS_INFO.address.addressLocality,
          'addressRegion': BUSINESS_INFO.address.addressRegion,
          'addressCountry': BUSINESS_INFO.address.addressCountry,
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': BUSINESS_INFO.geo.latitude,
          'longitude': BUSINESS_INFO.geo.longitude,
        },
        'areaServed': [
          {
            '@type': 'Country',
            'name': 'India',
          },
          {
            '@type': 'City',
            'name': 'Hyderabad',
          },
          {
            '@type': 'City',
            'name': 'Bhubaneswar',
          },
          {
            '@type': 'City',
            'name': 'Kolkata',
          },
          {
            '@type': 'City',
            'name': 'Siliguri',
          },
          {
            '@type': 'City',
            'name': 'Guwahati',
          },
        ],
        'serviceType': BUSINESS_INFO.serviceType,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        'url': SITE_URL,
        'name': BUSINESS_INFO.name,
        'publisher': {
          '@id': `${SITE_URL}/#organization`,
        },
        'inLanguage': 'en-IN',
      },
    ],
  };
}

/**
 * Generates Services JSON-LD Schema
 */
export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'Service',
        'position': 1,
        'name': 'Full Truck Load (FTL) Dedicated Capacity',
        'description':
          'Dedicated truck transportation for single-customer consignments across India with zero mixed cargo and direct dispatch.',
        'provider': {
          '@id': `${SITE_URL}/#organization`,
        },
        'serviceType': 'Full Truck Load Freight',
        'areaServed': 'India',
      },
      {
        '@type': 'Service',
        'position': 2,
        'name': 'Interstate & Long-Haul Freight Transportation',
        'description':
          'High-mileage highway freight transportation with experienced drivers connecting major manufacturing corridors across Indian states.',
        'provider': {
          '@id': `${SITE_URL}/#organization`,
        },
        'serviceType': 'Interstate Road Freight',
        'areaServed': 'India',
      },
      {
        '@type': 'Service',
        'position': 3,
        'name': 'Daily Corridor Transportation (Hyderabad to East & Northeast)',
        'description':
          'Specialized daily scheduled truck dispatches connecting Hyderabad with Bhubaneswar, Kolkata, Siliguri, and Guwahati.',
        'provider': {
          '@id': `${SITE_URL}/#organization`,
        },
        'serviceType': 'Scheduled Route Logistics',
        'areaServed': ['Telangana', 'Odisha', 'West Bengal', 'Assam'],
      },
      {
        '@type': 'Service',
        'position': 4,
        'name': 'Commercial & B2B Logistics Solutions',
        'description':
          'Tailored transport solutions for manufacturers, industrial distributors, and corporate consignors.',
        'provider': {
          '@id': `${SITE_URL}/#organization`,
        },
        'serviceType': 'Commercial Logistics',
        'areaServed': 'India',
      },
    ],
  };
}

/**
 * Generates BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

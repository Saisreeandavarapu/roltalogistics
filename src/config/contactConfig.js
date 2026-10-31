/**
 * roltaLogistics — Official Contact & WhatsApp Configuration
 * 
 * ============================================================================
 * CONFIGURATION GUIDE FOR PRODUCTION DEPLOYMENT:
 * 
 * 1. OFFICIAL WHATSAPP NUMBER (whatsappNumber):
 *    - MUST contain digits only, including the country code, without '+',
 *      spaces, hyphens, or brackets (e.g. '919177831589').
 *    - IMPORTANT: Verify the actual registered business WhatsApp line with the
 *      company owner before deployment. If the company registers on a different
 *      number, simply update the `whatsappNumber` constant below.
 * 
 * 2. DISPLAY PHONE NUMBERS:
 *    - `phoneDisplay`: Full standard 10-digit Indian mobile format ('+91 9177831589')
 *    - `phoneDisplayLegacy`: Legacy short notation ('+91 77831589')
 *    - `phoneTel`: Click-to-call link for mobile dials ('tel:+919177831589')
 * ============================================================================
 */

export const CONTACT_CONFIG = {
  companyName: 'roltaLogistics',
  service: 'Full Truck Load Transportation',
  coverage: 'Pan-India',

  // Official roltaLogistics WhatsApp Number (digits only + country code 91)
  whatsappNumber: '919177831589',

  // Formatted display numbers
  phoneDisplay: '+91 9177831589',
  phoneDisplayLegacy: '+91 77831589',
  phoneTel: 'tel:+919177831589',

  // Email address
  email: 'contact@roltalogistics.com',

  // Coverage routes
  routes: [
    'Hyderabad',
    'Bhubaneswar',
    'Kolkata',
    'Siliguri',
    'Guwahati',
  ],

  // Google Maps verified office location
  mapsUrl: 'https://maps.app.goo.gl/VQC5jycFRkww5GW39',

  // Shipment Type dropdown options as specified in Section 3
  shipmentTypes: [
    'Full Truck Load (FTL)',
    'Commercial Cargo',
    'Industrial Goods',
    'Other Business Shipment',
  ],
};

/**
 * Builds the structured WhatsApp transport enquiry message according to Section 5 specifications.
 * 
 * @param {Object} data - Submitted form fields
 * @returns {string} Formatted plain-text enquiry message
 */
export function formatWhatsAppMessage(data) {
  const customerName = (data.name || '').trim();
  const companyName = (data.companyName || '').trim() || 'Not provided';
  const customerPhone = (data.phone || '').trim();
  const customerEmail = (data.email || '').trim();

  const pickupLocation = (data.pickupCity || '').trim();
  const deliveryLocation = (data.deliveryCity || '').trim();
  const shipmentType = (data.shipmentType || '').trim();
  const cargoWeight = (data.cargoWeight || '').trim() || 'Not provided';
  const pickupDate = (data.pickupDate || '').trim() || 'Not provided';
  const additionalDetails = (data.additionalDetails || '').trim();

  return [
    'NEW TRANSPORT ENQUIRY — ROLTALOGISTICS',
    '',
    'Customer Information',
    `Name: ${customerName}`,
    `Company: ${companyName}`,
    `Phone: ${customerPhone}`,
    `Email: ${customerEmail}`,
    '',
    'Shipment Information',
    `Pickup Location: ${pickupLocation}`,
    `Delivery Location: ${deliveryLocation}`,
    `Shipment Type: ${shipmentType}`,
    `Approximate Cargo Weight: ${cargoWeight}`,
    `Preferred Pickup Date: ${pickupDate}`,
    '',
    'Additional Details:',
    additionalDetails,
    '',
    'Source: roltaLogistics Website Contact Form',
    '',
    'Please review this enquiry and contact the customer regarding their FTL transportation requirements.',
  ].join('\n');
}

/**
 * Generates the official WhatsApp click-to-chat URL with properly encoded message.
 * 
 * @param {string} message - Plain-text message
 * @param {string} number - Optional override for digits-only WhatsApp number
 * @returns {string} Fully encoded wa.me URL
 */
export function buildWhatsAppUrl(message, number = CONTACT_CONFIG.whatsappNumber) {
  const cleanNumber = String(number).replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates the default pre-filled message for general WhatsApp inquiry button.
 */
export function buildGeneralWhatsAppUrl(number = CONTACT_CONFIG.whatsappNumber) {
  const message = 'Hello roltaLogistics, I would like to inquire about Full Truck Load (FTL) transportation services.';
  return buildWhatsAppUrl(message, number);
}


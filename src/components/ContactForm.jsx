import React, { useState, useRef } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, Phone, ExternalLink, Loader2, RotateCcw, ShieldCheck, MapPin, Truck, Calendar, Info } from 'lucide-react';
import { CONTACT_CONFIG, formatWhatsAppMessage, buildWhatsAppUrl } from '../config/contactConfig';

/**
 * Authentic WhatsApp Brand Icon
 */
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/**
 * Client-Side Validation Helpers
 */
function isValidEmail(email) {
  if (!email) return false;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return regex.test(email.trim());
}

function isValidPhone(phone) {
  if (!phone) return false;
  // Strips formatting characters
  const digitsOnly = phone.replace(/[\s\-()]/g, '');
  // Matches 10-digit Indian numbers with optional +91 / 91 / 0 prefix, or international 7-15 digits
  const indianMobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  const generalPhoneRegex = /^\+?[0-9]{7,15}$/;
  return indianMobileRegex.test(digitsOnly) || generalPhoneRegex.test(digitsOnly);
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    pickupCity: '',
    deliveryCity: '',
    shipmentType: '',
    cargoWeight: '',
    pickupDate: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  // Field refs for smooth auto-focus on first validation error
  const fieldRefs = {
    name: useRef(null),
    companyName: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    pickupCity: useRef(null),
    deliveryCity: useRef(null),
    shipmentType: useRef(null),
    cargoWeight: useRef(null),
    pickupDate: useRef(null),
    additionalDetails: useRef(null),
  };

  // Today's date for pickup min attribute (YYYY-MM-DD)
  const todayDateString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};

    // 1. Full Name (Required, at least 2 characters)
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Full name must be at least 2 characters.';
    } else if (formData.name.trim().length > 100) {
      errs.name = 'Full name cannot exceed 100 characters.';
    }

    // 2. Company Name (Optional, but limit length)
    if (formData.companyName && formData.companyName.trim().length > 120) {
      errs.companyName = 'Company name cannot exceed 120 characters.';
    }

    // 3. Phone Number (Required, valid Indian or international format)
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a valid phone number.';
    } else if (!isValidPhone(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    // 4. Email Address (Required, valid format)
    if (!formData.email.trim()) {
      errs.email = 'Please enter a valid email address.';
    } else if (!isValidEmail(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    // 5. Pickup City (Required)
    if (!formData.pickupCity.trim()) {
      errs.pickupCity = 'Please enter the pickup location.';
    } else if (formData.pickupCity.trim().length < 2) {
      errs.pickupCity = 'Pickup city must be at least 2 characters.';
    }

    // 6. Delivery City (Required)
    if (!formData.deliveryCity.trim()) {
      errs.deliveryCity = 'Please enter the delivery location.';
    } else if (formData.deliveryCity.trim().length < 2) {
      errs.deliveryCity = 'Delivery location must be at least 2 characters.';
    }

    // 7. Shipment Type (Required Dropdown)
    if (!formData.shipmentType.trim()) {
      errs.shipmentType = 'Please select a shipment type.';
    }

    // 8. Cargo Weight (Optional, max 80 chars)
    if (formData.cargoWeight && formData.cargoWeight.trim().length > 80) {
      errs.cargoWeight = 'Cargo weight description is too long.';
    }

    // 9. Additional Details (Required)
    if (!formData.additionalDetails.trim()) {
      errs.additionalDetails = 'Please provide additional shipment details.';
    } else if (formData.additionalDetails.trim().length < 5) {
      errs.additionalDetails = 'Please provide at least a few words describing your load.';
    } else if (formData.additionalDetails.trim().length > 2000) {
      errs.additionalDetails = 'Additional details cannot exceed 2000 characters.';
    }

    setErrors(errs);
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    const errorKeys = Object.keys(validationErrors);

    if (errorKeys.length > 0) {
      // Focus first erroneous field
      const firstErrorField = errorKeys[0];
      if (fieldRefs[firstErrorField]?.current) {
        fieldRefs[firstErrorField].current.focus();
        fieldRefs[firstErrorField].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    // Format message strictly as per Section 5 specification
    const rawMessage = formatWhatsAppMessage(formData);
    const whatsappUrl = buildWhatsAppUrl(rawMessage, CONTACT_CONFIG.whatsappNumber);

    // Simulate smooth processing transition & attempt window.open
    setTimeout(() => {
      let winOpened = false;
      try {
        const targetWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        // Check if browser blocked popup window
        if (targetWindow && !targetWindow.closed && typeof targetWindow.closed !== 'undefined') {
          winOpened = true;
        }
      } catch (err) {
        winOpened = false;
      }

      setIsSubmitting(false);

      if (winOpened) {
        setSubmissionFeedback({
          type: 'success',
          whatsappUrl,
          message: 'Your transport enquiry has been formatted and opened in WhatsApp. Please review and click Send in your WhatsApp chat.',
        });
      } else {
        // Fallback state when popup is blocked or running in restricted mobile browser
        setSubmissionFeedback({
          type: 'blocked',
          whatsappUrl,
          message: 'Your enquiry is prepared! Your browser prevented WhatsApp from opening automatically. Click the button below to open WhatsApp directly.',
        });
      }
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      phone: '',
      email: '',
      pickupCity: '',
      deliveryCity: '',
      shipmentType: '',
      cargoWeight: '',
      pickupDate: '',
      additionalDetails: '',
    });
    setErrors({});
    setSubmissionFeedback(null);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-xs relative">
      {/* Header Accent Bar */}
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-200">
        <div>
          <span className="text-xs font-bold text-[#2567A8] uppercase tracking-wider block">
            Direct WhatsApp Integration
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] mt-0.5">
            Transport Enquiry Form
          </h2>
        </div>
        <div className="flex items-center space-x-2 bg-[#F7F9FC] border border-gray-200 px-3 py-1.5 text-xs text-gray-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold">WhatsApp Ready</span>
        </div>
      </div>

      <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
        Fill out your shipment details below. Clicking <strong className="text-gray-900">Send Enquiry on WhatsApp</strong> will package your full load requirements into a clean message ready to send to our verified transport team.
      </p>

      {/* Submission Feedback & Fallback Banners */}
      {submissionFeedback && (
        <div
          className={`mb-6 p-4 sm:p-5 border transition-all duration-300 ${
            submissionFeedback.type === 'success'
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
              : 'bg-amber-50/90 border-amber-300 text-amber-950'
          }`}
          role="alert"
        >
          <div className="flex items-start space-x-3.5">
            {submissionFeedback.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 space-y-2">
              <p className="font-bold text-sm sm:text-base">
                {submissionFeedback.type === 'success'
                  ? 'Enquiry Prepared for WhatsApp!'
                  : 'Action Needed: Click Below to Open WhatsApp'}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {submissionFeedback.message}
              </p>

              {/* Direct WhatsApp Fallback Action & Phone Option */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={submissionFeedback.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-1.5" />
                  <span>Open WhatsApp Conversation</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>

                <a
                  href={CONTACT_CONFIG.phoneTel}
                  className="inline-flex items-center px-3.5 py-2 bg-white border border-gray-300 text-gray-800 hover:text-[#2567A8] hover:border-[#2567A8] font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#2567A8]" />
                  <span>Call {CONTACT_CONFIG.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center text-xs text-gray-500 hover:text-gray-800 underline ml-auto cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 mr-1" />
                  <span>Start New Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Enquiry Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        
        {/* ROW 1: Full Name & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={fieldRefs.name}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none ${
                errors.name
                  ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Company Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              ref={fieldRefs.companyName}
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Rolta Enterprises Ltd."
              className="w-full px-3.5 py-3 bg-[#F9FAFB] border border-gray-300 hover:border-gray-400 text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]"
            />
          </div>
        </div>

        {/* ROW 2: Phone Number & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Phone Number <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={fieldRefs.phone}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none ${
                errors.phone
                  ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Email Address <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={fieldRefs.email}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. logistics@company.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none ${
                errors.email
                  ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* ROW 3: Pickup City & Delivery City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="pickupCity" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Pickup City / Area <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={fieldRefs.pickupCity}
              type="text"
              id="pickupCity"
              name="pickupCity"
              value={formData.pickupCity}
              onChange={handleChange}
              placeholder="e.g. Hyderabad, Telangana"
              aria-required="true"
              aria-invalid={!!errors.pickupCity}
              aria-describedby={errors.pickupCity ? 'pickup-error' : undefined}
              className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none ${
                errors.pickupCity
                  ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
              }`}
            />
            {errors.pickupCity && (
              <p id="pickup-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.pickupCity}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="deliveryCity" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Delivery City / Destination <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              ref={fieldRefs.deliveryCity}
              type="text"
              id="deliveryCity"
              name="deliveryCity"
              value={formData.deliveryCity}
              onChange={handleChange}
              placeholder="e.g. Bhubaneswar / Kolkata / Guwahati"
              aria-required="true"
              aria-invalid={!!errors.deliveryCity}
              aria-describedby={errors.deliveryCity ? 'delivery-error' : undefined}
              className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none ${
                errors.deliveryCity
                  ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
              }`}
            />
            {errors.deliveryCity && (
              <p id="delivery-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.deliveryCity}</span>
              </p>
            )}
          </div>
        </div>

        {/* ROW 4: Shipment Type (Dropdown) & Approximate Cargo Weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="shipmentType" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Shipment Type <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <select
              ref={fieldRefs.shipmentType}
              id="shipmentType"
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.shipmentType}
              aria-describedby={errors.shipmentType ? 'shipmentType-error' : undefined}
              className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 focus:bg-white focus:outline-none cursor-pointer ${
                errors.shipmentType
                  ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
              } ${!formData.shipmentType ? 'text-gray-400' : 'text-gray-900 font-medium'}`}
            >
              <option value="" disabled>
                -- Select Shipment Type --
              </option>
              {CONTACT_CONFIG.shipmentTypes.map((type) => (
                <option key={type} value={type} className="text-gray-900">
                  {type}
                </option>
              ))}
            </select>
            {errors.shipmentType && (
              <p id="shipmentType-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.shipmentType}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cargoWeight" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Approx. Cargo Weight <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              ref={fieldRefs.cargoWeight}
              type="text"
              id="cargoWeight"
              name="cargoWeight"
              value={formData.cargoWeight}
              onChange={handleChange}
              placeholder="e.g. 18 Tons / 25 Metric Tons"
              className="w-full px-3.5 py-3 bg-[#F9FAFB] border border-gray-300 hover:border-gray-400 text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]"
            />
          </div>
        </div>

        {/* ROW 5: Preferred Pickup Date */}
        <div>
          <label htmlFor="pickupDate" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Preferred Pickup Date <span className="text-gray-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            ref={fieldRefs.pickupDate}
            type="date"
            id="pickupDate"
            name="pickupDate"
            min={todayDateString}
            value={formData.pickupDate}
            onChange={handleChange}
            className="w-full px-3.5 py-3 bg-[#F9FAFB] border border-gray-300 hover:border-gray-400 text-sm text-[#111827] rounded-none transition-all duration-200 focus:bg-white focus:outline-none focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8] cursor-pointer"
          />
          <p className="text-[11px] text-gray-500 mt-1">
            Let us know your target dispatch timeline. Leave blank if flexible.
          </p>
        </div>

        {/* ROW 6: Additional Shipment Details */}
        <div>
          <label htmlFor="additionalDetails" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Additional Shipment Details <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            ref={fieldRefs.additionalDetails}
            id="additionalDetails"
            name="additionalDetails"
            rows="4"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Please share details such as cargo material type, multi-axle/container truck preference, loading requirements, or any specific handling instructions..."
            aria-required="true"
            aria-invalid={!!errors.additionalDetails}
            aria-describedby={errors.additionalDetails ? 'details-error' : undefined}
            className={`w-full px-3.5 py-3 bg-[#F9FAFB] border text-sm text-[#111827] rounded-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:outline-none ${
              errors.additionalDetails
                ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                : 'border-gray-300 hover:border-gray-400 focus:border-[#2567A8] focus:ring-1 focus:ring-[#2567A8]'
            }`}
          ></textarea>
          {errors.additionalDetails && (
            <p id="details-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.additionalDetails}</span>
            </p>
          )}
        </div>

        {/* PRIVACY & WORKFLOW NOTICE (Section 11) */}
        <div className="bg-[#F7F9FC] border border-gray-200 p-3.5 text-xs text-gray-600 flex items-start space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-[#2567A8] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Direct WhatsApp Transmission:</strong> Your details will be formatted into an official transport enquiry and handed directly to WhatsApp click-to-chat. No form data is permanently stored on external web servers.
          </p>
        </div>

        {/* PREMIUM SUBMISSION BUTTON (Section 7) */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Send Enquiry on WhatsApp to roltaLogistics"
            className="w-full relative group cursor-pointer bg-[#2567A8] hover:bg-[#1d5389] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase py-4 px-6 border-b-4 border-[#16426d] hover:border-[#13375b] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8] focus-visible:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed select-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#F6DE50]" />
                <span>Preparing WhatsApp Message...</span>
              </>
            ) : (
              <>
                {/* Authentic WhatsApp Icon with Yellow Accent */}
                <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </div>
                
                {/* Button Label */}
                <span>SEND ENQUIRY ON WHATSAPP</span>
                
                {/* Subtle Directional Arrow */}
                <ArrowRight className="w-5 h-5 text-[#F6DE50] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </>
            )}
          </button>
        </div>

        {/* Alternative Direct Call Note */}
        <div className="text-center pt-1">
          <p className="text-xs text-gray-500">
            Prefer direct telephone coordination?{' '}
            <a
              href={CONTACT_CONFIG.phoneTel}
              className="font-bold text-[#2567A8] hover:underline"
            >
              Call {CONTACT_CONFIG.phoneDisplay}
            </a>
          </p>
        </div>

      </form>
    </div>
  );
}

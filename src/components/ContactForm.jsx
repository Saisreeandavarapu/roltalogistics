import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    deliveryLocation: '',
    shipmentDetails: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone.trim().replace(/\s+/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup city or area is required.';
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery destination is required.';
    }

    if (!formData.shipmentDetails.trim()) {
      newErrors.shipmentDetails = 'Please specify shipment details (e.g. material, weight).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    // Simulate API request smoothly
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        companyName: '',
        phone: '',
        email: '',
        pickupLocation: '',
        deliveryLocation: '',
        shipmentDetails: '',
        message: '',
      });
      setErrors({});
    }, 1100);
  };

  return (
    <div className="bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-xs relative">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#111827]">Request a Full Truck Load Quote</h3>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">
          Fill in your route and shipment details below. Our transport team will provide pricing and vehicle availability.
        </p>
      </div>

      {/* Success Notification */}
      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start space-x-3 animate-[sectionFadeUp_400ms_cubic-bezier(0.22,1,0.36,1)]">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-emerald-900">Quote Request Submitted Successfully!</p>
            <p className="text-emerald-700 text-xs mt-1">
              Thank you for contacting roltaLogistics. Our transport team will review your shipment details and reach out shortly at your provided phone number.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              className={`w-full px-3.5 py-2.5 bg-gray-50 border text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus ${
                errors.name ? 'border-red-500 bg-red-50/50' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Company Name <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Rolta Enterprises"
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus"
            />
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              className={`w-full px-3.5 py-2.5 bg-gray-50 border text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus ${
                errors.phone ? 'border-red-500 bg-red-50/50' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. logistics@company.com"
              className={`w-full px-3.5 py-2.5 bg-gray-50 border text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus ${
                errors.email ? 'border-red-500 bg-red-50/50' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Pickup Location & Delivery Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pickupLocation" className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. Hyderabad, Telangana"
              className={`w-full px-3.5 py-2.5 bg-gray-50 border text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus ${
                errors.pickupLocation ? 'border-red-500 bg-red-50/50' : 'border-gray-300'
              }`}
            />
            {errors.pickupLocation && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.pickupLocation}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="deliveryLocation" className="block text-xs font-bold uppercase text-gray-700 mb-1">
              Delivery Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="deliveryLocation"
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleChange}
              placeholder="e.g. Kolkata / Guwahati"
              className={`w-full px-3.5 py-2.5 bg-gray-50 border text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus ${
                errors.deliveryLocation ? 'border-red-500 bg-red-50/50' : 'border-gray-300'
              }`}
            />
            {errors.deliveryLocation && (
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.deliveryLocation}
              </p>
            )}
          </div>
        </div>

        {/* Shipment Details */}
        <div>
          <label htmlFor="shipmentDetails" className="block text-xs font-bold uppercase text-gray-700 mb-1">
            Shipment Details (Material & Weight) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="shipmentDetails"
            name="shipmentDetails"
            value={formData.shipmentDetails}
            onChange={handleChange}
            placeholder="e.g. Industrial Equipment, 18 Tons, Full Load"
            className={`w-full px-3.5 py-2.5 bg-gray-50 border text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus ${
              errors.shipmentDetails ? 'border-red-500 bg-red-50/50' : 'border-gray-300'
            }`}
          />
          {errors.shipmentDetails && (
            <p className="text-xs text-red-600 mt-1 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.shipmentDetails}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-700 mb-1">
            Additional Instructions / Requirements <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Provide any specific loading date or operational preferences..."
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-sm text-[#111827] focus:outline-none focus:bg-white form-input-focus"
          ></textarea>
        </div>

        {/* Submit Button with Micro-interactions */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-[#F6DE50] hover:bg-[#ebd23c] text-[#111827] font-bold text-base border border-[#e0c735] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:scale-98 flex items-center justify-center space-x-2 shadow-xs disabled:opacity-75 group cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-[#111827]" />
              <span>Processing Quote Request...</span>
            </>
          ) : (
            <>
              <span>Request a Quote</span>
              <Send className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

"use client";
import { useState } from 'react';
import { Mail, ArrowRight, Check, ChevronDown, Phone } from 'lucide-react';

export default function WaitlistForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessTypeValue, setBusinessTypeValue] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const businessTypes = [
    { value: 'small-shop', label: 'Small Shop' },
    { value: 'online-store', label: 'Online Store' },
    { value: 'retail', label: 'Retail Store' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          whatsappNumber: whatsappNumber || undefined,
          businessType: businessTypeValue,
          emailConsent
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setIsSubmitted(true);
      setEmail('');
      setName('');
      setWhatsappNumber('');
      setBusinessType('');
      setBusinessTypeValue('');
      setEmailConsent(false);
      
      // Close modal after 2 seconds
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
          setIsSubmitted(false);
        }, 2000);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBusinessTypeSelect = (value, label) => {
    setBusinessType(label);
    setBusinessTypeValue(value);
    setIsDropdownOpen(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">You're on the list! 🎉</h3>
        <p className="text-gray-600">
          We'll notify you as soon as IVMA launches. Get ready to simplify your inventory!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Join the Waitlist</h3>
        <p className="text-gray-600">Be first to know when we launch</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp Number <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="tel"
            id="whatsappNumber"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
            placeholder="+234 812 345 6789"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Type of Business
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-gray-900 text-left flex items-center justify-between bg-white hover:bg-gray-50"
            >
              <span className={businessType ? 'text-gray-900' : 'text-gray-400'}>
                {businessType || 'Select one'}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {businessTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleBusinessTypeSelect(type.value, type.label)}
                    className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <input
            type="checkbox"
            id="emailConsent"
            checked={emailConsent}
            onChange={(e) => setEmailConsent(e.target.checked)}
            required
            className="mt-1 w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
          <label htmlFor="emailConsent" className="text-sm text-gray-600 leading-relaxed">
            I agree to receive email updates about IVMA's launch and product information. You can unsubscribe anytime.
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading || !businessType || !emailConsent}
          className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span>Joining...</span>
          ) : (
            <>
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        We'll never spam you. Unsubscribe anytime.
      </p>
    </form>
  );
}

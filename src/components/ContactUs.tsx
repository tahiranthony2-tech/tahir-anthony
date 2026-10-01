import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Clock,
  Building2,
} from 'lucide-react';
import { ORGANIZATION_DATA } from '../data/organizationData';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission handler ready for backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 700);
  };

  const mapsQuery = encodeURIComponent('Shop No. 35 Block-P Sabzazar Scheme Multan Road Lahore Pakistan');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedMapsUrl = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Reach Out To Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-sans mt-1">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            We are available to answer queries, coordinate assistance, and welcome donors and community partners.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Organization Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950">
                    Organization Address
                  </h3>
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                    Shop No. 35, Block-P,<br />
                    Sabzazar Scheme,<br />
                    Multan Road, Lahore, Pakistan
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-3"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-950">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct helpline for medical assistance, donations, and inquiries:
                  </p>
                  <div className="mt-3 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={ORGANIZATION_DATA.contact.telLink}
                      className="inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{ORGANIZATION_DATA.contact.phoneFormatted}</span>
                    </a>

                    <a
                      href={ORGANIZATION_DATA.contact.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings & Service Note */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-amber-300" />
                <h4 className="font-bold text-sm sm:text-base">Humanitarian Service Availability</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency calls and food bereavement inquiries can be communicated via the phone/WhatsApp number above.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-950 font-sans mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill out this form to connect directly with the organization management.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-950">Message Sent Successfully</h4>
                <p className="text-xs sm:text-sm text-emerald-800 mt-2 max-w-md mx-auto">
                  Thank you for reaching out to Tahir Anthony Welfare Organization. We will review your message and contact you promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-5 text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Muhammad / Brother"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 0324 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 mb-1">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="e.g. Healthcare Assistance / Donation / Camp"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Structured form ready for live backend email / SMS dispatch.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Google Maps Location Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Location Map
              </span>
              <h3 className="text-xl font-bold text-blue-950">
                Sabzazar Scheme, Multan Road, Lahore
              </h3>
              <p className="text-xs text-slate-500">
                Shop No. 35, Block-P, Sabzazar Scheme, Multan Road, Lahore, Pakistan
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors border border-slate-300"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Embedded Map */}
          <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
            <iframe
              title="Tahir Anthony Welfare Organization Map Location"
              src={embedMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

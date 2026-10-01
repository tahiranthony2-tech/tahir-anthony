import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { ORGANIZATION_DATA } from '../data/organizationData';

interface FAQItem {
  id: string;
  category: 'Donations' | 'Programs & Healthcare' | 'General & Volunteering';
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-location',
    category: 'General & Volunteering',
    question: 'Where is Tahir Anthony Welfare Organization located?',
    answer:
      'Our official office is located at Shop No. 35, Block-P, Sabzazar Scheme, Multan Road, Lahore, Pakistan. Community members and visitors can contact our helpline at +92 324 4051273 for guidance or appointments.',
  },
  {
    id: 'faq-donate-mobile',
    category: 'Donations',
    question: 'How can I send a donation through JazzCash or EasyPaisa?',
    answer:
      'You can donate directly to our verified mobile accounts:\n• JazzCash: +92 324 4051273 (Account Name: Tahir Anthony)\n• EasyPaisa: +92 324 4051273 (Account Name: Tahir Anthony)\nYou can copy the number directly from our Donate section. Keep your transaction reference or receipt for your records.',
  },
  {
    id: 'faq-confirm-donation',
    category: 'Donations',
    question: 'How do I confirm my donation after transferring funds?',
    answer:
      'After sending your donation via JazzCash or EasyPaisa, simply take a screenshot or copy the transaction ID, and send it to our official WhatsApp helpline at +92 324 4051273. Our administration will acknowledge your contribution with gratitude.',
  },
  {
    id: 'faq-bank-transfer',
    category: 'Donations',
    question: 'Are bank account transfer details available?',
    answer:
      'Official bank transfer details will be added soon as formal arrangements are being finalized. In the meantime, donors can utilize our verified JazzCash and EasyPaisa accounts or contact the management directly.',
  },
  {
    id: 'faq-medical-camps',
    category: 'Programs & Healthcare',
    question: 'What healthcare services and medical camps do you organize?',
    answer:
      'We organize free medical camps offering qualified doctor check-ups, distribute essential prescription medicines, provide pediatric and first-aid supplies, and support impoverished patients who cannot afford treatment. We also work to establish hospital patient guidance centers to help families navigate complex medical systems.',
  },
  {
    id: 'faq-family-support',
    category: 'Programs & Healthcare',
    question: 'How does the organization support vulnerable families and widows?',
    answer:
      'Through our community outreach, we provide immediate food assistance on bereavement, deliver cooked meals and ration packs to widows and impoverished families, support the marriage needs of orphan girls, and assist individuals with disabilities with mobility aids.',
  },
  {
    id: 'faq-genuine-photos',
    category: 'General & Volunteering',
    question: 'Are the photographs displayed in your gallery authentic?',
    answer:
      'Yes, 100%. We have a strict policy: no AI-generated or simulated images are ever used. Every photograph in our gallery reflects real, verified ground activities, medical checkup camps, food distributions, and volunteer operations conducted in Lahore.',
  },
  {
    id: 'faq-volunteer-youth',
    category: 'General & Volunteering',
    question: 'How can volunteers or youth participate in organization activities?',
    answer:
      'We welcome dedicated volunteers, doctors, and community workers. If you wish to dedicate volunteer hours or assist in our medical camps or food distributions, please call or WhatsApp us at +92 324 4051273 or send a message via our Contact form.',
  },
];

interface FAQProps {
  onContactClick?: () => void;
  onDonateClick?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onContactClick, onDonateClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-donate-mobile');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Donations', 'Programs & Healthcare', 'General & Volunteering'] as const;

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Clear Answers & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-sans mt-1">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Answers to common inquiries regarding our humanitarian programs, healthcare services, and donation processes.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search inquiries (e.g. JazzCash, medical camps, volunteer)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-sm bg-slate-50 focus:bg-white transition-all text-slate-800"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                  selectedCategory === cat
                    ? 'bg-blue-950 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-300 bg-slate-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-emerald-700 block uppercase tracking-wider text-[10px] mb-0.5">
                          {faq.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-blue-950">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      <div className="whitespace-pre-line pl-10 text-slate-700">
                        {faq.answer}
                      </div>

                      {faq.category === 'Donations' && (
                        <div className="mt-4 ml-10 pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-3 text-xs">
                          <span className="text-slate-500">Need immediate donation details?</span>
                          <button
                            onClick={onDonateClick}
                            className="font-bold text-emerald-700 hover:text-emerald-800 underline"
                          >
                            Go to Donate Cards
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">No matching questions found</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for another term or click "All" to browse all questions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-xs font-semibold text-emerald-700 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Have Additional Questions?
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              We Are Available to Assist You Directly
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              Feel free to call our Lahore office or chat with us on WhatsApp for guidance regarding medical aid, donations, or food support.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href={ORGANIZATION_DATA.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={ORGANIZATION_DATA.contact.telLink}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-3 px-4 rounded-xl border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

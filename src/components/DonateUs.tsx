import React, { useState } from 'react';
import {
  Heart,
  Copy,
  Check,
  Building,
  Smartphone,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  AlertCircle,
  Edit2,
  FileCheck2,
} from 'lucide-react';
import { ORGANIZATION_DATA } from '../data/organizationData';
import { useImageContext } from '../context/ImageContext';

export const DonateUs: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const { bankDetails, updateBankDetails } = useImageContext();
  const [isEditingBank, setIsEditingBank] = useState(false);
  const [tempBank, setTempBank] = useState({
    bankName: bankDetails.bankName || '',
    accountTitle: bankDetails.accountTitle || 'Tahir Anthony Welfare Organization',
    accountNumber: bankDetails.accountNumber || '',
    iban: bankDetails.iban || '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSaveBankDetails = (e: React.FormEvent) => {
    e.preventDefault();
    updateBankDetails({
      bankName: tempBank.bankName,
      accountTitle: tempBank.accountTitle,
      accountNumber: tempBank.accountNumber,
      iban: tempBank.iban,
      isConfigured: Boolean(tempBank.bankName && tempBank.accountNumber),
    });
    setIsEditingBank(false);
  };

  return (
    <section id="donate" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Make A Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-sans mt-1">
            Support Our Mission
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Your support can help us continue serving people in need through healthcare, food assistance, education, medical camps, vocational development and other welfare initiatives.
          </p>
        </div>

        {/* 3 Donation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: JazzCash */}
          <div className="bg-gradient-to-b from-rose-50/70 via-white to-white rounded-2xl p-6 sm:p-7 border-2 border-rose-200 hover:border-rose-400 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                    JC
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                      Mobile Account
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 font-sans">
                      JazzCash
                    </h3>
                  </div>
                </div>
                <Smartphone className="w-5 h-5 text-rose-500" />
              </div>

              <div className="space-y-3.5 my-6 p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Account Name
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {ORGANIZATION_DATA.donation.jazzCash.accountName}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    JazzCash Mobile Number
                  </span>
                  <span className="text-lg font-mono font-extrabold text-rose-700 tracking-wide">
                    {ORGANIZATION_DATA.donation.jazzCash.formattedNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => handleCopy(ORGANIZATION_DATA.donation.jazzCash.number, 'jazzcash')}
                className="w-full inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
              >
                {copiedType === 'jazzcash' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    <span>Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${ORGANIZATION_DATA.donation.jazzCash.number}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-rose-700 font-semibold text-xs py-2.5 px-3 rounded-lg border border-rose-200 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Donate via JazzCash App / Dial</span>
              </a>
            </div>
          </div>

          {/* Card 2: EasyPaisa */}
          <div className="bg-gradient-to-b from-emerald-50/70 via-white to-white rounded-2xl p-6 sm:p-7 border-2 border-emerald-200 hover:border-emerald-400 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                    EP
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      Mobile Account
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 font-sans">
                      EasyPaisa
                    </h3>
                  </div>
                </div>
                <Smartphone className="w-5 h-5 text-emerald-500" />
              </div>

              <div className="space-y-3.5 my-6 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Account Name
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {ORGANIZATION_DATA.donation.easyPaisa.accountName}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    EasyPaisa Mobile Number
                  </span>
                  <span className="text-lg font-mono font-extrabold text-emerald-700 tracking-wide">
                    {ORGANIZATION_DATA.donation.easyPaisa.formattedNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => handleCopy(ORGANIZATION_DATA.donation.easyPaisa.number, 'easypaisa')}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
              >
                {copiedType === 'easypaisa' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    <span>Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${ORGANIZATION_DATA.donation.easyPaisa.number}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold text-xs py-2.5 px-3 rounded-lg border border-emerald-200 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Donate via EasyPaisa App / Dial</span>
              </a>
            </div>
          </div>

          {/* Card 3: Bank Account (Placeholder as required) */}
          <div className="bg-gradient-to-b from-blue-50/70 via-white to-white rounded-2xl p-6 sm:p-7 border-2 border-blue-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-sm shadow-xs">
                    <Building className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block">
                      Direct Transfer
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 font-sans">
                      Bank Account
                    </h3>
                  </div>
                </div>
                <Building className="w-5 h-5 text-blue-600" />
              </div>

              {bankDetails.isConfigured ? (
                /* Configured Bank Info */
                <div className="space-y-2.5 my-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs">
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider font-semibold block text-[10px]">
                      Bank Name
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{bankDetails.bankName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider font-semibold block text-[10px]">
                      Account Title
                    </span>
                    <span className="font-bold text-slate-900">{bankDetails.accountTitle}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider font-semibold block text-[10px]">
                      Account Number
                    </span>
                    <span className="font-mono font-bold text-blue-900 text-sm">{bankDetails.accountNumber}</span>
                  </div>
                  {bankDetails.iban && (
                    <div>
                      <span className="text-slate-500 uppercase tracking-wider font-semibold block text-[10px]">
                        IBAN
                      </span>
                      <span className="font-mono text-slate-800">{bankDetails.iban}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Neutral Placeholder strictly following instructions */
                <div className="my-5 p-4 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300 text-center">
                  <Building className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    Official Notice
                  </span>
                  <p className="text-sm font-bold text-slate-800">
                    Bank donation details will be added soon.
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Official organization bank details have not yet been provided. You can make donations via JazzCash or EasyPaisa in the meantime.
                  </p>
                </div>
              )}
            </div>

            <div>
              {isEditingBank ? (
                <form onSubmit={handleSaveBankDetails} className="space-y-2 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-0.5">Bank Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Habib Bank Limited"
                      value={tempBank.bankName}
                      onChange={(e) => setTempBank({ ...tempBank, bankName: e.target.value })}
                      className="w-full px-2 py-1 border rounded bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-0.5">Account Title:</label>
                    <input
                      type="text"
                      required
                      value={tempBank.accountTitle}
                      onChange={(e) => setTempBank({ ...tempBank, accountTitle: e.target.value })}
                      className="w-full px-2 py-1 border rounded bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-0.5">Account Number:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1234567890123"
                      value={tempBank.accountNumber}
                      onChange={(e) => setTempBank({ ...tempBank, accountNumber: e.target.value })}
                      className="w-full px-2 py-1 border rounded bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-0.5">IBAN (Optional):</label>
                    <input
                      type="text"
                      placeholder="PK00XXXX0000000000000000"
                      value={tempBank.iban}
                      onChange={(e) => setTempBank({ ...tempBank, iban: e.target.value })}
                      className="w-full px-2 py-1 border rounded bg-white"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-900 text-white font-bold py-1.5 rounded"
                    >
                      Save Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingBank(false)}
                      className="px-2 py-1.5 border rounded text-slate-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="text-slate-500">Administrator tool:</span>
                  <button
                    onClick={() => setIsEditingBank(true)}
                    className="text-blue-800 hover:text-blue-950 font-semibold flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3 text-amber-600" />
                    <span>{bankDetails.isConfigured ? 'Edit Bank Details' : 'Add Bank Information'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* How to Donate Instructions Box */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2.5 mb-4">
              <FileCheck2 className="w-6 h-6 text-emerald-700" />
              <h3 className="text-xl font-bold text-blue-950">
                How to Donate
              </h3>
            </div>

            <ol className="space-y-3 mt-4 text-sm sm:text-base text-slate-700 list-decimal list-inside leading-relaxed">
              {ORGANIZATION_DATA.donation.instructions.map((step, idx) => (
                <li key={idx} className="font-medium">
                  <span className="text-slate-800">{step}</span>
                </li>
              ))}
            </ol>

            {/* Respectful Transparency Disclaimer */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Every rupee is dedicated to direct community assistance and humanitarian relief.</span>
              </div>
              <a
                href={ORGANIZATION_DATA.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Receipt on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

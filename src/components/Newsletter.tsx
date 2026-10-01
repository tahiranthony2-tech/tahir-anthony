import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface NewsletterProps {
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string): boolean => {
    const trimmed = val.trim();
    if (!trimmed) return false;
    // Standard robust RFC compliant email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(trimmed);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    setStatus('submitting');

    // Simulate API network request and store in localStorage
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('tawo_newsletter_subscribers');
        const list: string[] = stored ? JSON.parse(stored) : [];
        if (!list.includes(email.trim().toLowerCase())) {
          list.push(email.trim().toLowerCase());
          localStorage.setItem('tawo_newsletter_subscribers', JSON.stringify(list));
        }
      } catch (err) {
        console.error('LocalStorage write error', err);
      }

      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-blue-900/90 via-slate-900/90 to-blue-950 p-6 sm:p-8 lg:p-10 border border-blue-800/80 shadow-lg relative overflow-hidden ${className}`}
    >
      {/* Decorative background pattern */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-10 -top-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Copy */}
        <div className="lg:col-span-6 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Join Our Newsletter</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
            Stay Connected with Our Humanitarian Work
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
            Subscribe to receive regular updates, photo summaries of our free medical camps, food relief distributions, and community outreach in Lahore.
          </p>
        </div>

        {/* Right Form / Success Message */}
        <div className="lg:col-span-6 w-full">
          {status === 'success' ? (
            <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-left flex items-start gap-3.5 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  Subscription Successful!
                </h4>
                <p className="text-xs text-emerald-200 mt-1 leading-relaxed">
                  Thank you for subscribing to Tahir Anthony Welfare Organization. You will receive regular humanitarian reports and activity announcements directly in your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setErrorMessage('');
                  }}
                  className="mt-3 text-xs font-bold text-emerald-300 hover:text-white underline"
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') {
                        setStatus('idle');
                        setErrorMessage('');
                      }
                    }}
                    placeholder="Enter your email address..."
                    disabled={status === 'submitting'}
                    aria-label="Email address for newsletter"
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-blue-950/70 border text-white placeholder-slate-400 text-sm focus:outline-none transition-all ${
                      status === 'error'
                        ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-950/30'
                        : 'border-blue-700/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:from-emerald-700 active:to-emerald-800 disabled:opacity-70 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
                >
                  <span>{status === 'submitting' ? 'Subscribing...' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div
                  id="newsletter-error"
                  role="alert"
                  className="flex items-center gap-1.5 text-xs text-rose-300 pt-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Privacy and Anti-Spam reassurance */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>We respect your privacy. No spam, only genuine welfare updates.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

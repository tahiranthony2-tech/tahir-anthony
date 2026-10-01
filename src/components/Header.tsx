import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Camera } from 'lucide-react';
import { Logo } from './Logo';
import { ORGANIZATION_DATA } from '../data/organizationData';
import { useImageContext } from '../context/ImageContext';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openAdminModalForSlot } = useImageContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'programs', label: 'Our Programs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'donate', label: 'Donate Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top emergency / quick contact bar */}
      <div className="bg-blue-950 text-slate-200 text-xs py-1.5 px-4 border-b border-blue-900/60 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Serving Lahore & communities across Pakistan</span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-400">Shop No. 35, Block-P, Sabzazar, Multan Road</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={ORGANIZATION_DATA.contact.telLink}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium"
              title="Call Tahir Anthony Welfare Organization"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{ORGANIZATION_DATA.contact.phoneFormatted}</span>
            </a>
            <button
              onClick={() => openAdminModalForSlot(null)}
              className="hidden lg:flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs border border-blue-800 rounded px-2 py-0.5"
              title="Upload / Manage Original Photographs"
            >
              <Camera className="w-3 h-3 text-amber-400" />
              <span>Admin Photos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md ${
          isScrolled ? 'shadow-md border-b border-slate-200 py-2.5' : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1 text-left"
            aria-label="Tahir Anthony Welfare Organization Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded ${
                    isActive
                      ? 'text-blue-900 font-bold'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('donate')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Heart className="w-4 h-4 fill-emerald-200 text-emerald-100" />
              <span>DONATE NOW</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('donate')}
              className="sm:hidden inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>DONATE</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down navigation drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-950 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-emerald-600"></span>}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('donate')}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>DONATE NOW</span>
                </button>
                <div className="flex items-center justify-between text-xs text-slate-600 px-1 pt-1">
                  <span>Contact: {ORGANIZATION_DATA.contact.phoneFormatted}</span>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openAdminModalForSlot(null);
                    }}
                    className="text-blue-700 hover:underline flex items-center gap-1 font-medium"
                  >
                    <Camera className="w-3 h-3" />
                    <span>Upload Real Photos</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

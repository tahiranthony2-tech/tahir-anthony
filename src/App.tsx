/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ImageProvider } from './context/ImageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { MissionAndAreas } from './components/MissionAndAreas';
import { AboutUs } from './components/AboutUs';
import { OurPrograms } from './components/OurPrograms';
import { Gallery } from './components/Gallery';
import { DonateUs } from './components/DonateUs';
import { FAQ } from './components/FAQ';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { AdminPhotoModal } from './components/AdminPhotoModal';
import { Phone, MessageCircle, Heart } from 'lucide-react';
import { ORGANIZATION_DATA } from './data/organizationData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Intersection observer to track current active section during scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about-us', 'programs', 'gallery', 'donate', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        if (id === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <ImageProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
        
        {/* Sticky Header */}
        <Header activeSection={activeSection} onNavigate={scrollToSection} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <div id="home">
            <Hero
              onExplorePrograms={() => scrollToSection('programs')}
              onDonateNow={() => scrollToSection('donate')}
            />
          </div>

          {/* Dynamic Impact Figures (Animated Counters with Admin Configuration) */}
          <ImpactStats />

          {/* Mission & Major Areas of Work */}
          <MissionAndAreas onLearnMore={() => scrollToSection('programs')} />

          {/* About Us (Tahir Anthony & The Organization) */}
          <AboutUs />

          {/* Our Programs (11 Objectives) */}
          <OurPrograms onDonateClick={() => scrollToSection('donate')} />

          {/* Gallery (Original Photos only, neutral placeholders, lightbox) */}
          <Gallery />

          {/* Donate Us (JazzCash, EasyPaisa, Bank Details Placeholder) */}
          <DonateUs />

          {/* Frequently Asked Questions (Accordion) */}
          <FAQ
            onContactClick={() => scrollToSection('contact')}
            onDonateClick={() => scrollToSection('donate')}
          />

          {/* Contact Us (Address, Phone, WhatsApp, Form, Google Maps) */}
          <ContactUs />
        </main>

        {/* Official Footer */}
        <Footer onNavigate={scrollToSection} />

        {/* Admin Photo Manager Modal */}
        <AdminPhotoModal />

        {/* Floating Mobile Quick Action for WhatsApp & Direct Call */}
        <aside aria-label="Quick Contact Helpline" className="fixed bottom-5 right-4 z-30 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
          <a
            href={ORGANIZATION_DATA.contact.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-3 rounded-full shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 border-2 border-white/80"
            aria-label="Direct WhatsApp Contact"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="hidden md:inline font-sans">WhatsApp Helpline</span>
          </a>

          <button
            onClick={() => scrollToSection('donate')}
            className="md:hidden flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-full shadow-lg border border-amber-300"
            aria-label="Donate directly"
          >
            <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Donate</span>
          </button>
        </aside>

      </div>
    </ImageProvider>
  );
}

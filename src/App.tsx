/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Compass, ChevronDown, ArrowRight, Clock, Calendar, MapPin, Shield, Quote, 
  Users, Award, Linkedin, Check, Mail, Phone, ShieldAlert, Layers, ExternalLink, Lock, ShieldCheck,
  Menu, X, Download, Eye, Video, Newspaper, Globe, PhoneCall, Megaphone, Target
} from 'lucide-react';
import { SPEAKERS, CORE_THEMES, THE_CONVERGING_FORCES, AGENDA, STATS, MARKETING_CAMPAIGN, SPONSORS } from './data.ts';
import DubaiEnvironment from './components/DubaiEnvironment.tsx';
import InvitationForm from './components/InvitationForm.tsx';
import RoundtableSection from './components/RoundtableSection.tsx';
import SovereigntyGraph from './components/SovereigntyGraph.tsx';
import StakeholderMatrix from './components/StakeholderMatrix.tsx';
import DeliverablesSection from './components/DeliverablesSection.tsx';
import InteractiveBrochure from './components/InteractiveBrochure.tsx';
import EnclaveModelSection from './components/EnclaveModelSection.tsx';
import EnquiryFormSection from './components/EnquiryFormSection.tsx';
import { downloadBrochurePDF } from './utils/pdfGenerator.ts';
import SmoothScrollHero from './components/SmoothScrollHero.tsx';

export default function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);
  
  // Minimalist Footer interactive states
  const [footerEmail, setFooterEmail] = useState<string>('');
  const [footerSuccess, setFooterSuccess] = useState<boolean>(false);
  const [copiedFooterEmail, setCopiedFooterEmail] = useState<boolean>(false);
  const [copiedFooterPhone, setCopiedFooterPhone] = useState<boolean>(false);
  
  // Real-time Countdown logic to 8 September 2026
  const [timeLeft, setTimeLeft] = useState({ days: 92, hours: 14, minutes: 22, seconds: 5 });

  useEffect(() => {
    // Scroll header detector
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Target: September 8, 2026 at 09:00 AM (Gulf Standard Time)
    const targetDate = new Date('September 8, 2026 09:00:00 GMT+4').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleCopyFooterEmail = () => {
    navigator.clipboard.writeText('mohammed@zenithnexus.com');
    setCopiedFooterEmail(true);
    setTimeout(() => setCopiedFooterEmail(false), 2000);
  };

  const handleCopyFooterPhone = () => {
    navigator.clipboard.writeText('+971552893299');
    setCopiedFooterPhone(true);
    setTimeout(() => setCopiedFooterPhone(false), 2000);
  };

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    setFooterSuccess(true);
  };

  return (
    <div className="bg-[#0c051a] text-slate-100 min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden" id="main-applet-root">
      
      {/* IMMERSIVE DUBAI TWILIGHT PARALLAX BACKDROP */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-transform duration-100 ease-out opacity-[0.16]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=82')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(${1 + scrollY * 0.00015}) translateY(${-scrollY * 0.05}px)`,
        }}
      />
      
      {/* SHARP DIAGONAL BI-FOLD BROCHURE ACCENT SHAPES */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          background: 'linear-gradient(135deg, rgba(88,28,135,0.15) 0%, rgba(15,23,42,0) 50%, rgba(6,182,212,0.08) 100%)',
        }}
      />

      {/* FLOATING INTERACTIVE LAVENDER CIRCLES (BROCHURE THEME PARALLAX) */}
      <div 
        className="fixed top-[20%] left-[10%] w-72 h-72 rounded-full border border-purple-500/10 pointer-events-none z-0 transition-transform duration-100"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
        }}
      >
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-purple-500/20" />
      </div>
      
      <div 
        className="fixed top-[60%] right-[5%] w-96 h-96 rounded-full border-2 border-dashed border-cyan-500/5 pointer-events-none z-0 transition-transform duration-100"
        style={{
          transform: `translateY(${-scrollY * 0.05}px)`,
        }}
      />

      {/* GLOBAL HUD GLOW LIGHTS */}
      <div className="fixed top-0 left-1/4 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-700/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* DETAILED VIP NAVIGATION BAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-purple-500/15 py-3.5 shadow-xl shadow-purple-950/30' 
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
        id="navbar-widget"
      >
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo Container */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <a href="#" className="flex items-center gap-3 flex-shrink-0 group relative animate-fade-in" id="logo-anchor">
              <div className="relative flex items-center justify-center">
                <img 
                  src="https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png" 
                  alt="Zenith Nexus Logo" 
                  className="h-10 md:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(168,85,247,0.45)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
            
            {/* Quick mobile metadata label */}
            <span className="inline-flex sm:hidden items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-mono text-slate-400 uppercase">
              <Lock className="h-2.5 w-2.5 text-cyan-400" />
              Chatham House
            </span>
          </div>

          {/* Persistent Horizontal Navigation Links - wraps automatically so no drawer is required */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 md:gap-x-5 text-[10px] md:text-[11px] font-mono text-slate-300 tracking-wider md:tracking-widest uppercase font-black" id="navbar-links">
            <a href="#hero-stage" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Home
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#overview" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Why Summit
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#roundtables-section" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Roundtables
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#quantum-agenda" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Quantum & Agenda
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#speakers" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Speakers
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#sponsorship" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Sponsorship
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#deliverables" className="hover:text-purple-400 relative group transition-colors whitespace-nowrap">
              Deliverables
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a 
              href="#request-pass" 
              onClick={(e) => { e.preventDefault(); setIsRequestModalOpen(true); }}
              className="hover:text-purple-300 text-cyan-330 relative group transition-colors whitespace-nowrap"
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          </div>

          {/* Action Trigger Buttons Container (Contains Call direct contact and request tickets, no three dot slider) */}
          <div className="flex items-center gap-3.5 flex-shrink-0" id="navbar-actions-group">
            
            {/* Vetted Direct Phone Line */}
            <a 
              href="tel:+971552893299" 
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-slate-900 border border-white/10 hover:border-cyan-400/30 text-cyan-400 hover:text-cyan-300 font-mono text-[10px] md:text-xs font-bold rounded-xl transition-all shadow-md group"
              title="Speak directly to Summit Office"
            >
              <Phone className="h-3.5 w-3.5 text-purple-400 group-hover:scale-110 transition-transform animate-pulse" />
              <span>+971 55 289 3299</span>
            </a>

            <button 
              onClick={() => setIsRequestModalOpen(true)}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-sans text-[10px] md:text-xs font-bold rounded-xl hover:opacity-95 shadow-lg shadow-purple-950/40 cursor-pointer transition-all uppercase tracking-wider"
              id="nav-request-ticket-btn"
            >
              Request Pass
            </button>

          </div>

        </div>
      </nav>

      {/* HERO STAGE WITH SMOOTH COVER REVEAL DESIGN TRACK */}
      <div id="hero-stage">
        <SmoothScrollHero
          scrollHeight={1200}
          desktopImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=82"
          mobileImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=82"
          initialClipPercentage={15}
          finalClipPercentage={85}
        >
          {/* Header children content matching the physical brand registry parameters exactly */}
          <div className="max-w-[92rem] mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-center pt-32 pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Title & Core Details Column */}
              <div className="lg:col-span-7 space-y-8 text-left" id="hero-intro-text">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-purple-950/40 text-purple-300 border border-purple-500/30 text-xs font-mono tracking-widest uppercase">
                    <Award className="h-4 w-4 text-purple-400" />
                    Strategic Policy Forum 2026
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.05] relative uppercase filter drop-shadow-[0_4px_12px_rgba(168,85,247,0.15)]" id="hero-title-main">
                    MERIDIAN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300">
                      EXCHANGE
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-sans font-semibold text-slate-300 tracking-tight" id="hero-subtitle">
                    Digital Sovereignty Resilience
                  </p>
                </div>

                {/* Event Metadata Ribbon */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs font-mono text-slate-400 border-t border-b border-white/5 py-4 w-fit" id="hero-metadata-badges">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span>8 September 2026</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-400" />
                    <span>JW Marriott Marina, Dubai, UAE</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="tracking-widest">Invitation Only</span>
                  </div>
                </div>

                {/* Authentic Brochure Quote */}
                <div className="relative p-6 rounded-2xl bg-slate-900/60 border border-white/10 max-w-2xl" id="hero-quote-block">
                  <Quote className="absolute right-4 top-4 h-12 w-12 text-slate-800 pointer-events-none" />
                  <p className="font-sans italic text-slate-300 text-sm md:text-base leading-relaxed relative z-[1]">
                    "The continuity question is no longer whether systems can be recovered. It is whether critical services can continue operating when infrastructure, connectivity, operations, and personnel are all under pressure simultaneously."
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Resilience in the era of geopolitical risk</span>
                    <span className="text-[10px] font-sans font-bold text-cyan-400">M.E. Directive 01</span>
                  </div>
                </div>

                {/* Action Trigger Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => setIsRequestModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-95 shadow-xl shadow-purple-950/50 hover:shadow-cyan-400/10 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Request Private Delegation Entry
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href="#brochure-showcase"
                    className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-purple-500/30 text-purple-300 hover:text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                    title="View Official Brochure Highlights & Table of Contents"
                  >
                    <Download className="h-4 w-4 text-cyan-400" />
                    <span>Executive Brochure</span>
                  </a>

                  <a 
                    href="#speakers"
                    className="px-5 py-4 text-slate-400 hover:text-white font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                  >
                    Distinguished Registry
                  </a>
                </div>

              </div>

              {/* Countdown Clock Display Column */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end" id="hero-countdown-container">
                <div className="p-8 rounded-3xl bg-slate-900 border-2 border-purple-500/20 shadow-xl relative overflow-hidden w-full max-w-sm text-center" id="countdown-card">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400" />
                  <div className="absolute top-4 right-4 p-1.5 rounded-md bg-purple-950/40 text-purple-400 border border-purple-500/20 text-[9px] font-mono uppercase tracking-widest">
                    Live Countdown
                  </div>

                  <Compass className="h-8 w-8 text-cyan-400 hover:rotate-180 transition-transform duration-1000 mx-auto mb-6" />
                  
                  <h3 className="font-sans font-bold text-white text-base tracking-tight mb-2">COUNTDOWN TO ASSEMBLAGE</h3>
                  <p className="text-slate-400 font-sans text-xs mb-6 max-w-xs mx-auto">Vetting channels operational. Access ticket allocation based below.</p>

                  {/* Clock grid layout */}
                  <div className="grid grid-cols-4 gap-2 mb-6" id="countdown-grid">
                    
                    {/* Days */}
                    <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl space-y-1">
                      <span className="text-2xl font-mono font-black text-white block">{timeLeft.days}</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Days</span>
                    </div>

                    {/* Hours */}
                    <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl space-y-1">
                      <span className="text-2xl font-mono font-black text-white block">{timeLeft.hours}</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Hours</span>
                    </div>

                    {/* Minutes */}
                    <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl space-y-1">
                      <span className="text-2xl font-mono font-black text-white block">{timeLeft.minutes}</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Mins</span>
                    </div>

                    {/* Seconds */}
                    <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl space-y-1">
                      <span className="text-2xl font-mono font-black text-cyan-400 block animate-pulse">{timeLeft.seconds}</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Secs</span>
                    </div>

                  </div>

                  <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-xl text-left">
                    <Shield className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span className="text-[9px] font-mono text-slate-300 leading-snug">ESTABLISHED UNDER CHATHAM HOUSE CONVENTIONS. SUMMIT HOSTED SECURELY IN DUBAI METROPOLIS.</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM METRICS SCROLL BAR based on Page 2 and 13 metrics */}
          <div className="w-full bg-slate-950/80 backdrop-blur-md justify-self-end border-t border-b border-white/5 py-8 mt-auto z-10" id="hero-stats-ticker">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="text-center space-y-1" id={`stat-node-${idx}`}>
                    <span className="text-3xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400 block tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-sans font-bold text-white block uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-[10px] font-sans text-slate-500 block max-w-xs mx-auto">
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SmoothScrollHero>
      </div>

      {/* CORE FORUM OVERVIEW & ABOUT SECTION based on Page 2 and 3 of the Purple Brochure */}
      <section className="py-28 text-slate-100 border-t border-b border-white/5 relative overflow-hidden scroll-mt-24" id="overview">
        {/* Real High-Fidelity Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=82" 
            alt="Dubai Summit Context" 
            className="w-full h-full object-cover filter brightness-[0.05] contrast-[1.10]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle grid lines matching the digital sovereignty motif */}
          <div className="absolute inset-0 bg-slate-950/85 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context Narrative */}
            <div className="lg:col-span-6 space-y-6 text-slate-300" id="overview-narrative">
              <div className="space-y-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block font-bold">Forum Overview</span>
                <h2 className="text-4xl md:text-5xl font-extrabold font-sans text-white tracking-tight leading-tight uppercase">
                  What We Do & Why
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                <p>
                  Meridian Exchange has been established as a closed-door policy and industry forum focused on digital resilience, sovereign data governance, and future infrastructure security.
                </p>
                <p>
                  The event brings together stakeholders responsible for policy, infrastructure, regulation, investment, cybersecurity, and operations.
                </p>
                <div className="border-l-4 border-purple-500 pl-4 italic text-purple-200 text-xs md:text-sm font-semibold bg-purple-950/30 py-3.5 rounded-r-lg">
                  "Unlike a traditional conference, Meridian Exchange is structured around working roundtables designed to encourage direct participation and practical discussion."
                </div>
              </div>

              {/* Key event checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4" id="overview-highlights">
                {[
                  'Invitation Only delegates',
                  'Chatham House Rule Enforced',
                  'Working Roundtable Format',
                  'Sovereign Wealth & Gov focused',
                  '1 Actionable White Paper Outcome',
                  'English with Arabic interpretation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-bold">
                    <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom SVG Risk Progression component nesting on the purple diagonal zone */}
            <div className="lg:col-span-6 z-10" id="overview-graph-card">
              <SovereigntyGraph />
            </div>

          </div>
        </div>
      </section>

      {/* OFFICIAL MERIDIAN EXCHANGE BROCHURE SHOWCASE TOOLKIT SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-b border-white/5 scroll-mt-24 relative" id="brochure-showcase">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.05)_0%,rgba(15,23,42,0)_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
          
          {/* Main info header */}
          <div className="max-w-3xl mx-auto space-y-4" id="brochure-intro-header">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold leading-none">
              Sovereign Handout Preview
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight uppercase">
              The Digital Slide Deck Previewer
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed text-center">
              Directly preview every single page of the Meridian Exchange executive handbook right below. Incorporating authentic backgrounds, complete roundtables, metrics, and exact branding layouts from the original 17-slide memorandum.
            </p>
          </div>

          {/* New Custom Interactive Brochure component incorporating images and exact content */}
          <InteractiveBrochure onDownload={downloadBrochurePDF} />

        </div>
      </section>

      {/* WHY NOW? THREE FORCES CONVERING SECTION based on Page 3 */}
      <section className="py-24 bg-slate-950 overflow-hidden" id="forces">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="forces-header">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block font-bold">Why Now?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
              Three Forces Converging
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
              The intersection of geopolitical instability, infrastructure dependency, and digital sovereignty demands a new model of strategic dialogue.
            </p>
          </div>

          {/* Three Forces Diagonal Card Matrix mimicking the brochure layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="forces-grid">
            {THE_CONVERGING_FORCES.map((force, idx) => (
              <div 
                key={force.id}
                className="group relative p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
                id={`force-card-${force.id}`}
              >
                {/* Diagonal cut accent mimicking the purple brochure template */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 group-hover:bg-purple-600/10 rounded-bl-3xl transition-all duration-300" />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-black text-purple-500/40 group-hover:text-purple-400/80 transition-colors">
                      {force.number}
                    </span>
                    <span className="inline-flex h-1 w-8 bg-purple-500/20 group-hover:bg-purple-500/60 transition-all" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {force.title}
                    </h3>
                    <p className="font-sans text-slate-400 text-xs md:text-sm leading-relaxed text-justify">
                      {force.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
                  <span>Audit Stream 0{idx + 1} Approved</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STRATEGIC INTERACTIVE WORKING ROUNDTABLES SECTION */}
      <RoundtableSection />

      {/* CORE THEMATIC DISCUSSION AREAS (Grid representing Page 4 themes) */}
      <section className="py-24 bg-slate-900 border-t border-b border-white/5" id="discussion-framework">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4" id="framework-header">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">Discussion Framework</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
              Core Discussion Themes
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
              Our 4 Roundtables are formulated around six critical cybersecurity and national security vectors.
            </p>
          </div>

          {/* Six thematic blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="themes-grid">
            {CORE_THEMES.map((theme, idx) => (
              <div 
                key={theme.id}
                className="p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-cyan-500/20 hover:bg-slate-950 transition-all shadow-md group"
                id={theme.id}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                    <Shield className="h-4.5 w-4.5 text-cyan-400" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-base leading-tight group-hover:text-cyan-300 transition-colors">
                    {theme.title}
                  </h4>
                </div>
                <p className="font-sans text-slate-400 text-xs md:text-sm leading-relaxed text-justify">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VIP DISTINGUISHED REGISTERED DELEGATES SECTION (Slide 11 & Slide 12) */}
      <section className="py-24 bg-slate-950 border-t border-b border-white/5 scroll-mt-24" id="delegates">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="delegate-registry-header">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                The Distinguished Registry
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight leading-none uppercase">
                Delegate Profile & Ranks
              </h2>
              <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Study the exact vetting parameters, seniority criteria, and institutional groupings representing our 120–150 checking-in delegates.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-900 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400">
              <Users className="h-4 w-4 text-[#8b5cf6]" />
              <span>APPROVED REGISTRIES ONLY</span>
            </div>
          </div>

          {/* Master 12-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="delegate-registry-workspace">
            
            {/* Left Column: Vetting & Ranks (Col Span 5) */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-8" id="vetting-ranks-panel">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#8b5cf6] uppercase font-black tracking-wider block">APPROVED SECTOR WEIGHTING</span>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Vetted stakeholder demography allocated across critical sector interfaces.
                  </p>
                </div>

                <div className="space-y-4 font-sans" id="sector-weighting-bars">
                  {[
                    { label: 'GOVERNMENT', pct: 40, desc: 'Ministers, Regulators, Federal Cyber Security Advisers, Intelligence Evaluators', color: 'from-cyan-500 to-cyan-300' },
                    { label: 'INDUSTRY', pct: 35, desc: 'Hyperscalers, Satcom Operators, Critical Infra Administrators, Fiber Consortia', color: 'from-purple-500 to-indigo-500' },
                    { label: 'INVESTMENT', pct: 15, desc: 'SWF Managers, Infrastructure Allocators, Digital Sovereign VCs', color: 'from-amber-500 to-yellow-400' },
                    { label: 'ADVISORY', pct: 10, desc: 'International Maritime Lawyers, Cyber Risk Underwriters, Compliance Boards', color: 'from-red-500 to-pink-500' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-slate-950/60 border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-extrabold text-white tracking-wider font-sans">{item.label}</span>
                        <span className="font-mono font-black text-cyan-400">{item.pct}%</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal mb-2">{item.desc}</p>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-black tracking-wider block">SENIORITY ENROLLED</span>
                <div className="flex flex-wrap gap-2 text-[10px] font-sans font-bold text-slate-300">
                  {[
                    'Ministers of State', 'His Excellencies', 'Government Authorities', 
                    'Director Generals', 'C-Level Executives', 'Managing Directors', 
                    'Senior Vice Presidents', 'Vice Presidents', 'Department Heads', 'Senior Policy Managers'
                  ].map((rank, rIdx) => (
                    <span 
                      key={rIdx}
                      className="px-2.5 py-1 rounded bg-[#0f0b1c] border border-cyan-500/10 text-cyan-300 hover:border-[#8b5cf6]/30 hover:text-white transition-all duration-300"
                    >
                      • {rank}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: 12 Classes of Org Representation (Col Span 7) */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-6" id="org-classes-panel">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#8b5cf6] uppercase font-black tracking-wider block">INSTITUTIONAL DIRECTORY CLASSES</span>
                <h3 className="text-lg md:text-xl font-bold font-sans text-white uppercase tracking-tight">Represented Organisation Types</h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  The checking-in profiles represent entities authorized across national regulatory and infrastructure security domains.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" id="org-classes-grid">
                {[
                  'Government & Regulatory', 'Cybersecurity Authorities', 'Central Banks',
                  'Foreign Affairs Ministries', 'Cloud Providers', 'Hyperscalers',
                  'Data Centre Operators', 'Quantum Security Vendors', 'Sovereign Wealth Funds',
                  'Law Firms', 'Consulting Firms', 'Diplomatic Missions'
                ].map((org, oIdx) => (
                  <div 
                    key={oIdx}
                    className="p-3 bg-slate-950 border border-white/5 hover:border-cyan-400/35 hover:bg-slate-950/80 rounded-xl text-left flex flex-col justify-between transition-all duration-300 group cursor-default"
                  >
                    <span className="text-[8.5px] font-mono text-purple-400 font-bold block mb-1">CLASS 0{oIdx + 1}</span>
                    <span className="text-xs font-sans font-extrabold text-slate-300 group-hover:text-white transition-colors leading-tight">
                      {org}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-cyan-950/20 border border-cyan-500/20 rounded-xl flex items-start gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-[10px] font-mono text-slate-400 leading-snug">
                  * ALL ATTENDANCE IS AUDITED UNDER COVENANT COMPLIANCE TERMS. DELEGATES ARE SUBJECT TO INDEPENDENT COMPLIANCE AND ALIGNMENT SCREENING PRIOR TO REGISTRATION COMPLETION.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EXECUTIVE STAKEHOLDER MATRIX SECTION */}
      <div id="attendees" className="scroll-mt-24">
        <StakeholderMatrix />
      </div>

      {/* SOVEREIGN DATA ENCLAVE MODEL GRID PARADIGM */}
      <EnclaveModelSection />

      {/* VVIP SPEAKERS & COUNCIL BOARD SECTION */}
      <section className="py-24 bg-slate-950 scroll-mt-24 border-t border-b border-white/5" id="speakers">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="speakers-header">
            <div className="space-y-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block font-bold">
                The Board of Trustees
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight uppercase leading-none">
                VVIP Speakers & Council Board
              </h2>
              <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Click on any of the council leaders below to visit their verified LinkedIn professional profile and study their strategic guidelines.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-900 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400">
              <Users className="h-4 w-4 text-[#8b5cf6]" />
              <span>COUNCIL: 8 ELECT MEMBERS</span>
            </div>
          </div>

          {/* Speakers grid linking directly to LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="speakers-grid">
            {SPEAKERS.map((speaker) => {
              const profileInitial = speaker.name.charAt(0);
              const isChairman = speaker.id === 'antonio-rotondo';
              
              return (
                <a
                  key={speaker.id}
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-slate-900 hover:to-indigo-950/40 transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer"
                  id={`speaker-tile-${speaker.id}`}
                >
                  {/* Decorative diagonal accent card highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-500 rounded-t-2xl" />

                  <div className="space-y-4 text-center">
                    
                    {/* Diamond Avatar Frame Context */}
                    <div className="relative mx-auto mt-4 mb-3">
                      <div className="relative h-24 w-24 mx-auto transform overflow-hidden rotate-45 border border-[#8b5cf6] bg-slate-950 shadow-md group-hover:shadow-lg group-hover:shadow-purple-500/20 group-hover:border-cyan-400 transition-all duration-300">
                        <div className="absolute inset-0 transform -rotate-45 scale-[1.35] flex items-center justify-center">
                          {speaker.avatarUrl ? (
                            <img 
                              src={speaker.avatarUrl} 
                              alt={speaker.name} 
                              className="w-full h-full object-cover select-none" 
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span className="text-2xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                              {profileInitial}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {isChairman && (
                        <div className="absolute -top-1 right-1/4 bg-amber-500 text-slate-950 text-[8px] font-sans font-extrabold px-1.5 py-0.5 rounded shadow z-10">
                          CHAIRMAN
                        </div>
                      )}
                    </div>

                    {/* Metadata text */}
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-purple-400 font-sans text-[11px] font-semibold tracking-wide uppercase line-clamp-1">
                        {speaker.title}
                      </p>
                      <p className="text-slate-400 font-sans text-xs line-clamp-2 min-h-[2.5rem] font-medium leading-relaxed">
                        {speaker.organization}
                      </p>
                    </div>

                    <p className="font-sans text-slate-500 italic text-xs leading-relaxed line-clamp-2 px-2">
                      "{speaker.quote}"
                    </p>

                  </div>

                  {/* Profile action link wrapping exactly the LinkedIn indicator requested */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <span className="uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <Linkedin className="h-3.5 w-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      LinkedIn Profile
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-purple-400 opacity-40 group-hover:opacity-100 transition-all" />
                  </div>

                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* THE STRATEGIC JOURNEY PROGRESSIVE AGENDA TIMELINE with Quantum Lock integration */}
      <section className="py-24 bg-slate-950 border-t border-b border-white/5 scroll-mt-24 relative overflow-hidden" id="quantum-agenda">
        {/* Subtle glow dots */}
        <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* THE QUANTUM LOCK SEGMENT MATRICES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-white/5" id="quantum-lock-block">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-5 space-y-6" id="quantum-lock-narrative">
              <div className="space-y-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold leading-none">
                  Cryptographic Sovereignty
                </span>
                <h3 className="text-4xl font-black font-sans text-white tracking-tight leading-none uppercase">
                  The Quantum Lock
                </h3>
              </div>
              <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed text-justify">
                The <strong className="text-white">"Harvest Now, Decrypt Later"</strong> threat is real. Encrypted communications intercepted today will be cracked tomorrow. The G7 mandate requires an aggressive, immediate shift to Quantum-Resistant cryptographic standards before legacy frameworks fail.
              </p>
              
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                <span className="p-1 px-2.5 rounded bg-purple-950/40 text-purple-400 border border-purple-500/20 uppercase tracking-widest font-extrabold leading-none">
                  Protocol Mandate
                </span>
                <span>Active migration indices approved</span>
              </div>
            </div>

            {/* Right Silicon Cyber-chips Frame */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6" id="quantum-lock-chips">
              {[
                {
                  code: 'PQC',
                  title: 'Post-Quantum Cryptography',
                  desc: 'Deploying robust lattice-based mathematical algorithms designed to thwart Shor\'s algorithm quantum computing attack vectors.'
                },
                {
                  code: 'QKD',
                  title: 'Quantum Key Distribution',
                  desc: 'Harnessing quantum mechanics and light polarization to construct mathematically unbreakable seed-exchange corridors.'
                },
                {
                  code: 'HSM',
                  title: 'Hardware Security Modules',
                  desc: 'Commissioning zero-trust cryptoprocessors built to authorize federated API flows behind physical silicon barriers.'
                }
              ].map((chip, idx) => (
                <div 
                  key={idx}
                  className="group relative p-6 bg-slate-900 border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/20 rounded-2xl flex flex-col justify-between transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-400/5 group-hover:bg-cyan-400/10 rounded-bl-xl transition-colors pointer-events-none" />
                  
                  <div className="space-y-4">
                    <span className="text-3xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:opacity-80 transition-opacity block tracking-tighter">
                      {chip.code}
                    </span>
                    <h4 className="font-sans font-black text-white text-xs md:text-sm uppercase tracking-tight leading-snug">
                      {chip.title}
                    </h4>
                    <p className="font-sans text-slate-400 text-xs leading-relaxed">
                      {chip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6" id="programme-header">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">Event Day Checklist</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight leading-none uppercase">
                The Strategic Journey
              </h2>
              <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Agenda timeline mapped strictly across private chambers. Hours locked to local Dubai times.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-900 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-sans text-slate-400 leading-snug flex-shrink-0">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono uppercase font-bold tracking-wider text-[10px]">Confirmed Timeline Stream (GST)</span>
            </div>
          </div>

          {/* Linear Timeline Node map */}
          <div className="max-w-4xl mx-auto space-y-6 relative" id="programme-timeline-block">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-cyan-400/10 to-transparent pointer-events-none" />

            {AGENDA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row relative items-start gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`agenda-timeline-node-${idx}`}
                >
                  {/* Timeline point bullet */}
                  <div className="absolute left-4 md:left-[50%] -translate-x-[7px] top-[14px] h-3.5 w-3.5 rounded-full border border-slate-900 flex items-center justify-center p-0.5 z-20 bg-slate-950">
                    <span className={`h-full w-full rounded-full ${item.isHighlight ? 'bg-cyan-400 animate-pulse' : 'bg-purple-500'}`} />
                  </div>

                  {/* Left Column Spacer / Node Container */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0" id={`timeline-body-${idx}`}>
                    <div 
                      className={`p-6 rounded-2xl bg-slate-950 border transition-all hover:border-white/10 ${
                        item.isHighlight 
                          ? 'border-purple-500/30 bg-gradient-to-br from-purple-950/15 to-transparent' 
                          : 'border-white/5'
                      }`}
                    >
                      {/* Badge and Title */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/30 px-3 py-1 rounded-md border border-cyan-500/20">
                          {item.time}
                        </span>
                        
                        {item.isHighlight && (
                          <span className="text-[10px] font-sans font-bold text-purple-300 uppercase tracking-widest block">
                            Key Highlight
                          </span>
                        )}
                      </div>

                      <h4 className="font-sans font-bold text-white text-base md:text-lg mb-1 leading-tight">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="font-sans text-slate-400 text-xs md:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column Spacer - Empty in desktop to keep timeline alternate layout */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DUBAI ENVIRONMENT MAP OVERLAY */}
      <div id="dubai-telemetry">
        <DubaiEnvironment />
      </div>

      {/* MARKETING STRATEGIC STATISTICS SECTION based on Page 15 */}
      <section className="py-24 bg-slate-900 border-t border-b border-white/5" id="marketing-stats">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="marketing-header">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">Event Reach & Analytics</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
              Integrated Outreach Campaigns
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
              Leveraging a deep, target-filtered global marketing database to maximize forum impact and strategic post-event output.
            </p>
          </div>

          {/* Metric list blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="marketing-grid">
            {MARKETING_CAMPAIGN.map((item) => {
              const IconComponent = (() => {
                switch (item.id) {
                  case 'm-1': return Eye;
                  case 'm-2': return Video;
                  case 'm-3': return Newspaper;
                  case 'm-4': return Globe;
                  case 'm-5': return PhoneCall;
                  case 'm-6': return Mail;
                  case 'm-7': return Megaphone;
                  case 'm-8': return Target;
                  default: return Globe;
                }
              })();

              return (
                <div 
                  key={item.id}
                  className="p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-purple-500/20 transition-all flex flex-col justify-between relative overflow-hidden group shadow-md"
                  id={`marketing-metric-${item.id}`}
                >
                  {/* Glowing custom small box filled with descriptive icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-purple-400 group-hover:border-purple-500/20 transition-all duration-300 shadow-inner z-10">
                    <IconComponent className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <div className="space-y-4 pr-12">
                    <span className="text-3xl md:text-4xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:scale-105 transition-all block tracking-tight">
                      {item.value}
                    </span>
                    <div>
                      <h4 className="font-sans font-bold text-white text-sm md:text-base tracking-tight uppercase">
                        {item.label}
                      </h4>
                      <p className="font-sans text-slate-500 text-xs mt-1 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SPONSORSHIP ENQUIRY PORTAL CTR CONTROL UI */}
      <EnquiryFormSection />

      {/* SUMMIT STRATEGIC EVENT DELIVERABLES */}
      <DeliverablesSection />

      {/* CORE GATEWAY APPLICATION SECTION (CTA form alignment) */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 scroll-mt-24" id="request-pass">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Informational briefing Column */}
            <div className="lg:col-span-6 space-y-6" id="cta-briefing">
              
              <div className="space-y-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">Registration protocols</span>
                <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight leading-none">
                  Request Private <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                    Assembly Access
                  </span>
                </h2>
                <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed max-w-lg text-justify">
                  Sovereign digital economies require resilient, trust-based foundational infrastructure. 
                  Meridian Exchange brings together elite policymakers, technology creators, SWF investment decision makers, and incident response actors in a highly isolated environment to shape the post-quantum cybersecurity timeline.
                </p>
              </div>

              {/* Secure terms checklist */}
              <div className="space-y-3" id="cta-verification-checkpoints">
                {[
                  'Strict vetting of applicant rank and official entity footprint',
                  'Chatham House Rule bindings enforced globally across all chambers',
                  'Co-authored White Paper Outcomes distributed to vetted members solely',
                  'Access limit: 120-150 seats strictly enforced'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-slate-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct email quick inquiry */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-2.5 max-w-md">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Direct Communications Desk</span>
                <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-400" />
                    <a href="mailto:mohammed@zenithnexus.com" className="hover:text-cyan-400 transition-colors">mohammed@zenithnexus.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <a href="tel:+971552893299" className="hover:text-purple-400 transition-colors">+971 55 289 3299</a>
                  </div>
                </div>
              </div>

            </div>

            {/* Premium registration queue gateway form */}
            <div className="lg:col-span-6" id="cta-form-stage">
              <InvitationForm />
            </div>

          </div>
        </div>
      </section>

      {/* FULL LUXURY INTERACTIVE FOOTER BLOCK */}
      <footer className="bg-slate-950 border-t border-white/10 py-16 text-slate-400 relative z-10" id="footer-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-white/5">
            
            {/* Left Column: branding & compact track links (Minimalist Grid) */}
            <div className="lg:col-span-4 space-y-6" id="footer-branding">
              <div>
                <a href="#" className="flex items-center gap-3 font-sans font-black text-white text-lg tracking-wider">
                  <img 
                    src="https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png" 
                    alt="Zenith Nexus Logo" 
                    className="h-8 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.4)]"
                    referrerPolicy="no-referrer"
                  />
                  ZENITH NEXUS
                </a>
                <p className="font-sans text-xs text-slate-500 mt-3 max-w-sm leading-relaxed text-justify">
                  Zenith Nexus presents Meridian Exchange. Operating isolated federal policy chambers focusing on high-integrity critical assets across GCC jurisdictions.
                </p>
              </div>

              {/* Ultra Minimalist Link list */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
                <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
                <span className="text-slate-800">|</span>
                <a href="#agenda" className="hover:text-purple-400 transition-colors">Timeline</a>
                <span className="text-slate-800">|</span>
                <a href="#speakers" className="hover:text-cyan-400 transition-colors">Registry</a>
                <span className="text-slate-800">|</span>
                <button onClick={() => setIsRequestModalOpen(true)} className="hover:text-purple-400 transition-colors cursor-pointer text-left">Request Pass</button>
              </div>

              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                Curated securely by Zenith Nexus
              </div>
            </div>

            {/* Right Column: Inquiries Control Desk & CTA Box (Interactive, Hassle-Free) */}
            <div className="lg:col-span-8 bg-slate-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6" id="interactive-footer-control-desk">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <h5 className="font-bold text-white font-sans uppercase tracking-widest text-xs font-mono">
                    ★ INQUIRIES CONTROL DESK
                  </h5>
                  <p className="text-xs text-slate-400 font-sans">
                    Seamless coordination by Lead Coordinator <strong className="text-white">Mohammed Malik Raihan</strong>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20 uppercase tracking-widest font-bold">
                  <MapPin className="h-3 w-3" />
                  <span>Dubai, UAE</span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                
                {/* Channel Cards */}
                <div className="space-y-3" id="footer-channels">
                  {/* Direct Location Mail Action */}
                  <a 
                    href="mailto:mohammed@zenithnexus.com?subject=Strategic%20Inquiry%20-%20Meridian%20Exchange%20Dubai&body=Dear%20Mohammed%20Malik%20Raihan,%0D%0A%0D%0AI%20am%20enquiring%20about%20representing%20our%20entity%20at%20the%20Meridian%20Exchange%20Strategic%20Forum.%20%0D%0A%0D%0ARepresentative:%20%0D%0AOrganization:%20%0D%0ADesignation:%20"
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-white/5 hover:border-cyan-500/30 transition-all group"
                    title="Initialize Pre-drafted Strategic Email"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">LAUNCH SECURE EMAIL</span>
                        <span className="font-mono text-xs text-slate-300 break-all">mohammed@zenithnexus.com</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold pr-2">Send ↗</span>
                  </a>

                  {/* Direct Phone Call / Whatsapp Interaction */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-white/5 hover:border-purple-500/30 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/20 text-purple-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">SECURE TELECOMMUNICATIONS</span>
                        <a href="tel:+971552893299" className="font-mono text-xs text-slate-300 hover:text-purple-400 transition-colors block">+971 55 289 3299</a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyFooterPhone}
                      className="text-[10px] font-mono text-slate-500 hover:text-white transition-colors uppercase font-bold bg-white/5 px-2.5 py-1 rounded cursor-pointer"
                    >
                      {copiedFooterPhone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Micro CTA Call To Action Panel - Hassle-free ping */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-white/5 relative" id="quick-enquiry-box">
                  <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">
                    ⚡ FAST DESK CONNECT
                  </span>
                  <p className="text-[11px] text-slate-400 font-sans leading-snug mb-4">
                    Send a direct callback request link immediately to our coordinate desk. No forms required.
                  </p>

                  <AnimatePresence mode="wait">
                    {!footerSuccess ? (
                      <form onSubmit={handleFooterSubmit} className="space-y-3">
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={footerEmail}
                            onChange={(e) => setFooterEmail(e.target.value)}
                            placeholder="Email address or Secure phone"
                            className="w-full bg-slate-950 border border-white/10 rounded-xl py-2.5 px-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 transition-all"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-sans text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Transmit Quick Ping</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-4 space-y-2 bg-purple-950/20 border border-purple-500/20 rounded-xl">
                        <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                        <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold block">
                          PING TRANSMITTED SUCCESSFULLY
                        </span>
                        <p className="text-[9px] font-sans text-slate-400">
                          Secure desk coordinate logged. We will connect within 10 minutes.
                        </p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>

          {/* Legal / Copyright metadata section */}
          <div className="pt-12 flex flex-col md:flex-row md:items-center justify-between text-[11px] font-mono text-slate-600 gap-4" id="footer-legal-bar">
            <div>
              © 2026 MERIDIAN EXCHANGE Strategic Forum. All Rights Reserved. Curated with absolute integrity by Zenith Nexus.
            </div>
            <div className="flex items-center gap-4">
              <span>GDPR / GCC PRIVACY COMPLIANT</span>
              <div className="h-3 w-[1px] bg-slate-800" />
              <span>CHATHAM HOUSE SECURED CONVOY</span>
            </div>
          </div>

        </div>
      </footer>

      {/* GLORIOUS POPUP REGISTRATION MODAL */}
      <AnimatePresence>
        {isRequestModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10" id="global-request-pass-modal">
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRequestModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            />

            {/* Glowing Interactive Modal Board */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-3xl p-1 shadow-2xl shadow-purple-950/40 overflow-y-auto max-h-[90vh] z-10"
            >
              {/* Close Icon Trigger */}
              <button
                onClick={() => setIsRequestModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-30 cursor-pointer"
                aria-label="Close credentials popup"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-3 sm:p-6">
                <InvitationForm />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

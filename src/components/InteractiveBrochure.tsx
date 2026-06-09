/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, ChevronRight, Download, Eye, Layers, 
  MapPin, Calendar, Clock, Lock, ShieldCheck, Mail, Phone,
  Users, Globe, Compass, Star, Server, Award, Rocket, Check
} from 'lucide-react';

interface InteractiveBrochureProps {
  onDownload: () => void;
}

export default function InteractiveBrochure({ onDownload }: InteractiveBrochureProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Helper to render standard PDF slide frame
  const renderSlideFrame = (category: string, title: string, subtitle: string, pageNum: string, children: React.ReactNode) => {
    return (
      <div className="h-full w-full flex flex-col justify-between p-5 md:p-8 relative text-left select-none bg-[#05020e] overflow-hidden">
        {/* Subtle high-tech background lines and grids */}
        <div className="absolute inset-0 bg-slate-950/40 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
        
        {/* Slide Frame Header */}
        <div className="relative z-10 w-full mb-2">
          <div className="flex justify-between items-start mb-1 md:mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4.5 bg-[#a855f7]" />
              <div>
                <p className="text-[9.5px] font-mono font-bold text-[#a855f7] tracking-widest leading-none">ZENITH NEXUS</p>
                <p className="text-[7.5px] font-mono text-[#6e7087] tracking-wider leading-none mt-0.5">MERIDIAN EXCHANGE: STRATEGIC POLICY FORUM 2026</p>
              </div>
            </div>
            {/* Logo placeholder icon / label */}
            <div className="flex items-center gap-1 opacity-70">
              <span className="text-[8px] font-mono text-[#6e7087] font-bold tracking-widest">CORPORATE NEXUS DIRECTIVE</span>
            </div>
          </div>
          
          {/* Top division line */}
          <div className="h-[1px] w-full bg-[#a855f7]/30" />
          
          {/* Title and Subtitle Block */}
          <div className="mt-3">
            <span className="text-[9.5px] font-mono text-[#22d3ee] uppercase tracking-[0.2em] block font-extrabold leading-none">{category}</span>
            <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-tight mt-1">{title}</h3>
            <p className="text-[11px] font-sans italic text-[#6e7087] leading-none mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Main Slide Content Area */}
        <div className="relative z-10 flex-1 flex flex-col justify-center my-2 overflow-hidden">
          {children}
        </div>

        {/* Slide Frame Footer */}
        <div className="relative z-10 w-full pt-2.5 border-t border-[#19142d] flex justify-between items-center text-[9px] font-mono text-[#6e7087]">
          <span>© 2026 MERIDIAN EXCHANGE COVENANT • CHATHAM HOUSE RULE PREVAILS</span>
          <span>SLIDE {pageNum} OF 17</span>
        </div>
      </div>
    );
  };

  const SLIDES = [
    {
      page: '01',
      title: 'Cover page',
      type: 'cover',
      bgImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      content: (
        <div className="h-full flex flex-col justify-between p-6 md:p-10 relative text-left bg-[#05020e] overflow-hidden">
          {/* Dynamic star matrix mesh */}
          <div className="absolute inset-0 bg-slate-950/20 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-purple-950/10 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Header branding */}
          <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png" 
                alt="Zenith Nexus Logo" 
                className="h-7 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(34,211,238,0.5)]"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-mono tracking-[0.3em] font-black text-white">ZENITH NEXUS PRESENTS</span>
            </div>
            <span className="text-[9px] font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40 uppercase font-bold tracking-widest animate-pulse">
              OFFICIAL MEMORANDUM
            </span>
          </div>

          {/* Main Title Block */}
          <div className="space-y-4 max-w-4xl my-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-sans font-black text-white tracking-normal leading-[1.05] uppercase">
              MERIDIAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-indigo-300 to-[#22d3ee] filter drop-shadow-[0_2px_15px_rgba(168,85,247,0.3)]">
                EXCHANGE
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-sans font-bold text-[#c8c9d6] tracking-tight">
              Digital Sovereignty Resilience
            </p>

            {/* Quote of cover page */}
            <div className="pt-4 border-t border-purple-500/20 max-w-2xl">
              <p className="font-sans italic text-xs md:text-sm text-[#c8c9d6] leading-relaxed">
                "The continuity question is no longer whether systems can be recovered. It is whether critical services can continue operating when infrastructure, connectivity, operations, and personnel are all under pressure simultaneously."
              </p>
            </div>
          </div>

          {/* Bottom telemetry card strip */}
          <div className="relative z-10 bg-[#0f0b1c]/90 border border-[#a855f7]/40 p-3 md:p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
            <div className="space-y-1 font-sans text-xs">
              <p className="font-black text-white uppercase tracking-wider">8 SEPTEMBER 2026</p>
              <p className="text-[#c8c9d6]">JW Marriott Marina, Dubai | Closed-Door Invitation Only</p>
            </div>
            <div className="text-[10.5px] font-mono text-cyan-400 font-extrabold uppercase tracking-wide">
              RESILIENCE IN THE ERA OF GEOPOLITICAL RISK
            </div>
          </div>

          {/* Minimal coordinate footer */}
          <div className="relative z-10 flex justify-between text-[8px] font-mono text-[#6e7087]">
            <span>VERIFICATION CODE: ME-2026-SOVEREIGNTY</span>
            <span>ZENITH CORPORATE NEXUS DIRECTIVE</span>
          </div>
        </div>
      )
    },
    {
      page: '02',
      title: 'Forum Overview',
      type: 'overview',
      bgImg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Forum Overview',
        'A Working Forum for Policy & Infrastructure Leaders',
        'Executive commission briefing',
        '02',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1 h-full">
          {/* Executive brief text card */}
          <div className="md:col-span-7 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-4 md:p-6 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-cyan-400 block font-extrabold tracking-wider uppercase">EXECUTIVE COMMISSION BRIEF</span>
              <p className="text-xs md:text-[13px] text-[#c8c9d6] leading-relaxed text-justify">
                Meridian Exchange has been established as a closed-door policy and industry forum focused on digital resilience, sovereign data governance, and future infrastructure security.
              </p>
              <p className="text-xs md:text-[13px] text-[#c8c9d6] leading-relaxed text-justify">
                The event brings together elite stakeholders responsible for high-level policy, critical infrastructure, regulation, security funding, and operational continuity assets.
              </p>
              <p className="text-xs md:text-[13px] text-[#c8c9d6] leading-relaxed text-slate-300 text-justify">
                Unlike traditional formats, Meridian Exchange centers strictly on peer-to-peer verification and practical discussion roundtables rather than academic slideshows.
              </p>
            </div>

            {/* Custom quotation from cover */}
            <div className="border-l-2 border-[#a855f7] pl-3 py-1 italic text-[11px] text-[#a855f7] leading-relaxed bg-[#a855f7]/5 rounded-r">
              "National control over critical data assets, cloud infrastructure, and digital services is no longer a luxury — it is the cornerstone of geopolitical survival."
            </div>
          </div>

          {/* Right bento metrics */}
          <div className="md:col-span-5 flex flex-col justify-between h-full gap-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { number: '120-150', text: 'Senior Delegates', desc: 'Elite ministries, regulators, & SWF investment actors.' },
                { number: '4', text: 'Strategic Roundtables', desc: 'Highly focused interactive policy workgroups.' },
                { number: '1', text: 'White Paper', desc: 'Actionable policy deployment outcomes.' },
                { number: 'INVITE ONLY', text: 'Access Protocol', desc: 'Chatham house security rules active globally.', isString: true }
              ].map((m, i) => (
                <div key={i} className="p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl relative overflow-hidden flex flex-col justify-between text-left">
                  <div className="h-[1.5px] w-full bg-cyan-400 absolute top-0 left-0" />
                  <div>
                    <div className="text-white font-mono font-black text-lg md:text-xl">{m.number}</div>
                    <div className="text-[10px] font-mono text-cyan-400 mt-0.5 uppercase tracking-wider font-extrabold leading-none">{m.text}</div>
                  </div>
                  <p className="text-[9.5px] text-[#6e7087] mt-1.5 leading-snug">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Event format strategy block */}
            <div className="p-3 bg-[#0f0b1c] border border-[#a855f7]/20 rounded-xl space-y-1.5 text-left">
              <span className="text-[9px] font-mono text-[#a855f7] font-black uppercase tracking-widest block">EVENT FORMAT STRATEGY</span>
              <div className="space-y-1 text-[10px] text-[#c8c9d6] font-sans">
                <p>• Strictly Closed-Door. No external media permitted.</p>
                <p>• English with Arabic Interpretation provided globally.</p>
                <p>• Closed interactive roundtables with pre-assigned seating.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '03',
      title: 'Three Forces Converging',
      type: 'forces',
      bgImg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Why Now?',
        'Three Forces Converging',
        'Three convergence forces fueling sovereign demands',
        '03',
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 items-stretch my-auto">
          {[
            {
              idx: '01',
              title: 'Geopolitical Risk',
              color: '#22d3ee',
              bgClass: 'hover:border-cyan-500/30',
              desc: 'Escalating tensions between major powers are creating new risks for cross-border data flows, cloud service continuity, and infrastructure access. Nations can no longer assume uninterrupted access to digital services hosted in foreign jurisdictions.'
            },
            {
              idx: '02',
              title: 'Infrastructure Dependency',
              color: '#a855f7',
              bgClass: 'hover:border-purple-500/30',
              desc: 'Critical national services increasingly depend on concentrated infrastructure — hyperscale cloud, submarine cables, and centralised data centres. A single point of failure can cascade across entire economies.'
            },
            {
              idx: '03',
              title: 'Digital Sovereignty',
              color: '#f59e0b',
              bgClass: 'hover:border-amber-500/30',
              desc: 'Governments are accelerating efforts to establish sovereign control over data, infrastructure, and digital services. The regulatory and operational frameworks for this transition remain undefined.'
            }
          ].map((f) => (
            <div key={f.idx} className={`p-4 bg-[#0f0b1c] border border-[#19142d] rounded-2xl relative group transition-all flex flex-col justify-between ${f.bgClass}`}>
              {/* Highlight bar */}
              <div className="h-[2px] w-full absolute top-0 left-0 rounded-t-2xl" style={{ backgroundColor: f.color }} />
              
              <div className="space-y-3 text-left">
                <span className="text-3xl font-mono font-black block leading-none pt-2" style={{ color: f.color }}>
                  {f.idx}
                </span>
                <h4 className="font-sans font-black text-white text-sm uppercase tracking-wider">{f.title}</h4>
                <p className="font-sans text-[#c8c9d6] text-[11px] leading-relaxed text-justify">
                  {f.desc}
                </p>
              </div>

              <div className="mt-4 text-[9px] font-mono text-[#6e7087] uppercase">
                Audit Stream: ME-FORCES-{f.idx}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '04',
      title: 'Discussion Themes',
      type: 'themes',
      bgImg: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Discussion Framework',
        'Core Discussion Themes',
        'Core discussion themes formulating roundtable objectives',
        '04',
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 my-auto">
          {[
            { title: 'Digital Sovereignty', desc: 'National control over critical data assets, cloud infrastructure, and digital services.' },
            { title: 'Infrastructure Resilience', desc: 'Ensuring continuity of operations when physical and digital systems face simultaneous pressure.' },
            { title: 'Quantum Security', desc: 'Preparing cryptographic infrastructure and migration timelines for the post-quantum era.' },
            { title: 'Cloud Continuity', desc: 'Maintaining sovereign, uninterrupted access to cloud services during periods of intense geopolitical disruption.' },
            { title: 'International Cooperation', desc: 'Frameworks for cross-border data governance, compliance, and mutual infrastructure support.' },
            { title: 'Critical Infrastructure', desc: 'Protecting essential utility transport services from cascading tech failures across interconnected systems.' }
          ].map((theme, i) => (
            <div key={i} className="p-4 bg-[#0f0b1c] border border-[#19142d] rounded-xl space-y-2 relative text-left hover:border-cyan-500/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rotate-45" />
                <h4 className="text-[11.5px] font-mono text-white font-extrabold tracking-wider uppercase">{theme.title}</h4>
              </div>
              <p className="text-[10.5px] font-sans text-[#c8c9d6] leading-relaxed text-justify">{theme.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '05',
      title: 'The Strategic Journey',
      type: 'journey',
      bgImg: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Event Programme',
        'The Strategic Journey Timeline',
        'The operational run-of-show sequence of the strategic forum',
        '05',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
          {/* Vertical Timeline Left */}
          <div className="md:col-span-8 p-4 md:p-5 bg-[#0f0b1c] border border-[#19142d] rounded-2xl flex flex-col justify-between py-5">
            <div className="relative pl-6 space-y-2.5">
              {/* Vertical accent ribbon */}
              <div className="absolute left-[5px] top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-400 to-[#a855f7]" />

              {[
                { time: '08:00 - 09:00', title: 'Arrival & Registration (VIP Badge Collection & Arabic Coffee)' },
                { time: '09:00 - 09:15', title: 'Opening Remarks & Strategic Sovereign Keynote Briefing' },
                { time: '09:15 - 11:15', title: 'Strategic Roundtable Session I (Roundtables 1 & 2)' },
                { time: '11:15 - 11:30', title: 'Coffee & Direct Policy Dialogue Recess' },
                { time: '11:30 - 13:30', title: 'Strategic Roundtable Session II (Roundtables 3 & 4)' },
                { time: '13:30 - 14:30', title: 'Three-Course Gourmet Working Luncheon' },
                { time: '14:30 - 15:30', title: 'Policy Discussions & Tactical Co-Authorship Mapping' },
                { time: '15:30 - 16:30', title: 'White Paper Outcomes & Regional Guidelines Review' },
                { time: '16:30 - 18:00', title: 'Meridian Dialogue Sunset Reception' }
              ].map((step, i) => (
                <div key={i} className="flex grid grid-cols-12 items-baseline text-[11px] gap-2 relative">
                  <div className="absolute left-[-25px] top-[4px] h-2.5 w-2.5 rounded-full bg-cyan-400 border border-[#05020e] z-10" />
                  <span className="col-span-3 font-mono font-black text-cyan-400 text-left">{step.time}</span>
                  <span className="col-span-9 font-sans font-bold text-[#c8c9d6] text-left leading-normal">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warnings / Protocols Right */}
          <div className="md:col-span-4 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-4 flex flex-col justify-between text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#a855f7] block font-black uppercase tracking-widest">FOR STRUCTURAL REASONS</span>
              <p className="text-[11px] text-[#c8c9d6] leading-relaxed text-justify">
                All sessions follow strict Chatham House Rule protocols. Delegates are assigned individual secure workrooms to isolate intellectual properties.
              </p>
              <p className="text-[11px] text-[#c8c9d6] leading-relaxed text-slate-300 text-justify">
                Attendance registers are heavily reviewed by our alignment committee to prevent conflict representation of competitive tech operators.
              </p>
            </div>

            <div className="p-3 bg-[#a855f7]/5 border border-[#a855f7]/20 rounded-xl">
              <span className="text-[8px] font-mono text-[#a855f7] uppercase tracking-[0.2em] font-extrabold block">ATTENDANCE MATRIX APPROVAL</span>
              <p className="text-[9.5px] text-[#6e7087] mt-1 leading-normal text-justify">
                Access is restricted to pre-vetted institutional stakeholders. No secondary invitation allowed.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '06',
      title: 'Roundtable 1: Digital Sovereignty',
      type: 'rt1',
      bgImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Roundtable 1',
        'Digital Sovereignty & Governance',
        'Sovereign cloud operations and national data regulatory schemes',
        '06',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
          {/* Detailed list left */}
          <div className="md:col-span-7 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-5 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-extrabold">ROUNDTABLE SYNOPSIS</span>
              <p className="text-xs text-[#c8c9d6] leading-relaxed italic border-l-2 border-[#22d3ee] pl-3 py-1 bg-cyan-950/10">
                "How should nations define and protect sovereign data assets in an era of highly distributed cloud infrastructure?"
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-[9px] font-mono text-[#6e7087] uppercase tracking-widest block font-extrabold">KEY DISCUSSION FOCUS GROUPS</span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'National data classification frameworks & local residency enforcement schemes.',
                  'Sovereign cloud operational requirements & strict security certification guidelines.',
                  'Bilateral cross-border data transfer agreements during crises.',
                  'Digital asset protection & database shielding during active geopolitical disruption.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#05020e] border border-[#19142d] rounded-xl text-xs text-[#c8c9d6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5" />
                    <p className="flex-1 leading-normal font-bold text-[#c8c9d6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Concept overlay right */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" 
              alt="Cyber security concept" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.10] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-[#05020e]/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left p-3 bg-[#0f0b1c]/90 border border-cyan-500/20 rounded-xl space-y-1">
              <span className="text-[8.5px] font-mono text-cyan-400 tracking-wider font-extrabold uppercase">SESSION PROTOCOL RT01</span>
              <p className="text-[10px] text-[#c8c9d6] leading-snug font-sans">
                Review of modern Hyperscale certification tiers and multi-tenant security barriers.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '07',
      title: 'Roundtable 2: Infrastructure Resilience',
      type: 'rt2',
      bgImg: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Roundtable 2',
        'Infrastructure Resilience & Continuity',
        'Ensuring communications, power, and workforce continuity under emergency conditions',
        '07',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
          {/* Detailed list left */}
          <div className="md:col-span-7 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-5 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#a855f7] uppercase tracking-widest block font-extrabold">ROUNDTABLE SYNOPSIS</span>
              <p className="text-xs text-[#c8c9d6] leading-relaxed italic border-l-2 border-[#a855f7] pl-3 py-1 bg-purple-950/20">
                "What does true operational continuity look like when physical infrastructure, connectivity, and personnel face simultaneous pressure?"
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-[9px] font-mono text-[#6e7087] uppercase tracking-widest block font-extrabold">KEY DISCUSSION FOCUS GROUPS</span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Multi-layered physical/digital redundancy beyond standard disaster recovery (DR).',
                  'Supply chain vulnerabilities tracking for physical telecommunications backbones.',
                  'Workforce containment schemes & remote-command schemes under emergency disruptions.',
                  'Cross-sector system dependency and cascade mappings for utility networks.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#05020e] border border-[#19142d] rounded-xl text-xs text-[#c8c9d6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7] mt-1.5" />
                    <p className="flex-1 leading-normal font-bold text-[#c8c9d6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Concept overlay right */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80" 
              alt="Industrial telecom station" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.10] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-[#05020e]/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left p-3 bg-[#0f0b1c]/90 border border-purple-500/20 rounded-xl space-y-1">
              <span className="text-[8.5px] font-mono text-[#a855f7] tracking-wider font-extrabold uppercase">SESSION PROTOCOL RT02</span>
              <p className="text-[10px] text-[#c8c9d6] leading-snug font-sans">
                Acoustic profiling and electromagnetic pulse (EMP) shelter requirements for subsea nodes.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '08',
      title: 'Roundtable 3: Quantum Security',
      type: 'rt3',
      bgImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Roundtable 3',
        'Quantum & Cryptographic Transition',
        'Timeline and technical pathways for post-quantum security migration',
        '08',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
          {/* Detailed list left */}
          <div className="md:col-span-7 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-5 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-extrabold">ROUNDTABLE SYNOPSIS</span>
              <p className="text-xs text-[#c8c9d6] leading-relaxed italic border-l-2 border-indigo-400 pl-3 py-1 bg-indigo-950/20">
                "How should governments and operators prepare cryptographic infrastructure for the post-quantum era?"
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-[9px] font-mono text-[#6e7087] uppercase tracking-widest block font-extrabold">KEY DISCUSSION FOCUS GROUPS</span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Operational post-quantum cryptography migration timelines matching federal mandates.',
                  '"Harvest Now, Decrypt Later" global state threat indexes & cryptographic auditing.',
                  'National quantum-readiness validation frameworks for banks and central servers.',
                  'Inter-governmental cryptographic code & key-exchange protocol harmonisation.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#05020e] border border-[#19142d] rounded-xl text-xs text-[#c8c9d6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5" />
                    <p className="flex-1 leading-normal font-bold text-[#c8c9d6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Concept overlay right */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" 
              alt="High tech server mainframe" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.10] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-[#05020e]/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left p-3 bg-[#0f0b1c]/90 border border-indigo-500/20 rounded-xl space-y-1">
              <span className="text-[8.5px] font-mono text-indigo-400 tracking-wider font-extrabold uppercase">SESSION PROTOCOL RT03</span>
              <p className="text-[10px] text-[#c8c9d6] leading-snug font-sans">
                Review of lattice-based cryptography standards and NIST candidate integration models.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '09',
      title: 'Roundtable 4: Cloud Continuity',
      type: 'rt4',
      bgImg: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Roundtable 4',
        'Cloud Continuity & Cooperation',
        'Inter-state frameworks and technical backstops for sovereign digital preservation',
        '09',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
          {/* Detailed list left */}
          <div className="md:col-span-7 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-5 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block font-extrabold">ROUNDTABLE SYNOPSIS</span>
              <p className="text-xs text-[#c8c9d6] leading-relaxed italic border-l-2 border-teal-400 pl-3 py-1 bg-teal-950/10">
                "What frameworks are needed to ensure sovereign access to cloud systems during periods of active geopolitical instability?"
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-[9px] font-mono text-[#6e7087] uppercase tracking-widest block font-extrabold">KEY DISCUSSION FOCUS GROUPS</span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'Multi-national and bilateral digital data preservation covenants and secure databanks.',
                  'Emergency sovereign remote-cloud hosting access protocols for critical public agencies.',
                  'Hyperscaler audit and accountability frameworks regarding service suspension.',
                  'Regional cloud-node cluster mesh configurations for geographic fault containment.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#05020e] border border-[#19142d] rounded-xl text-xs text-[#c8c9d6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-1.5" />
                    <p className="flex-1 leading-normal font-bold text-[#c8c9d6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Concept overlay right */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80" 
              alt="Space satellite communications" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.10] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1c] via-[#05020e]/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left p-3 bg-[#0f0b1c]/90 border border-teal-500/20 rounded-xl space-y-1">
              <span className="text-[8.5px] font-mono text-teal-400 tracking-wider font-extrabold uppercase">SESSION PROTOCOL RT04</span>
              <p className="text-[10px] text-[#c8c9d6] leading-snug font-sans">
                Sovereign remote routing configurations and LEO satellite backhaul integrations.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '10',
      title: 'Stakeholder Matrix',
      type: 'stakeholders',
      bgImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Who Attends',
        'Executive Stakeholder Matrix',
        'Authorized institutional groupings and eligibility directories',
        '10',
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 my-auto text-[10.5px] font-sans">
          {[
            { 
              idx: '01', 
              title: 'Government', 
              color: '#22d3ee', 
              bgClass: 'border-cyan-500/20',
              list: ['Ministries of Digital Economy', 'National Cyber Security Authorities', 'Telecommunications Regulators', 'Foreign Affairs Departments', 'Federal Security Councils'] 
            },
            { 
              idx: '02', 
              title: 'Industry', 
              color: '#a855f7', 
              bgClass: 'border-purple-500/20',
              list: ['Hyperscaler Cloud Teams', 'Telecom Carriers & Backbones', 'Critical Facility Operators', 'Sovereign Cloud Operators', 'Quantum Encryption Labs'] 
            },
            { 
              idx: '03', 
              title: 'Investment', 
              color: '#f59e0b', 
              bgClass: 'border-amber-500/20',
              list: ['Sovereign Wealth Funds (SWF)', 'Infrastructure Development Banks', 'Digital Asset PE Units', 'National Security Finance Bureaus', 'Strategic Venture Operations'] 
            },
            { 
              idx: '04', 
              title: 'Advisory', 
              color: '#ef4444', 
              bgClass: 'border-red-500/20',
              list: ['International Tech Lawyers', 'Geopolitical Risk Advisories', 'Critical Operations Evaluators', 'Federal Compliance Assessors', 'Sovereignty Standards Boards'] 
            }
          ].map((grp) => (
            <div key={grp.idx} className={`p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl space-y-2.5 relative hover:${grp.bgClass} transition-all`}>
              <div className="h-[2px] w-full absolute top-0 left-0 rounded-t-xl" style={{ backgroundColor: grp.color }} />
              <div>
                <span className="text-[10px] font-mono tracking-wider block font-black uppercase text-slate-300 pt-1">
                  {grp.idx} {grp.title}
                </span>
              </div>
              <div className="space-y-1.5 text-left text-[10px] text-[#c8c9d6] pt-1">
                {grp.list.map((item, idx) => (
                  <p key={idx} className="flex gap-1.5 leading-tight">
                    <span className="font-bold shrink-0" style={{ color: grp.color }}>•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '11',
      title: 'Delegate Profile',
      type: 'profile',
      bgImg: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Delegate Profile',
        'Seniority & Stakeholder Categories',
        'Detailed diagnostic demography of checked-in summit participants',
        '11',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
          {/* Seniority column left */}
          <div className="md:col-span-5 p-4 rounded-xl bg-[#0f0b1c] border border-[#19142d] space-y-3 text-left">
            <span className="text-[10px] font-mono text-[#a855f7] uppercase font-black tracking-wider block">SENIORITY LEVELS APPROVED</span>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[10.5px] text-[#c8c9d6] font-sans">
              {[
                'Ministers of State', 'His Excellencies', 'Government Authorities', 
                'Director Generals', 'C-Level Executives', 'Managing Directors', 
                'Senior Vice Presidents', 'Vice Presidents', 'Department Heads', 'Senior Policy Managers'
              ].map((v, idx) => (
                <p key={idx} className="flex gap-1">
                  <span className="text-cyan-400">•</span>
                  <span>{v}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Group categories right */}
          <div className="md:col-span-7 flex flex-col justify-between gap-3">
            <div className="grid grid-cols-2 gap-3 font-sans h-full">
              {[
                { title: 'GOVERNMENT (40%)', sub: 'Ministers, Regulators, Federal Cyber Security Advisers, Intelligence Evaluators.', color: 'text-cyan-400' },
                { title: 'INDUSTRY (35%)', sub: 'Hyperscalers, Satcom Operators, Critical Infra Administrators, Fiber Consortia.', color: 'text-[#a855f7]' },
                { title: 'INVESTMENT (15%)', sub: 'SWF Managers, Infrastructure Allocators, Digital Sovereign VCs.', color: 'text-amber-500' },
                { title: 'ADVISORY (10%)', sub: 'International Maritime Lawyers, Cyber Risk Risk Underwriters, Compliance Boards.', color: 'text-red-500' }
              ].map((g, idx) => (
                <div key={idx} className="p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl flex flex-col justify-between text-left hover:border-slate-800 transition-all">
                  <span className={`text-[9.5px] font-mono font-black tracking-wider block ${g.color}`}>{g.title}</span>
                  <p className="text-[10px] text-[#c8c9d6] leading-relaxed pt-1">{g.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      page: '12',
      title: 'Institutional Representation',
      type: 'institutions',
      bgImg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Organisation Types',
        'Institutional Representation',
        'Federal chambers and operator entities currently active inside directories',
        '12',
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2.5 flex-1 my-auto text-[10px] md:text-xs">
          {[
            'Government & Regulatory', 'Cybersecurity Authorities', 'Central Banks',
            'Foreign Affairs Ministries', 'Cloud Providers', 'Hyperscalers',
            'Data Centre Operators', 'Quantum Security Vendors', 'Sovereign Wealth Funds',
            'Law Firms', 'Consulting Firms', 'Diplomatic Missions'
          ].map((v, idx) => (
            <div 
              key={idx} 
              className="p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl font-bold font-sans text-center text-[#c8c9d6] flex items-center justify-center hover:border-cyan-500/20 transition-all hover:bg-[#05020e]"
            >
              <div className="space-y-1">
                <span className="text-[8.5px] font-mono text-cyan-400 block tracking-tight">CLASS {100 + idx}</span>
                <span className="leading-tight text-[11px] block">{v}</span>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '13',
      title: 'Designed for Dialogue',
      type: 'format',
      bgImg: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Event Format',
        'Designed for Dialogue, Not Presentations',
        'Dynamic structured progression focusing on concrete peer-to-peer verification',
        '13',
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
          {/* Left progression workflow */}
          <div className="md:col-span-7 bg-[#0f0b1c] border border-[#19142d] rounded-2xl p-4 flex flex-col justify-between">
            <span className="text-[9.5px] font-mono text-cyan-400 block uppercase font-black text-left pb-2">THE INTERACTION PIPELINE</span>
            <div className="space-y-2 text-left">
              {[
                { num: '01', title: 'Roundtable Conference Session', desc: 'Secure brainstorm blocks dedicated to specific threat matrices.' },
                { num: '02', title: 'Three-Course Working Luncheon', desc: 'Gourmet networking with strict pre-arranged geopolitical seating.' },
                { num: '03', title: 'Closed Policy Brainstorms', desc: 'Sovereign drafting of cooperative data protection guidelines.' },
                { num: '04', title: 'White Paper Co-Authorship', desc: 'Consolidating findings into a peer-reviewed regional blueprint.' },
                { num: '05', title: 'Sunset Dialogue Reception', desc: 'Premium luxury networking lounge with views of Dubai Marina.' }
              ].map((p, i) => (
                <div key={i} className="flex gap-2.5 items-center p-1.5 rounded-lg hover:bg-[#05020e] transition-all">
                  <span className="text-cyan-400 font-mono font-black text-xs shrink-0">{p.num}</span>
                  <div className="flex-1">
                    <p className="font-sans font-bold text-xs text-white leading-none">{p.title}</p>
                    <p className="text-[10px] text-[#6e7087] mt-0.5 leading-snug">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right bento metrics */}
          <div className="md:col-span-5 flex flex-col justify-between gap-3 h-full">
            <div className="grid grid-cols-2 gap-3 h-full">
              {[
                { label: 'Delegates', val: '120–150 Attendees' },
                { label: 'Protocol', val: 'Strict Invite' },
                { label: 'Core Rule', val: 'Chatham House' },
                { label: 'Interface', val: 'English / Arabic' }
              ].map((b, i) => (
                <div key={i} className="p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl text-left flex flex-col justify-between hover:border-[#a855f7]/30 transition-all">
                  <div className="text-[8.5px] font-mono uppercase text-[#6e7087] tracking-wider leading-none">{b.label}</div>
                  <div className="text-cyan-400 font-sans font-black mt-2 text-xs md:text-sm leading-tight uppercase">{b.val}</div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#0f0b1c] border border-cyan-500/20 rounded-xl text-left bg-cyan-950/5">
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-extrabold block">SUMMIT MANDATE</span>
              <p className="text-[10px] text-[#c8c9d6] mt-0.5 leading-normal">
                No press, no direct citations, and full cryptographic identity isolation on request.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: '14',
      title: 'Why Participate',
      type: 'benefits',
      bgImg: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Why Participate',
        'Strategic Value of Participation',
        'Exclusive benefits of joining the closed policy workflow',
        '14',
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 my-auto">
          {[
            {
              title: 'Policy Dialogue',
              desc: 'Direct, unquoted engagement with peer-level policymakers, cyber regulators, and high-value critical infrastructure leaders representing 20+ jurisdictions.'
            },
            {
              title: 'Industry Collaboration',
              desc: 'Exchange sensitive perspectives with satcom operators, hyperscale cloud managers, investment consortia, and hardware security operators.'
            },
            {
              title: 'Strategic Visibility',
              desc: 'Secure active co-authorship credentials in the final White Paper Outcomes blueprint to be distributed to international security circles.'
            }
          ].map((benefit, i) => (
            <div key={i} className="p-4 bg-[#0f0b1c] border border-[#19142d] rounded-2xl relative text-left group hover:border-[#a855f7]/30 transition-all flex flex-col justify-between">
              <div className="h-[2px] w-8 bg-[#a855f7] mb-3" />
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-white tracking-wider uppercase font-black">{benefit.title}</h4>
                <p className="text-[11px] font-sans text-[#c8c9d6] leading-relaxed text-justify">{benefit.desc}</p>
              </div>

              <div className="mt-4 text-[9px] font-mono text-[#6e7087] uppercase tracking-wider">
                PARTICIPATION BENEFIT {1 + i}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '15',
      title: 'Event Marketing Outreach',
      type: 'outreach',
      bgImg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Event Marketing Outreach',
        'Integrated Marketing Campaign',
        'Leveraging our extensive global networks to build high-level alignment',
        '15',
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 my-auto text-center">
          {[
            { label: 'WEBSITE', metric: '+10,000', sub: 'Combined monthly views' },
            { label: 'VIDEO PROMOTION', metric: '+2,000', sub: 'Summit teaser views' },
            { label: 'NEWSLETTER', metric: '+5,000', sub: 'Active local subscribers' },
            { label: 'DISPLAY NETWORK', metric: '+100,000', sub: 'Targeted ad impressions' },
            { label: 'TELE SALES', metric: '+500', sub: 'Direct physical invitation calls' },
            { label: 'DIRECT EMAIL', metric: '+250,000', sub: 'Combined reach in APAC/GCC' },
            { label: 'PRESS RELEASES', metric: '+2', sub: 'GCC Wide Release drops' },
            { label: 'SOCIAL MEDIA', metric: '+100,000', sub: 'Impressions across corporate channels' }
          ].map((item, i) => (
            <div key={i} className="p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl flex flex-col justify-between text-left relative hover:border-[#a855f7]/30 transition-all">
              <span className="text-[8.5px] font-mono tracking-wider font-extrabold text-[#6e7087] uppercase block">{item.label}</span>
              <span className="text-base md:text-lg font-black font-mono text-cyan-400 tracking-tight mt-1.5 block leading-none">{item.metric}</span>
              <span className="text-[9.5px] text-[#c8c9d6] font-sans mt-1.5 block leading-tight">{item.sub}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '16',
      title: 'Sponsorship Packages',
      type: 'sponsorships',
      bgImg: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
      content: renderSlideFrame(
        'Strategic Participation Opportunities',
        'Sponsorship & Partnership Packages',
        'Sponsorship tiers offering direct leadership rights and outcome co-authorship',
        '16',
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 my-auto text-[10px] md:text-xs">
          {[
            { 
              package: 'Founding Partner', 
              sub: 'Policy Frame Builder',
              color: 'text-cyan-400',
              border: 'hover:border-cyan-500/20',
              text: 'Full co-authorship on final White Paper Outcomes. Roundtable co-leadership of chosen key theme. Full strategic visual branding across digital & print. 4 C-Suite delegation passes.' 
            },
            { 
              package: 'Strategic Partner', 
              sub: 'Bilateral Coordinator',
              color: 'text-[#a855f7]',
              border: 'hover:border-purple-500/20',
              text: 'Credited contributor listing in final outcomes paper. Logo integration in roundtable workspaces. Direct coordination with ministerial elements. 2 premium delegation passes.' 
            },
            { 
              package: 'Supporting Partner', 
              sub: 'Infrastructure Pioneer',
              color: 'text-amber-500',
              border: 'hover:border-amber-500/20',
              text: 'High corporate display brand visibility. Direct roundtable active seats matching domain. Full access to database attendee networking records. 1 premium summit access pass.' 
            },
            { 
              package: 'Reception Partner', 
              sub: 'Sunset Reception Host',
              color: 'text-red-500',
              border: 'hover:border-red-500/20',
              text: 'Exclusive full hosting of sunset cocktail hour. Executive opening address during reception. Premium custom branding in networking zones. 2 delegation passes.' 
            }
          ].map((p, idx) => (
            <div key={idx} className={`p-3 bg-[#0f0b1c] border border-[#19142d] rounded-xl flex flex-col justify-between text-left transition-all ${p.border}`}>
              <div className="space-y-1">
                <span className={`text-[10px] font-mono tracking-wider block font-black uppercase ${p.color}`}>{p.package}</span>
                <span className="text-[8.5px] font-mono text-[#6e7087] block italic leading-none">{p.sub}</span>
              </div>
              <p className="text-[#c8c9d6] text-[9.5px] leading-relaxed pt-1.5 border-t border-[#19142d] mt-2 text-justify">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      )
    },
    {
      page: '17',
      title: 'Back Cover',
      type: 'backcover',
      bgImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      content: (
        <div className="h-full flex flex-col justify-between p-6 md:p-10 text-center relative bg-[#05020e] overflow-hidden">
          {/* Circular matrix mesh backdrop */}
          <div className="absolute inset-0 bg-slate-950/20 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
          <div className="absolute inset-0 bg-slate-950/45 pointer-events-none" />

          {/* Core logo */}
          <div className="pt-3 relative z-10">
            <img 
              src="https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png" 
              alt="Zenith Nexus Logo" 
              className="h-14 w-auto object-contain mx-auto filter drop-shadow-[0_2px_12px_rgba(34,211,238,0.4)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Meridian Exchange branding center */}
          <div className="my-auto space-y-4 max-w-2xl mx-auto relative z-10 text-center">
            <span className="text-[10.5px] font-mono tracking-[0.3em] text-cyan-400 font-extrabold uppercase">MERIDIAN EXCHANGE OFFICE</span>
            
            <h2 className="text-xl md:text-2xl font-sans font-black text-white tracking-normal leading-relaxed uppercase">
              "Resilient digital economies require <br />
              resilient digital infrastructure."
            </h2>

            <p className="text-[#c8c9d6] font-sans text-[11px] max-w-lg mx-auto leading-relaxed text-justify md:text-center">
              Meridian Exchange brings together policymakers, cyber regulators, Satcom administrators, technology providers, investment consortia, and strategic risk specialists to secure the future of sovereign digital continuity.
            </p>
          </div>

          {/* Contact Details coordinator block */}
          <div className="max-w-xl mx-auto bg-[#0f0b1c] border border-purple-500/35 p-3.5 rounded-xl text-center relative z-10 w-full mb-2">
            <span className="text-[8px] font-mono text-cyan-400 tracking-[0.2em] font-extrabold uppercase block select-none">
              EXECUTIVE DESK COORDINATOR
            </span>
            <p className="text-xs font-sans font-black text-white mt-1 leading-none uppercase">
              MOHAMMED MALIK RAIHAN
            </p>
            <p className="text-[10px] font-mono text-[#a855f7] mt-1.5 leading-none">
              Tel: +971 55 289 3299  •  Email: mohammed@zenithnexus.com
            </p>
          </div>

          {/* Disclaimer */}
          <div className="relative z-10 border-t border-[#19142d] pt-3 text-[7.5px] font-mono text-[#6e7087] uppercase tracking-wider">
            ALL INFORMATION VALID FOR SUMMIT DATED SEPTEMBER 2026. REGISTRATION GATEWAY IS SUBJECT TO VETTING APPROVAL.
          </div>
        </div>
      )
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-6" id="interactive-brochure-3d-wrapper">
        {/* Intro tag */}
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6 animate-pulse">
          Click cover to open dossier
        </p>

        {/* Outer 3D space */}
        <div 
          className="relative flex items-center justify-center p-8 bg-slate-900/10 border border-white/5 rounded-3xl animate-fade-in"
          style={{ perspective: '1600px' }}
        >
          {/* Subtle light pedestal backdrop under the book */}
          <div className="absolute -bottom-2 w-[240px] h-6 bg-[#22d3ee]/10 rounded-full blur-xl animate-pulse" />

          {/* Core 3D Book object */}
          <motion.div
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
            aria-label="Open 3D Meridian Exchange Brochure"
            className="relative w-[280px] h-[396px] md:w-[310px] md:h-[438px] cursor-pointer transition-all duration-300"
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ 
              rotateY: -16, 
              rotateX: 8, 
              scale: 1.04,
              boxShadow: "0 25px 50px -12px rgba(168,85,247,0.25)"
            }}
            initial={{ rotateY: -6, rotateX: 4, rotateZ: -1 }}
            animate={{ 
              y: [0, -8, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Page thickness effect: Stacked page edges behind the cover */}
            <div className="absolute top-1 bottom-1 right-[-4px] w-[5px] bg-[#e2e8f0] border-r border-t border-b border-slate-400 rounded-r shadow-inner z-[5] opacity-95 flex flex-col justify-between py-1 px-[0.5px]">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-[1px] w-full bg-slate-300/40" />
              ))}
            </div>
            <div className="absolute top-2 bottom-2 right-[-8px] w-[5px] bg-[#cbd5e1] border-r border-t border-b border-slate-400 rounded-r z-[4]" />
            <div className="absolute top-3 bottom-3 right-[-12px] w-[5px] bg-[#94a3b8] border-r border-t border-b border-slate-400 rounded-r z-[3]" />

            {/* Cyan luxurious bookmark silk ribbon draping out of bottom */}
            <div className="absolute top-0 right-10 w-4 h-[102%] bg-gradient-to-b from-[#22d3ee] to-[#0891b2] z-[2] shadow-md origin-top rounded-b" />

            {/* Thick binded Spine on left edge */}
            <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 rounded-l-md border-r border-white/10 z-[10] shadow-[inset_1px_1px_5px_rgba(255,255,255,0.1),_2px_0_5px_rgba(0,0,0,0.5)] flex flex-col justify-between py-6 items-center">
              {/* spine design details */}
              <div className="h-6 w-full flex flex-col gap-1 items-center px-1">
                <div className="h-[2px] w-full bg-[#22d3ee]/40" />
                <div className="h-[1px] w-[80%] bg-[#22d3ee]/30" />
              </div>

              {/* Spine text rotated */}
              <div className="text-[7.5px] font-mono tracking-[0.25em] text-[#22d3ee] font-black uppercase whitespace-nowrap origin-center select-none" style={{ transform: 'rotate(-90deg) translate(-50%, 0)' }}>
                MERIDIAN EXCHANGE • 2026
              </div>

              <div className="h-6 w-full flex flex-col gap-1 items-center px-1">
                <div className="h-[1px] w-[80%] bg-[#22d3ee]/30" />
                <div className="h-[2px] w-full bg-[#22d3ee]/40" />
              </div>
            </div>

            {/* Front Cover Card styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c071b] via-[#05020e] to-[#12042b] rounded-l-md rounded-r-xl border border-purple-500/30 pl-8 pr-6 py-8 flex flex-col justify-between items-start text-left shadow-2xl z-[8] overflow-hidden select-none">
              
              {/* Cover background visual enhancements (Cyber matrix mesh) */}
              <div className="absolute inset-0 bg-slate-950/20 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
              <div className="absolute top-1/4 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Glowing foil border line around core cover bounds */}
              <div className="absolute inset-2 border border-purple-500/10 pointer-events-none rounded-lg" />

              {/* Cover Top section - Branding */}
              <div className="space-y-4 w-full relative z-10">
                <div className="flex items-center gap-1.5 bg-slate-950/80 border border-white/10 px-2.5 py-1 rounded w-fit">
                  <img 
                    src="https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png" 
                    alt="Zenith Nexus logo" 
                    className="h-5 w-auto object-contain filter drop-shadow-[0_1px_4px_rgba(239,68,68,0.4)]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[7.5px] font-mono tracking-wider text-slate-300 uppercase font-bold">ZENITH NEXUS</span>
                </div>
                
                <div className="h-[2px] w-8 bg-purple-500/50" />
              </div>

              {/* Cover Center section - Main Title */}
              <div className="my-auto space-y-3 w-full relative z-10">
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#22d3ee] font-black uppercase block animate-pulse">
                  OFFICIAL BRIEFING
                </span>
                
                <h3 className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tight leading-[1.1] uppercase filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
                  MERIDIAN <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
                    EXCHANGE
                  </span>
                </h3>
                
                <p className="text-xs font-sans font-bold text-slate-300 tracking-tight leading-none">
                  Digital Sovereignty Resilience
                </p>

                <p className="pt-3 font-sans italic text-[9.5px] text-slate-400 leading-relaxed border-t border-purple-500/20">
                  "The continuity question is no longer whether systems can be recovered. It is whether critical services can continue operating..."
                </p>
              </div>

              {/* Cover Bottom section - Specs and Pulsing Call to action */}
              <div className="w-full space-y-4 relative z-10 border-t border-purple-500/20 pt-4">
                <div className="flex justify-between items-center text-[8.5px] font-mono text-slate-400 leading-snug">
                  <div>
                    <p className="font-bold text-slate-200">8 SEPTEMBER 2026</p>
                    <p>JW MARRIOTT MARINA, DUBAI</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#22d3ee] font-black uppercase">INVITATION ONLY</p>
                    <p className="text-purple-400 font-bold">17 SLIDESTREAM</p>
                  </div>
                </div>

                {/* Open Instruction pulsing trigger */}
                <div className="flex items-center gap-2 justify-center py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg text-[9px] font-mono text-cyan-300 font-black tracking-widest uppercase transition-all duration-300 shadow bg-[#0c071b]">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>CLICK TO OPEN RECORD</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Alternate peek options or quick downloads beneath */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center" id="quick-action-strip">
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2.5 bg-[#0f0b1c] hover:bg-slate-900 border border-purple-500/30 text-purple-200 hover:text-white font-sans text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <Eye className="h-3.5 w-3.5 text-cyan-400" />
            <span>Open Slideshow Showcase</span>
          </button>
          
          <button
            onClick={onDownload}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-950 to-[#05020e] hover:to-slate-900 border border-[#22d3ee]/40 text-cyan-300 hover:text-white font-sans text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="h-3.5 w-3.5 text-[#22d3ee]" />
            <span>Download PDF Booklet</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center" id="interactive-brochure-block">
      
      {/* Top action controls */}
      <div className="w-full max-w-[850px] flex justify-between items-center border-b border-white/5 pb-3">
        <button
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#0f0b1c] hover:bg-slate-900 text-[10px] font-mono text-slate-400 hover:text-white uppercase tracking-widest border border-white/5 rounded-xl cursor-pointer"
          title="Fold Slides back into 3D Cover view"
        >
          <ChevronLeft className="h-3.5 w-3.5 text-cyan-400" />
          <span>Fold Book Cover</span>
        </button>
        
        <span className="text-[10px] font-mono text-[#22d3ee] uppercase tracking-[0.2em] font-black select-none">
          Document Stream Active
        </span>
      </div>

      {/* Dynamic slide viewer display - exactly matches A4 aspect ratio & styled beautifully */}
      <div className="relative w-full aspect-[297/210] max-w-[850px] bg-[#05020e] rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden group">
        
        {/* Dynamic Image backdrop with dark cyber masking */}
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img 
            src={SLIDES[currentSlide].bgImg} 
            alt={SLIDES[currentSlide].title} 
            className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.10]"
            referrerPolicy="no-referrer"
          />
          {/* Cyber matrix grid dots overlay */}
          <div className="absolute inset-0 bg-slate-950/40 bg-[linear-gradient(to_right,rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem] mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05020e] via-transparent to-[#05020e]/60" />
        </div>

        {/* Dynamic sliding animation containing exact brochure content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 z-10 h-full w-full"
          >
            {SLIDES[currentSlide].content}
          </motion.div>
        </AnimatePresence>

        {/* Exact red brand block Zenit Nexus logo overlay (Page bottom corner) */}
        <div className="absolute bottom-6 right-8 z-30 pointer-events-none opacity-90 hidden sm:block">
          <div className="flex items-center gap-1.5 bg-[#0f0b1c]/90 border border-white/15 px-2.5 py-1 rounded shadow-md">
            <img 
              src="https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png" 
              alt="Zenith Nexus exact logo" 
              className="h-6 w-auto object-contain filter drop-shadow-[0_1px_5px_rgba(239,68,68,0.4)]"
              referrerPolicy="no-referrer"
            />
            <span className="text-[8.5px] font-mono tracking-wider text-white uppercase font-black">ZENITH NEXUS</span>
          </div>
        </div>

        {/* Quick navigational overlays */}
        <div className="absolute bottom-6 left-8 z-30 flex items-center gap-2">
          {/* Page badge */}
          <span className="px-2.5 py-1 rounded bg-[#0f0b1c]/90 border border-purple-500/20 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest shadow">
            Page {SLIDES[currentSlide].page} of {SLIDES.length}
          </span>
        </div>

        {/* Slide Controls Overlay - hidden hover elements */}
        <div className="absolute inset-y-0 left-3 flex items-center z-20">
          <button 
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-slate-950/70 border border-white/10 hover:border-purple-500/50 hover:bg-slate-950 text-white cursor-pointer transition-all hover:scale-105"
            aria-label="Previous brochure slide"
          >
            <ChevronLeft className="h-5 w-5 text-cyan-400" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-3 flex items-center z-20">
          <button 
            onClick={handleNext}
            className="p-2.5 rounded-full bg-slate-[#05020e]/70 border border-white/10 hover:border-[#22d3ee]/50 hover:bg-slate-950 text-white cursor-pointer transition-all hover:scale-105"
            aria-label="Next brochure slide"
          >
            <ChevronRight className="h-5 w-5 text-purple-400" />
          </button>
        </div>

      </div>

      {/* Slide Thumbnails & jump indexes */}
      <div className="flex flex-wrap gap-2 justify-center max-w-[850px] w-full" id="brochure-thumb-deck">
        {SLIDES.map((slide, idx) => {
          const isSelected = currentSlide === idx;
          return (
            <button
              key={slide.page}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1.5 rounded-lg text-[9.5px] font-mono font-bold uppercase transition-all cursor-pointer ${
                isSelected 
                  ? 'bg-[#8b5cf6] text-white border border-[#8b5cf6]/40 shadow-md shadow-[#8b5cf6]/20'
                  : 'bg-[#0f0b1c] text-slate-400 border border-white/5 hover:border-white/10 hover:text-slate-200'
              }`}
              title={`Page ${slide.page}: ${slide.title}`}
            >
              Page {slide.page}
            </button>
          );
        })}
      </div>

      {/* SINGLE & OFFICIAL download booklet package container button */}
      <div className="mt-4 text-center space-y-4" id="brochure-official-action-trigger">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest max-w-[620px] mx-auto leading-normal">
          * This slideshow displays the precise information, image footage, and original font layout from the official printed handbook. Click below to download the high-resolution vector booklet instantly.
        </p>
        
        <button
          onClick={onDownload}
          className="px-8 py-4 bg-gradient-to-r from-[#05020e] via-[#0f0b1c] to-[#05020e] hover:to-slate-900 border-2 border-purple-500/40 hover:border-cyan-400 text-[#22d3ee] hover:text-white font-sans text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg hover:shadow-cyan-400/10 hover:scale-[1.02] flex items-center gap-3 cursor-pointer mx-auto"
          id="single-exclusive-brochure-dl-btn"
          title="Download Combined Multi-Slide PDF Copy"
        >
          <Download className="h-4.5 w-4.5 text-cyan-400 animate-bounce" />
          <span>Download PDF Document Booklet</span>
        </button>
      </div>

    </div>
  );
}

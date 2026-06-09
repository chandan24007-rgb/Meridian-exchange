/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Hammer, Key, Globe, Layers, ArrowRight, ClipboardList, CheckCircle } from 'lucide-react';
import { Roundtable } from '../types.ts';
import { ROUNDTABLES } from '../data.ts';

export default function RoundtableSection() {
  const [activeRoundtable, setActiveRoundtable] = useState<number>(1);

  // Match icon with the imageType
  const getRoundtableIcon = (type: string, size = 6) => {
    switch (type) {
      case 'cyber':
        return <Shield className={`h-${size} w-${size} text-cyan-400`} />;
      case 'infrastructure':
        return <Hammer className={`h-${size} w-${size} text-purple-400`} />;
      case 'quantum':
        return <Key className={`h-${size} w-${size} text-indigo-400`} />;
      case 'cloud':
        return <Globe className={`h-${size} w-${size} text-teal-400`} />;
      default:
        return <Layers className={`h-${size} w-${size} text-slate-400`} />;
    }
  };

  // Match background gradients for selected card
  const getSelectedGradient = (number: number) => {
    switch (number) {
      case 1:
        return 'from-cyan-950/40 via-cyan-900/10 to-transparent border-cyan-500/50 shadow-cyan-500/5';
      case 2:
        return 'from-purple-950/40 via-purple-900/10 to-transparent border-purple-500/50 shadow-purple-500/5';
      case 3:
        return 'from-indigo-950/40 via-indigo-900/10 to-transparent border-indigo-500/50 shadow-indigo-500/5';
      case 4:
        return 'from-teal-950/40 via-teal-900/10 to-transparent border-teal-500/50 shadow-teal-500/5';
      default:
        return 'from-slate-900 via-transparent to-transparent border-slate-700';
    }
  };

  const getRoundtableHeroImg = (number: number) => {
    switch (number) {
      case 1:
        return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80';
      case 2:
        return 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80';
      case 3:
        return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80';
      case 4:
        return 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80';
      default:
        return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 scroll-mt-24" id="roundtables-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6" id="roundtables-header">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Forum Modules</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
              4 Strategic Roundtables
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Unlike a traditional unidirectional conference, Meridian Exchange is organized as deep, closed-door working forums. Under the Chatham House Rule, attendees directly debate policy, standards, and crisis frameworks.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-950 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 shadow-md">
            <ClipboardList className="h-4 w-4 text-purple-400" />
            <span>FORMAT: CHATHAM HOUSE RULE ENFORCED</span>
          </div>
        </div>

        {/* Desktop interactive grid or mobile responsive list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="roundtables-workspace">
          
          {/* Left: Interactive Menu Navigation (Col Span 5) */}
          <div className="lg:col-span-5 space-y-4" id="roundtables-navigator">
            {ROUNDTABLES.map((rt) => {
              const isActive = activeRoundtable === rt.number;
              return (
                <button
                  key={rt.number}
                  onClick={() => setActiveRoundtable(rt.number)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 cursor-pointer outline-none ${
                    isActive
                      ? getSelectedGradient(rt.number)
                      : 'bg-slate-900/60 border-white/5 hover:border-white/10 hover:bg-slate-900 shadow-md'
                  }`}
                  id={`rt-nav-btn-${rt.number}`}
                >
                  {/* Decorative diagonal accent mimicking the purple brochure cuts */}
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400" />
                  )}

                  {/* Icon Block */}
                  <div className={`p-3 rounded-xl flex-shrink-0 border transition-all ${
                    isActive 
                      ? 'bg-white/5 border-white/15 shadow-sm' 
                      : 'bg-white/0.5 border-white/5'
                  }`}>
                    {getRoundtableIcon(rt.imageType, 5)}
                  </div>

                  {/* Metadata labels */}
                  <div className="space-y-1 leading-snug">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-widest">
                        Module 0{rt.number}
                      </span>
                      {isActive && (
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow shadow-cyan-400" />
                      )}
                    </div>
                    <h3 className="font-sans font-bold text-white text-base leading-tight">
                      {rt.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Immersive content drill down (Col Span 7) */}
          <div className="lg:col-span-7" id="roundtables-viewer">
            {ROUNDTABLES.map((rt) => {
              if (activeRoundtable !== rt.number) return null;
              
              return (
                <motion.div
                  key={rt.number}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between"
                  id={`roundtable-panel-view-${rt.number}`}
                >
                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

                   <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-2xl shadow-sm">
                          {getRoundtableIcon(rt.imageType, 6)}
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">Strategic Track</p>
                          <h4 className="text-xl font-extrabold text-white font-sans tracking-tight">Roundtable 0{rt.number}</h4>
                        </div>
                      </div>
                      
                      {/* Premium Badge */}
                      <span className="font-mono text-[9px] text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2.5 py-1 rounded-full uppercase">
                        Active Forum
                      </span>
                    </div>

                    {/* Brochure Slide Environmental Image with Cyber Overlay */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-white/10 group shadow-md">
                      <img 
                        src={getRoundtableHeroImg(rt.number)}
                        alt={rt.title}
                        className="w-full h-full object-cover filter brightness-[0.70] contrast-[1.15] transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Grid effect inside card simulating digital sovereignty */}
                      <div className="absolute inset-0 bg-slate-950/30 bg-[linear-gradient(to_right,rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] mix-blend-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/80 border border-purple-500/30 rounded-md text-[9px] font-mono text-purple-400 tracking-widest uppercase">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        BROCHURE PRESENTATION VIEW • SLIDE 0{rt.number + 5}
                      </div>

                      <div className="absolute bottom-3 right-4 text-right">
                        <span className="text-[9px] font-mono text-cyan-400 block tracking-widest uppercase font-bold">
                          {rt.number === 2 ? 'DUBAI DEEP-DESERT TRACKER' : 'COVENANT BRIEFING'}
                        </span>
                      </div>
                    </div>

                    {/* Description Subtitle */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Scope & Thesis</h5>
                      <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                        "{rt.subtitle}"
                      </p>
                    </div>

                    <hr className="border-white/5" />

                    {/* Key Discussion Areas List */}
                    <div className="space-y-4">
                      <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Core Working Modules</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="discussion-areas-grid">
                        {rt.discussionAreas.map((area, idx) => (
                          <div 
                            key={idx}
                            className="p-3.5 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3 hover:border-white/10 hover:bg-slate-950/80 transition-all group"
                          >
                            <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="font-sans text-slate-300 text-xs leading-relaxed font-semibold">
                              {area}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer info showing White Paper outcomes mapping */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" id="roundtable-footer-summary">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">White Paper Outlining Series</span>
                    </div>
                    
                    <a
                      href="#request-pass"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-bold hover:text-cyan-300 transition-colors uppercase tracking-wider"
                    >
                      Request Reserved Seat
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

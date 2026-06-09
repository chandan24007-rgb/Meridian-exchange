/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, FileText, ArrowUpRight, ShieldCheck, Milestone, Handshake } from 'lucide-react';

interface DeliverableCard {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
}

export default function DeliverablesSection() {
  const deliverables: DeliverableCard[] = [
    {
      num: '01',
      title: 'Meridian White Paper',
      subtitle: 'The 2027 Sovereign Doctrine',
      desc: 'A comprehensive federal-level policy framework outlining structural requirements and cloud deployment milestones necessary for complete national digital isolation readiness.',
      icon: <FileText className="h-6 w-6 text-amber-500" />
    },
    {
      num: '02',
      title: 'Bilateral Framework',
      subtitle: 'Secure Trade Corridors',
      desc: 'Official actionable guidelines for building compliant cross-border virtual enclaves, allowing secure inter-governmental trade without leaks.',
      icon: <Handshake className="h-6 w-6 text-indigo-400" />
    },
    {
      num: '03',
      title: 'Quantum Roadmap',
      subtitle: 'Migration Milestones',
      desc: 'A multi-phase chronological timeline forcing the immediate operational integration of Post-Quantum Cryptographic layers across federal communication channels.',
      icon: <Milestone className="h-6 w-6 text-cyan-400" />
    },
    {
      num: '04',
      title: 'Working Group Formation',
      subtitle: 'Sovereign Alignment Strategy',
      desc: 'Formulating joint national cybersecurity channels pairing operators, incident responders, and ministries to audit logistics vulnerability loops.',
      icon: <Award className="h-6 w-6 text-purple-400" />
    }
  ];

  return (
    <section className="py-28 bg-slate-900 border-t border-b border-white/5 scroll-mt-24 relative" id="deliverables">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-slate-950/20 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Header Block with Premium Dual-Tone styling */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold block">Summit Outcomes</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none uppercase">
            Official Event <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Deliverables
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            The Meridian Exchange goes beyond academic discussion. Working groups directly draft the initial regional blueprints, leaving every attendee with strategic deliverables to implement.
          </p>
        </div>

        {/* 4-Column Card Grid representing the premium flyers style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-amber-500/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header info */}
                <div className="flex items-center justify-between">
                  {/* Number count */}
                  <span className="text-4xl font-mono font-black text-slate-800 group-hover:text-amber-500/20 transition-colors">
                    {item.num}
                  </span>
                  
                  {/* Icon */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Content info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-sans">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] text-amber-500 italic uppercase tracking-wider block font-bold">
                    {item.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed text-justify pt-2">
                    {item.desc}
                  </p>
                </div>

              </div>

              {/* Card Footer action */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-amber-400 transition-colors">
                <span className="uppercase tracking-widest font-bold">Chatham Approved</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

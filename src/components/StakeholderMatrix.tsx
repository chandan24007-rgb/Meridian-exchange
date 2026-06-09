/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building, Globe, Landmark, Scale, ShieldCheck, Users, HelpCircle, UserCheck } from 'lucide-react';
import { STAKEHOLDER_MATRIX, SENIORITY_LEVELS, ORG_REPRESENTATION } from '../data.ts';

type CategoryKey = 'government' | 'industry' | 'investment' | 'advisory';

export default function StakeholderMatrix() {
  const [selectedTab, setSelectedTab] = useState<CategoryKey>('government');

  const getTabIcon = (tab: CategoryKey) => {
    switch (tab) {
      case 'government':
        return <Landmark className="h-5 w-5" />;
      case 'industry':
        return <Building className="h-5 w-5" />;
      case 'investment':
        return <Globe className="h-5 w-5" />;
      case 'advisory':
        return <Scale className="h-5 w-5" />;
    }
  };

  const getCategoryTitle = (tab: CategoryKey) => {
    switch (tab) {
      case 'government':
        return 'Sovereign & Regulatory Sectors';
      case 'industry':
        return 'Core Cloud & Cyber Operators';
      case 'investment':
        return 'Digital Asset & Infrastructure Equity';
      case 'advisory':
        return 'Legal, Risk & Compliance Frameworks';
    }
  };

  const getCategoryDescription = (tab: CategoryKey) => {
    switch (tab) {
      case 'government':
        return 'Ministries and federal bureaus designing active sovereign cloud certifications, national encryption standards, and cross-border security regulations.';
      case 'industry':
        return 'Hyperscalers and physical datacenter operators responsible for maintaining physical redundancy, data integrity, and local compliance layers.';
      case 'investment':
        return 'Sovereign wealth managers, infrastructure development finances, and private equity leaders looking to fuel national cybersecurity models.';
      case 'advisory':
        return 'International technology lawyers, regulatory compliance firms, and geopolitical advisers drafting crisis response covenants.';
    }
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-b border-white/5" id="attendance-matrix-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="matrix-header">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
            Delegation Criteria
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
            Executive Stakeholder Matrix
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
            Attendance is strictly gated to ensure active, peer-to-peer working dialogue. Explore the stakeholder streams, represented senior ranks, and institutional types authorized to access the closed-door chambers.
          </p>
        </div>

        {/* Matrix Tab Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="matrix-container">
          
          {/* Left panel: Category Selec & details (Col 5) */}
          <div className="lg:col-span-5 space-y-6" id="matrix-streams">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Stakeholder Stream</h4>
            
            <div className="flex flex-col gap-3">
              {(Object.keys(STAKEHOLDER_MATRIX) as CategoryKey[]).map((key) => {
                const isActive = selectedTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedTab(key)}
                    className={`w-full text-left p-4.5 rounded-xl border flex items-center justify-between transition-all duration-300 cursor-pointer outline-none ${
                      isActive
                        ? 'bg-purple-950/20 border-purple-500/40 text-purple-200 shadow-lg shadow-purple-500/5'
                        : 'bg-slate-900 border-white/5 text-slate-400 hover:border-white/10 hover:bg-slate-900/80 shadow-md'
                    }`}
                    id={`matrix-tab-${key}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-purple-900/30 text-purple-400 border border-purple-500/30' : 'bg-slate-950 text-slate-500'}`}>
                        {getTabIcon(key)}
                      </div>
                      <span className="font-sans font-bold capitalize text-sm tracking-wide">
                        {key}
                      </span>
                    </div>
                    {isActive && (
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanatory description card for selected category */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/2 to-white/0 border border-white/5 space-y-3" id="matrix-tab-rich-narrative">
              <h5 className="font-sans font-bold text-white text-base" id="matrix-category-full-title">
                {getCategoryTitle(selectedTab)}
              </h5>
              <p className="font-sans text-slate-400 text-xs md:text-sm leading-relaxed" id="matrix-category-desc">
                {getCategoryDescription(selectedTab)}
              </p>
            </div>
          </div>

          {/* Right panel: Active directory of specific institutions in selected stream (Col 7) */}
          <div className="lg:col-span-7 space-y-8" id="matrix-entities-viewer">
            
            {/* Specific entities */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-white/10 space-y-6 shadow-xl relative overflow-hidden" id="matrix-entities-panel">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <h5 className="text-sm font-mono text-slate-300 uppercase tracking-widest font-bold">Authorized Entities</h5>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="matrix-credentials-grid">
                {STAKEHOLDER_MATRIX[selectedTab].map((entity, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3 hover:border-white/10 transition-colors"
                  >
                    <span className="inline-flex h-5 w-5 rounded-md bg-purple-900/30 text-purple-400 border border-purple-500/20 text-[10px] font-mono items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-sans text-slate-200 text-xs md:text-sm leading-snug font-medium">
                      {entity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nested Subgrid: Seniority requirements + Represented organizations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="matrix-subgroups">
              
              {/* Seniority Gating */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col justify-between shadow-md" id="matrix-seniority-roles">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <UserCheck className="h-4 w-4 text-purple-400" />
                    <h6 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Required Delegation Rank</h6>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SENIORITY_LEVELS.map((rank, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-sans font-medium bg-purple-950/30 text-purple-300 rounded-md border border-purple-800/20"
                      >
                        {rank}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-4">
                  * Attendance is strictly audited. Credentials matched at physical reception.
                </p>
              </div>

              {/* Institutional Types representation */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col justify-between shadow-md" id="matrix-org-types">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <Building className="h-4 w-4 text-cyan-400" />
                    <h6 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Institutional Domains</h6>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ORG_REPRESENTATION.map((org, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-sans font-medium bg-slate-950 text-slate-300 rounded-md border border-white/5"
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-4">
                  * Dynamic working roundtables represent deep sectoral diversity.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

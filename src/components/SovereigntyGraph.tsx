/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, TrendingUp, AlertTriangle, ShieldCheck, Database } from 'lucide-react';

export default function SovereigntyGraph() {
  const [hoveredData, setHoveredData] = useState<string | null>(null);

  // Risk projection series
  const dataPoints = [
    { year: '2020', risk: 35, cloud: 42, policy: 18 },
    { year: '2021', risk: 48, cloud: 55, policy: 22 },
    { year: '2022', risk: 62, cloud: 68, policy: 35 },
    { year: '2023', risk: 75, cloud: 84, policy: 48 },
    { year: '2024', risk: 85, cloud: 91, policy: 65 },
    { year: '2025', risk: 92, cloud: 96, policy: 78 },
    { year: '2026', risk: 98, cloud: 99, policy: 94 }
  ];

  return (
    <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl relative overflow-hidden" id="sovereignty-graph-panel">
      {/* Light highlights */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
        <div className="space-y-1">
          <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Risk Assessment Metric</span>
          <h4 className="text-xl font-bold text-white font-sans tracking-tight flex items-center gap-2">
            <AreaChart className="h-5 w-5 text-cyan-400" />
            Infrastructure Risk Progression
          </h4>
        </div>

        <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase">
          <TrendingUp className="h-3 w-3" /> Standardized Trend Models
        </div>
      </div>

      <p className="text-slate-400 text-xs md:text-sm font-sans mb-8 leading-relaxed">
        This metric tracks the logarithmic strain on digital networks globally, measuring the converging points where foreign platform dependencies overlap with territorial border laws.
      </p>

      {/* Actual custom high-end vector graph */}
      <div className="relative h-64 w-full" id="svg-graph-stage">
        
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
          <div className="border-b border-dashed border-slate-500 w-full text-[9px] font-mono text-slate-500 py-1">100% Critical Tier</div>
          <div className="border-b border-dashed border-slate-500 w-full text-[9px] font-mono text-slate-500 py-1">75% High Strain</div>
          <div className="border-b border-dashed border-slate-500 w-full text-[9px] font-mono text-slate-500 py-1">50% Moderated</div>
          <div className="border-b border-dashed border-slate-500 w-full text-[9px] font-mono text-slate-500 py-1">25% Vulnerable</div>
        </div>

        {/* Vector SVG Graph Stage */}
        <svg viewBox="0 0 700 220" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Curve 1: Geopolitical Strain (Purple gradient fill & stroke) */}
          <path
            d="M 20 200 L 110 170 L 210 140 L 310 110 L 410 80 L 510 60 L 610 30"
            stroke="#c084fc"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M 20 200 L 110 170 L 210 140 L 310 110 L 410 80 L 510 60 L 610 30 L 610 215 L 20 215 Z"
            fill="url(#purpleGlow)"
            opacity="0.15"
          />

          {/* Curve 2: Cloud Concentrates Potential failure Points (Cyan stroke) */}
          <path
            d="M 20 185 L 110 155 L 210 120 L 310 90 L 410 50 L 510 30 L 610 15"
            stroke="#22d3ee"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 20 185 L 110 155 L 210 120 L 310 90 L 410 50 L 510 30 L 610 15 L 610 215 L 20 215 Z"
            fill="url(#cyanGlow)"
            opacity="0.12"
          />

          {/* Curve 3: Policy sovereign enactments (Indigo stroke) */}
          <path
            d="M 20 215 L 110 210 L 210 190 L 310 160 L 410 110 L 510 80 L 610 40"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />

          {/* Hover Target Hotspots */}
          {dataPoints.map((dp, i) => {
            const x = 20 + i * 98.3;
            return (
              <g 
                key={i} 
                className="cursor-pointer font-sans"
                onMouseEnter={() => setHoveredData(`${dp.year} Summary: Geopolitical Threat Index is ${dp.risk}%, Infrastructure Overload is ${dp.cloud}%, Enforced Policies exceed ${dp.policy}%`)}
                onMouseLeave={() => setHoveredData(null)}
              >
                {/* Wide invisible interaction hotspot area covering the full height of the chart to lock hover states */}
                <rect 
                  x={x - 30} 
                  y="5" 
                  width="60" 
                  height="210" 
                  fill="transparent" 
                  pointerEvents="all" 
                />

                {/* Vertical selection index line */}
                <line x1={x} y1="10" x2={x} y2="215" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                
                {/* Nodes */}
                <circle cx={x} cy={200 - (dp.risk * 1.7)} r="4.5" fill="#c084fc" className="hover:scale-135 transition-transform" />
                <circle cx={x} cy={200 - (dp.cloud * 1.7)} r="4.5" fill="#22d3ee" className="hover:scale-135 transition-transform" />
              </g>
            );
          })}

          {/* Gradients */}
          <defs>
            <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cyanGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic labels */}
        <div className="absolute bottom-[-16px] left-0 right-0 flex justify-between px-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider relative z-20" id="graph-x-labels">
          <span>2020</span>
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
          <span>2025</span>
          <span>Current (2026)</span>
        </div>
      </div>

      {/* Hover telemetry monitor readout */}
      <div className="mt-8 p-3 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-between min-h-11">
        {hoveredData ? (
          <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest animate-pulse">
            {hoveredData}
          </span>
        ) : (
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            * HOVER CORRESPONDING CHART DATA NODES FOR SPECIFIC HISTORIC YEAR INDEX DETAILS
          </span>
        )}
      </div>

      {/* Legend markers */}
      <div className="mt-5 grid grid-cols-3 gap-3 text-center" id="graph-legend">
        <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/20 text-purple-300 font-sans text-[10px] uppercase font-bold flex items-center justify-center gap-1.5">
          <AlertTriangle className="h-3.5 w-3.5" /> Geopolitical Strain
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 font-sans text-[10px] uppercase font-bold flex items-center justify-center gap-1.5">
          <Database className="h-3.5 w-3.5" /> Cloud Dependency
        </div>
        <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 text-indigo-300 font-sans text-[10px] uppercase font-bold flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5" /> Policy Enactments
        </div>
      </div>

    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, FileCheck, ShieldAlert, Cpu, QrCode, Download, RefreshCw, Layers } from 'lucide-react';

export default function InvitationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    jobTitle: '',
    organization: '',
    category: 'Government',
    motivation: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketHash, setTicketHash] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.corporateEmail || !formData.organization) return;
    
    setLoading(true);
    
    // Simulate premium verification sequence
    setTimeout(() => {
      // Generate secure looking ticket serial
      const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
      const code = `ME-${formData.category.toUpperCase().substring(0, 3)}-${randomId}-2026`;
      setTicketHash(code);
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      corporateEmail: '',
      jobTitle: '',
      organization: '',
      category: 'Government',
      motivation: ''
    });
    setSuccess(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto" id="invitation-request-form-container">
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.div
            key="application-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-8 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl relative"
            id="invitation-form-body"
          >
            {/* Glowing top line based on the template guidelines */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-500 rounded-t-2xl" />

            <div className="space-y-2 text-center mb-8">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">Executive Protocol</span>
              <h3 className="text-2xl font-bold font-sans text-white tracking-tight">Request Access Ticket</h3>
              <p className="text-slate-400 text-xs font-sans max-w-sm mx-auto">
                Attendance is strictly invitation-only, reserved for ministers, C-suite officers, and cybersecurity authorities. All submissions undergo credentials verification.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Full Name / Honorific *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Nader Ghazal"
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all"
                  id="form-full-name"
                />
              </div>

              {/* Corporate Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Corporate / Governmental Email *
                </label>
                <input
                  type="email"
                  name="corporateEmail"
                  required
                  value={formData.corporateEmail}
                  onChange={handleChange}
                  placeholder="e.g. representative@ministry.gov.ae"
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-all"
                  id="form-corporate-email"
                />
              </div>

              {/* Dual grid for Title and Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Job Title */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Official Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. Head of Critical Assets"
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all"
                    id="form-job-title"
                  />
                </div>

                {/* Organization */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Organization / Entity *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Cyber Security Council"
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-all"
                    id="form-organization"
                  />
                </div>

              </div>

              {/* Stakeholder Category */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Stakeholder Matrix Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all appearance-none cursor-pointer"
                    id="form-stakeholder-category"
                  >
                    <option value="Government">Government / Regulatory Authorities</option>
                    <option value="Industry">Industry / Telecom & Cloud Operators</option>
                    <option value="Investment">Investment / Sovereign Wealth Funds</option>
                    <option value="Advisory">Advisory / Corporate Law & Security Consulting</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Security Statement / Motivation */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Sovereignty / Continuity Focus Areas
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Specify particular policy issues or strategic themes you intend to address inside core roundtables..."
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                  id="form-motivation"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-95 shadow-lg shadow-purple-950/40 hover:shadow-cyan-500/10 hover:shadow-purple-500/10 cursor-pointer transition-all flex items-center justify-center gap-2"
                id="submit-invitation-btn"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin text-white" />
                    Authenticating Credentials...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Private Credentials
                  </>
                )}
              </button>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-950/10 border border-orange-500/10 text-orange-400 text-[10px] font-mono">
                <ShieldAlert className="h-4 w-4 flex-shrink-0" />
                <span>CHATHAM HOUSE SECURED CONSOLE. ALL TRANSACTIONS RECORDED IN COMPLIANCE WITH GCC DIGITAL PRIVACY REGULATIONS.</span>
              </div>

            </form>
          </motion.div>
        ) : (
          /* High-Fidelity VIP digital pass output */
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="p-8 rounded-3xl bg-slate-950 border-2 border-cyan-500/30 shadow-cyan-500/5 shadow-2xl relative overflow-hidden"
            id="invitation-pass-success"
          >
            {/* Glowing vertical circuitry lines */}
            <div className="absolute top-0 right-10 bottom-0 w-[1px] bg-cyan-500/10" />
            <div className="absolute top-0 right-16 bottom-0 w-[1px] bg-purple-500/10" />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-cyan-400" />

            {/* Glowing cyber node */}
            <div className="absolute top-5 right-5 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Pass structures */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">Meridian Exchange</span>
              </div>
              <span className="font-mono text-[9px] text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded uppercase">
                Review Ticket Generated
              </span>
            </div>

            <div className="space-y-6 text-center">
              <div className="p-4 rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 inline-flex mx-auto">
                <FileCheck className="h-8 w-8 animate-bounce" />
              </div>
              
              <div className="space-y-1">
                <p className="text-2xl font-bold font-sans text-white tracking-tight">Privileged Review Pass</p>
                <p className="text-xs text-slate-400">
                  Your credentials have been authenticated and logged into the strategic vetting queue.
                </p>
              </div>

              {/* Immersive Pass Visualizer card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/80 border border-white/10 text-left space-y-4 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Layers className="h-24 w-24 text-white" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Delegate Name</span>
                    <span className="text-sm font-sans font-bold text-white block truncate">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Delegated Rank</span>
                    <span className="text-sm font-sans font-bold text-cyan-300 block truncate">{formData.jobTitle || 'Private Delegate'}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Corporate Unit</span>
                    <span className="text-sm font-sans font-bold text-white block truncate">{formData.organization}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Matrix Stream</span>
                    <span className="text-sm font-sans font-semibold text-purple-300 block">{formData.category}</span>
                  </div>
                </div>

                <hr className="border-white/5" />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Security Hash ID</span>
                    <span className="text-xs font-mono font-semibold text-white tracking-wider block">{ticketHash}</span>
                  </div>
                  {/* barcode placeholder styled beautiful */}
                  <div className="bg-white p-1 rounded">
                    <QrCode className="h-9 w-9 text-slate-950" />
                  </div>
                </div>

                <div className="bg-cyan-950/50 border border-cyan-800/40 p-2.5 rounded-lg flex items-center gap-2 text-[9px] font-mono text-cyan-300 uppercase">
                  <span>* Subject to final vetting. Vetting confirmation email will be sent to raw address:</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded text-slate-300 font-mono text-[10px] break-all border border-white/5">
                  {formData.corporateEmail}
                </div>
              </div>

              {/* Action options */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl font-sans text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="print-pass-btn"
                >
                  <Download className="h-4 w-4" />
                  Print Queue Ticket
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-sans text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="register-another-btn"
                >
                  <RefreshCw className="h-4 w-4" />
                  Request Another Pass
                </button>
              </div>

              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-2 block">
                * Presented ticket is a proof of review queue entry. Formal admissions badge issued at the registration gates.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

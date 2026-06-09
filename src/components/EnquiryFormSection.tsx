import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Send, CheckCircle2, Copy, HelpCircle, ArrowRight,
  Sparkles, Award, Star, Settings, User, Building, Mail, Phone, MessageSquare
} from 'lucide-react';

export default function EnquiryFormSection() {
  const [activeStream, setActiveStream] = useState<string>('sovereign');
  const [formData, setFormData] = useState({
    fullname: '',
    organisation: '',
    email: '',
    phone: '',
    securityLevel: 'diplomatic',
    customBrief: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [generatedTicketID, setGeneratedTicketID] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const engagementStreams = [
    {
      id: 'sovereign',
      badge: 'LEVEL 01 STREAM',
      title: 'Sovereign Sponsor',
      icon: Star,
      perks: ['Exclusive co-chair keynotes', 'Bilateral state delegate lounge access', 'Full-page policy White Paper co-authorship']
    },
    {
      id: 'trustee',
      badge: 'LEVEL 02 STREAM',
      title: 'Trustee Council Member',
      icon: Award,
      perks: ['VVIP Board roundtable voting chair', '8 reserved executive delegate passes', 'Private media briefing lounge allocations']
    },
    {
      id: 'technology',
      badge: 'LEVEL 03 STREAM',
      title: 'Technology Alliance',
      icon: Settings,
      perks: ['Secured live sandbox showcase', 'Attestation cluster demo keys', 'B2B federal matchmaker integration']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(generatedTicketID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullname || !formData.organisation || !formData.email) {
      alert('Must complete authorized Representative, Entity, and Diplomatic Email.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-security verification pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const uuid = 'MNX-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
      setGeneratedTicketID(uuid);
    }, 1800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullname: '',
      organisation: '',
      email: '',
      phone: '',
      securityLevel: 'diplomatic',
      customBrief: ''
    });
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-b border-white/5 scroll-mt-24 relative overflow-hidden" id="sponsorship">
      {/* Decorative luxury vector lines */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.04),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="enquiry-ctr-interface">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4" id="enquiry-heading">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block font-bold">
            ★ PARTNERSHIP GATEWAY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight uppercase leading-none">
            Corporate & Sovereign <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Enquiry Control Desk
            </span>
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Select your organization's designated engagement track below to complete the premium bilateral protocol alignment. Lock in your institutional footprint at the Meridian Exchange.
          </p>
        </div>

        {/* Layout Side-by-Side: Left selection, Right interactive form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="enquiry-layout-grid">
          
          {/* Left Column: Streams selection dynamic showcase */}
          <div className="lg:col-span-5 space-y-6" id="streams-selector-panel">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold pb-2 border-b border-white/5">
              01 SELECT ENGAGEMENT PATH
            </h3>

            <div className="space-y-4">
              {engagementStreams.map((stream) => {
                const Icon = stream.icon;
                const isSelected = activeStream === stream.id;
                return (
                  <button
                    type="button"
                    key={stream.id}
                    onClick={() => setActiveStream(stream.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all relative overflow-hidden cursor-pointer ${
                      isSelected 
                        ? 'bg-slate-900 border-purple-500/40 shadow-lg shadow-purple-950/20' 
                        : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-400" />
                    )}

                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected 
                          ? 'bg-purple-950/40 border-purple-500/30 text-purple-400' 
                          : 'bg-slate-950 border-white/5 text-slate-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="space-y-1">
                        <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${
                          isSelected ? 'text-cyan-400 animate-pulse' : 'text-slate-500'
                        }`}>
                          {stream.badge}
                        </span>
                        <h4 className="font-sans font-bold text-white text-base">
                          {stream.title}
                        </h4>
                      </div>
                    </div>

                    {/* Staggered Privileges overview */}
                    <AnimatePresence mode="wait">
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-4 pt-4 border-t border-white/5 space-y-2 text-xs font-sans text-slate-400"
                        >
                          {stream.perks.map((perk, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2">
                              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                              <span className="text-slate-300 font-medium leading-tight">{perk}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Micro security assurance badge */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 text-[11px] font-mono text-slate-500 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Sovereignty and attribution guarantees verified under Chatham House Rule structure.</span>
            </div>
          </div>

          {/* Right Column: Premium Interactive CTR Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden" id="interactive-enquiry-card">
            
            {/* Visual Header of the Enquiry panel */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-8">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase font-bold">
                  02 COMPLETE INTEGRITY PROFILE
                </span>
                <span className="text-xs font-sans text-slate-400">
                  Track Selection: <strong className="text-white uppercase font-mono">{activeStream}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-950/50 border border-purple-500/20 rounded-lg text-[9px] font-mono text-purple-400 uppercase tracking-widest font-black animate-pulse">
                <span>Secure Tunnel SEC-9</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Two-column inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                        Authorized Representative *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          placeholder="Your honorable title & name"
                          className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                        Corporate / Federal Entity *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleInputChange}
                          placeholder="Organization or Ministry"
                          className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                        Diplomatic Email Coordinate *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="entity@domain.gov"
                          className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                        Secure Contact Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="country code included"
                          className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Designated Security Clearance
                    </label>
                    <select
                      name="securityLevel"
                      value={formData.securityLevel}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer"
                    >
                      <option value="diplomatic">Diplomatic Representative (Ministry / Head of State)</option>
                      <option value="c-level">C-Level Executive (SWF / Forbes List Corporation)</option>
                      <option value="technology">Security Architect / Chief Information Security Officer</option>
                      <option value="observer">Accredited Academic Observer / Independent Expert</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Engagement Intent / Strategy Briefing
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                      <textarea
                        rows={3}
                        name="customBrief"
                        value={formData.customBrief}
                        onChange={handleInputChange}
                        placeholder="Briefly state items you wish to raise for debate in the executive panels or specific partnership criteria..."
                        className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-sans text-xs font-bold uppercase tracking-widest hover:opacity-95 shadow-lg shadow-purple-950/40 transition-all cursor-pointer flex items-center justify-center gap-2.5"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>CRYPTOGRAPHIC VERIFY REGISTRY...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-cyan-300" />
                          <span>Transmit Secure Partnership Enquiry</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/40 border-2 border-emerald-500 text-emerald-400 animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-black font-sans text-white uppercase tracking-tight">
                      REGISTRY PROTOCOL ENCRYPTED
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                      Liaison query submitted successfully. Your custom credentials request and strategic intent have been indexed.
                    </p>
                  </div>

                  {/* Copyable receipt block */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 max-w-md mx-auto space-y-3">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                      VETTED INQUIRY REFERENCE TOKEN
                    </span>
                    
                    <div className="flex items-center justify-between gap-4 bg-slate-900 px-4 py-2.5 rounded-xl border border-white/10">
                      <span className="font-mono text-cyan-400 text-xs tracking-widest font-black">
                        {generatedTicketID}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyTicket}
                        className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        title="Copy ticket signature reference"
                      >
                        {copied ? (
                          <span className="text-[10px] font-mono text-emerald-400 uppercase font-black">Copied!</span>
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] font-sans text-slate-500 italic leading-snug">
                      Please copy this token. Our Chief Coordinator, <strong>Mohammed Malik Raihan</strong>, will reach you on secure networks within 4 hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

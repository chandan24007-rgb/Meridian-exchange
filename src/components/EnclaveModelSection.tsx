import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Server, Lock, Cpu, Radio, Network } from 'lucide-react';

export default function EnclaveModelSection() {
  const enclaveLayers = [
    {
      id: 'confidential-compute',
      icon: Cpu,
      phase: 'LAYER 1: SILICON INSULATION',
      title: 'Confidential Virtualization',
      description: 'Securing register-state execution via hardware-reinforced memory encryption (SEV-SNP, Intel TDX). Prevents physical host overseers and guest hypervisors from inspecting operational memory.',
      details: ['Hardware-enforced keys', 'Register decryption checks', 'Zero hypervisor-level exposure']
    },
    {
      id: 'attestation-service',
      icon: ShieldCheck,
      phase: 'LAYER 2: CRYPTOGRAPHIC VERIFICATION',
      title: 'Decentralised Attestation',
      description: 'Continuous zero-knowledge verification verifying platform boot integrity and CPU microcode metrics. Decryption payloads are securely withheld until host configurations are attested.',
      details: ['ZKP verification protocols', 'Real-time host posture audits', 'Immutable metric registries']
    },
    {
      id: 'microsegmentation',
      icon: Network,
      phase: 'LAYER 3: ZERO-TRUST INGRESS',
      title: 'Isolated Network Enclosures',
      description: 'Self-governing, non-routable communication meshes that isolate internal data streams from foreign routes. Restricts external queries to authenticated secure API pathways.',
      details: ['MTLS protocol tunnels', 'Side-channel barrier shields', 'Strict geographic egress limits']
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-b border-white/5 scroll-mt-24 relative overflow-hidden" id="enclave-model">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.06),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse_at_top, rgba(34,211,238,0.03) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="enclave-header">
          <div className="space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block font-bold">
              Secure Enclave Paradigms
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
              Sovereign Enclave Model
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Analyze the structural blueprint of nested mathematical and physical barriers protecting cross-border cloud computation.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-950 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400">
            <Lock className="h-4 w-4 text-cyan-400" />
            <span>ZERO-EXPOSURE ASSURANCE</span>
          </div>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="enclave-layer-grid">
          {enclaveLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
                id={`enclave-card-${layer.id}`}
              >
                {/* Decorative slide indicator */}
                <span className="absolute top-4 right-6 text-[10px] font-mono text-slate-600 font-extrabold pb-1">
                  SEC-0{index + 1}
                </span>

                <div className="space-y-6">
                  {/* Decorative glowing background on hover */}
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon and metadata */}
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-mono text-cyan-400 font-extrabold tracking-widest block uppercase">
                      {layer.phase}
                    </span>
                    <h3 className="text-xl font-bold font-sans text-white group-hover:text-purple-300 transition-colors">
                      {layer.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                {/* Subdetails List */}
                <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-[10px] font-mono text-slate-500">
                  {layer.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-cyan-400 rounded-full" />
                      <span className="text-slate-400 font-semibold uppercase">{detail}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

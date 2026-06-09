import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, MapPin, Navigation, Compass, ShieldAlert, Wifi, 
  Thermometer, UserCheck, ExternalLink, Play, Radio, ChevronRight, CheckSquare
} from 'lucide-react';

export default function DubaiEnvironment() {
  const [dubaiTime, setDubaiTime] = useState<string>('');
  const [dubaiDate, setDubaiDate] = useState<string>('');
  const [galleryTab, setGalleryTab] = useState<'all' | 'exterior' | 'interiors'>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateDubaiTime = () => {
      // Dubai is Gulf Standard Time (GST), which is UTC+4.
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const dubaiDateObj = new Date(utc + 3600000 * 4);
      
      let hours = dubaiDateObj.getHours();
      const minutes = dubaiDateObj.getMinutes();
      const seconds = dubaiDateObj.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minStr = minutes < 10 ? '0' + minutes : minutes;
      const secStr = seconds < 10 ? '0' + seconds : seconds;
      
      setDubaiTime(`${hours}:${minStr}:${secStr} ${ampm}`);
      
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      setDubaiDate(dubaiDateObj.toLocaleDateString('en-US', options));
    };

    updateDubaiTime();
    const timer = setInterval(updateDubaiTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Launch Google / Apple Map turn-by-turn routing in real time on the user's device
  const handleLaunchNavigation = () => {
    // Standard deep-link for turn-by-turn navigation or finding JW Marriott Marquis Hotel Dubai (25.1859° N, 55.2573° E)
    const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=JW+Marriott+Marquis+Hotel+Dubai";
    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  // Luxury high-res imagery matching the user's uploaded assets
  const mediaGallery = [
    {
      id: 'gallery-burj',
      title: 'Sovereign Heights (Burj Khalifa)',
      category: 'exterior',
      description: 'The majestic twilight skyline facing Business Bay, outlining the hyper-resilient engineering frameworks of the Gulf.',
      // Using the exact local image in the workspace uploaded by the user!
      src: '/src/assets/images/dubai_burj_khalifa_twilight_1780951098712.png',
      badge: 'VENUE SKYLINE',
      isImage: true
    },
    {
      id: 'gallery-pool',
      title: 'The Riviera Pool Chambers',
      category: 'exterior',
      description: 'A beautiful palm tree-lined oasis, framing private networking and bilateral security discussions underneath cloudless skies.',
      // High resolution Unsplash representing Image 3 (pool, palm trees, curved hotel Address exterior)
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=82',
      badge: 'DELEGATE CORRIDORS',
      isImage: true
    },
    {
      id: 'gallery-lobby',
      title: 'Grand Entrance & Revolving Gates',
      category: 'interiors',
      description: 'The entrance gates at Ground Zero, welcoming accredited plenipotentiaries across marble thresholds into highly secure sessions.',
      // High resolution hotel lobby entrance representing Image 4 (JW Marriott Marquis entrance mat level)
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=82',
      badge: 'JW MARRIOTT MARQUIS DUBAI',
      isImage: true
    },
    {
      id: 'gallery-video',
      title: 'Waterway Drone Navigation',
      category: 'exterior',
      description: 'Direct flyover sequence monitoring security lanes of the adjacent deep blue canals and architectural landmarks.',
      // Represents Video 1 (gorgeous clock tower waterway flyby loop). Excellent stock video loop or stylized card!
      src: 'https://assets.mixkit.co/videos/preview/mixkit-urban-skyline-at-night-with-traffic-41743-large.mp4',
      badge: 'UAV CHANNEL LIVEFEED',
      isImage: false,
      poster: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const filteredGallery = galleryTab === 'all' 
    ? mediaGallery 
    : mediaGallery.filter(item => item.category === galleryTab);

  return (
    <section className="relative overflow-hidden py-28 bg-slate-950 border-t border-b border-white/5" id="overview">
      {/* Visual cyber mesh overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="dubai-interactive-environment">
        
        {/* Core Header section split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16" id="dubai-header-layout">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold animate-pulse">
              ★ IMMERSIVE VENUE & REAL-TIME GPS TRACKER
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight uppercase leading-none">
              Resilient Sanctuary in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                The Capital of Innovation
              </span>
            </h2>
            <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              The Summit takes place within the high-security executive sectors of the world's tallest 5-star venue—<strong>JW Marriott Marquis Hotel Dubai</strong>—situated inside the Business Bay hub under sovereign digital safeguards.
            </p>
          </div>

          {/* Quick navigation control filter buttons */}
          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-2" id="gallery-controls">
            {(['all', 'exterior', 'interiors'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setGalleryTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  galleryTab === tab 
                    ? 'bg-purple-600/20 border-purple-500/30 text-white shadow-lg' 
                    : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {tab === 'all' ? 'All Channels' : tab === 'exterior' ? 'Sovereign Spaces' : 'VIP Interiors'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16" id="dubai-bento-grid">
          
          {/* Main Large Visual Card */}
          <div className="md:col-span-8 group relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden h-[28rem] flex flex-col justify-end p-8 transition-all hover:border-cyan-500/30 duration-500 shadow-2xl shadow-slate-950/50" id="bento-card-main">
            {/* The primary Twilight Burj Khalifa custom-loaded image */}
            <div className="absolute inset-0">
              <img 
                src="/src/assets/images/dubai_burj_khalifa_twilight_1780951098712.png" 
                alt="Dubai Burj Khalifa twilight view" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark dramatic photo wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            {/* Cyber lock and watermark metrics overlays */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-950/80 border border-cyan-500/20 px-3.5 py-1.5 rounded-xl text-[10px] font-mono text-cyan-400 backdrop-blur-md z-10 tracking-widest">
              <Compass className="h-3.5 w-3.5 animate-spin duration-5000" />
              <span>FACING SHEIKH ZAYED ROAD ZONE</span>
            </div>

            <div className="absolute top-6 right-6 text-right font-mono text-[9px] text-slate-500 z-10 uppercase select-none tracking-widest">
              SECURE-ZONE FEED: OK
            </div>

            {/* Title content details */}
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono font-bold text-cyan-400 block tracking-widest uppercase">
                ★ ARCHITECTURAL EXCELLENCE
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-sans text-white tracking-tight uppercase">
                Sovereign Canopy (Burj Khalifa Dusk)
              </h3>
              <p className="font-sans text-slate-300 text-xs md:text-sm max-w-xl leading-relaxed">
                Study the structural alignment of the metropolitan core as viewed directly from the executive hospitality pavilions of JW Marriott Marquis.
              </p>
            </div>
          </div>

          {/* Staggered Vertical Bento Item : Grand Entrance Door */}
          <div className="md:col-span-4 group relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden h-[28rem] flex flex-col justify-end p-6 transition-all hover:border-purple-500/30 duration-500 shadow-xl" id="bento-card-entrance">
            <div className="absolute inset-0">
              {/* Grand hotel lobby entrance (representing Image 4) */}
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=82" 
                alt="JW Marriott Marquis Dubai Entrance Gate" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            <div className="absolute top-5 left-5 bg-purple-950/90 border border-purple-500/30 px-3 py-1 rounded-lg text-[9px] font-mono text-purple-400 z-10 tracking-wider">
               accredited entrance only
            </div>

            {/* Content info */}
            <div className="relative z-10 space-y-1">
              <span className="text-[9px] font-mono font-bold text-purple-400 block tracking-wider uppercase">
                physical checkpoint
              </span>
              <h4 className="text-lg font-bold font-sans text-white tracking-tight uppercase">
                JW Marriott Marquis Entrance
              </h4>
              <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
                Secure credentials badge pick-up point situated at the main revolving access thresholds for the strategic summit.
              </p>
            </div>
          </div>

          {/* Staggered Bottom Bento Item : Waterway Deep drone clock tower video */}
          <div className="md:col-span-4 group relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden h-[22rem] flex flex-col justify-end p-6 transition-all hover:border-cyan-500/30 duration-500 shadow-xl" id="bento-card-waterway">
            <div className="absolute inset-0">
              {/* HTML5 video loop representing Image 1 (urban clock tower river view) */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500"
                poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-urban-skyline-at-night-with-traffic-41743-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/10" />
            </div>

            <div className="absolute top-5 left-5 bg-cyan-950/90 border border-cyan-500/30 px-2.5 py-1 rounded-lg text-[9px] font-mono text-cyan-400 z-10 tracking-widest uppercase flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-ping" />
              <span>LIVE CAM-9 FEED</span>
            </div>

            <div className="relative z-10 space-y-1">
              <span className="text-[9px] font-mono font-bold text-cyan-400 block tracking-wider uppercase">
                maritime drone sweeps
              </span>
              <h4 className="text-lg font-bold font-sans text-white tracking-tight uppercase">
                Canal-side Corridors
              </h4>
              <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
                Constant monitoring arrays surrounding the Dubai shipping lanes and adjacent deep canals, guaranteeing ultimate privacy.
              </p>
            </div>
          </div>

          {/* Staggered Bottom Bento Item : Luxury pool side garden */}
          <div className="md:col-span-4 group relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden h-[22rem] flex flex-col justify-end p-6 transition-all hover:border-purple-500/30 duration-500 shadow-xl" id="bento-card-pool">
            <div className="absolute inset-0">
              {/* Highres poolside palms (representing Image 3) */}
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=82" 
                alt="Luxury pool side and palm trees Address view" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            </div>

            <div className="absolute top-5 left-5 bg-purple-950/90 border border-purple-500/30 px-3 py-1 rounded-lg text-[9px] font-mono text-purple-400 z-10 tracking-wider">
              executive lounge
            </div>

            <div className="relative z-10 space-y-1">
              <span className="text-[9px] font-mono font-bold text-purple-400 block tracking-wider uppercase">
                exclusive networking
              </span>
              <h4 className="text-lg font-bold font-sans text-white tracking-tight uppercase">
                The Riviera Gardens
              </h4>
              <p className="font-sans text-slate-300 text-[11px] leading-relaxed">
                A private sanctuary with blue water decks and structured palm shade, reserved for unlogged bilateral policymaker dialogues.
              </p>
            </div>
          </div>

          {/* Vetting GPS Tracking and live direction waypoint card */}
          <div className="md:col-span-4 rounded-3xl bg-slate-950 border border-white/10 p-6 flex flex-col justify-between h-[22rem] relative overflow-hidden shadow-2xl group hover:border-cyan-500/30 transition-all duration-500" id="bento-card-gps">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 to-cyan-500" />
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">GPS WAYPOINT ENGINE</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 uppercase tracking-wider">
                  Signal: Locked
                </span>
              </div>

              {/* Real-time coordinates */}
              <div className="bg-slate-900 border border-white/5 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 text-[10px]">WGS-84 LATITUDE</span>
                  <span className="font-mono text-white font-bold tracking-wider">25.185906° N</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 text-[10px]">WGS-84 LONGITUDE</span>
                  <span className="font-mono text-white font-bold tracking-wider">55.257321° E</span>
                </div>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span>METICULOUS DESTINATION:</span>
                  <span className="font-sans font-black text-white">JW MARRIOTT MARQUIS</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-400 font-sans leading-relaxed">
                <p>
                  Clicking the button below instantly establishes real-time routing from your current physical device coordinates to the summit checkpoint.
                </p>
              </div>
            </div>

            {/* Launch Native Navigation Call-to-action */}
            <button
              onClick={handleLaunchNavigation}
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-95 shadow-lg shadow-purple-950/40 hover:shadow-cyan-500/10 cursor-pointer transition-all flex items-center justify-center gap-2"
              id="activate-gps-tracking-btn"
              title="Launch instant route planning to the hotel in Google Maps / iOS Maps"
            >
              <Navigation className="h-4 w-4 text-cyan-400 animate-bounce" />
              <span>Launch Device Routing</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Live console statistics banner block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm self-center" id="dubai-telemetry-strip">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Local Time</span>
            <span className="text-xl font-mono text-white block tracking-tight font-black">{dubaiTime || '12:00:00 PM'}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Average Climate</span>
            <span className="text-xl font-mono text-white block tracking-tight font-black">
              <Thermometer className="h-4 w-4 text-purple-400 inline-block mr-1 align-middle" />
              32.4°C / 90.3°F
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Vetting Access</span>
            <span className="text-xl font-mono text-cyan-400 block tracking-tight font-black">
              <UserCheck className="h-4 w-4 text-cyan-400 inline-block mr-1 align-middle" />
              VIP CREDENTIALS ONLY
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Secured Network</span>
            <span className="text-xl font-mono text-white block tracking-tight font-black">
              <Wifi className="h-4 w-4 text-teal-400 inline-block mr-1 align-top" />
              256-BIT ENCLAVE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

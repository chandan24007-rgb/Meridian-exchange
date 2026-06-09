/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Speaker, Roundtable, AgendaItem, StatCard, SponsorPackage } from './types.ts';

export const SPEAKERS: Speaker[] = [
  {
    id: 'antonio-rotondo',
    name: 'Antonio Rotondo',
    title: 'Chairman',
    organization: 'European-Emirati Business Council',
    linkedin: 'https://www.linkedin.com/in/antonio-rotondo-eebc-europeanemiratibusinesscouncil-ccirc-chamberofcommerce/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/antonio-rotondo.jpeg',
    bio: 'Antonio Rotondo is a prominent industry leader and cross-border strategist bridging elite European and UAE corporate and governmental interests. As the Chairman of the European-Emirati Business Council, his work centers on global regulatory compliance, international trade security, and building secure digital corridors. He advises leading technology concerns and policymakers on aligning investment with strict sovereignty frameworks.',
    quote: 'Direct policy dialogue is the bedrock upon which resilient, trust-based bilateral digital corridors are constructed.',
    session: 'Roundtable 4: Cloud Continuity & International Cooperation',
    topics: ['Bilateral data agreements', 'Cross-border investment', 'Regulatory alignment']
  },
  {
    id: 'amro-almashharawi',
    name: 'Amro Almashharawi',
    title: 'CEO',
    organization: 'Data Center Prime (DCP)',
    linkedin: 'https://www.linkedin.com/in/amrocoffeeman/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/amro-mashharawi.jpeg',
    bio: 'Amro Almashharawi is a visionary infrastructure pioneer and leader in scalable digital architectures. As CEO of Data Center Prime, he leads massive initiatives across the GCC to build high-availability Tier-4 data facility networks. His expertise sits at the nexus of ecological energy sourcing, advanced physical security containment, and multi-layered digital redundancies.',
    quote: 'Sovereign cloud is more than a policy statement; it is the physical and structural bedrock of secure national economies.',
    session: 'Roundtable 2: Infrastructure Resilience & Continuity',
    topics: ['Hyperscale facilities', 'Physical security infrastructure', 'Greentech grid design']
  },
  {
    id: 'jonathan-a-kwofie',
    name: 'Jonathan A Kwofie',
    title: 'Head of Cyber Security',
    organization: 'Dubai Financial Services Authority (DFSA)',
    linkedin: 'https://www.linkedin.com/in/jonathan-a-kwofie-25aa2414/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/jonathan-kwofie.jpeg',
    bio: 'Jonathan A Kwofie directs the overarching cybersecurity operations and critical regulatory policy for Dubai\'s premier international financial hub. Boasting decades of cyber defense and risk mitigation command, his strategic focus spans institutional compliance, post-quantum cryptography roadmaps for financial institutions, and hyper-collaborative incident response systems.',
    quote: 'Securing global capital markets means establishing absolute cryptographic resilience and absolute sovereign data custody.',
    session: 'Roundtable 3: Quantum Security & Cryptographic Transition',
    topics: ['Cryptographic transition lines', 'Financial data protections', 'Regulator-operator dynamics']
  },
  {
    id: 'dr-nader-m-ghazal',
    name: 'Dr. Nader M. Ghazal',
    title: 'Chairman',
    organization: 'African-Asian Council for AI & Cybersecurity (CAAAIC)',
    linkedin: 'https://www.linkedin.com/in/drnaderghazal/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/nader-ghazal.png',
    bio: 'Dr. Nader M. Ghazal is an international authority on artificial intelligence and cybersecurity policy across developing continents. Leading the CAAAIC, he acts as a trusted senior advisor to ministries and national authorities on implementing scalable AI architectures paired with stringent data residency safeguards.',
    quote: 'True digital sovereignty is achieved when artificial intelligence empowers local workforces without exporting local intelligence vaults.',
    session: 'Roundtable 1: Digital Sovereignty & Data Governance',
    topics: ['Sovereign AI models', 'African-Asian regional agreements', 'Ministers & Regulators strategies']
  },
  {
    id: 'muhammad-shafique',
    name: 'Muhammad Shafique',
    title: 'Professor of Electrical & Computer Engineering',
    organization: 'eBRAIN & iCAS Labs, NYU Abu Dhabi',
    linkedin: 'https://www.linkedin.com/in/mshafiquewahlah/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/muhammad-shafique.png',
    bio: 'Professor Muhammad Shafique directs the eBRAIN Lab and iCAS Lab at NYU Abu Dhabi, leading breakthrough research at the intersection of Neuromorphic Edge Computing, Silicon Security, and AI hardware resilience. His work prevents cyber attacks directly at the hardware layer, offering secure computing foundations for critical transport networks and medical devices.',
    quote: 'To survive in a post-quantum world, we must relocate security features into the very instruction sets of our microchips.',
    session: 'Roundtable 3: Quantum Security & Cryptographic Transition',
    topics: ['Neuromorphic edge security', 'Silicon layer hardware defense', 'Post-quantum algorithms']
  },
  {
    id: 'vijay-velayutham',
    name: 'Vijay Velayutham',
    title: 'Principal Information Security Officer',
    organization: 'Cyber Security Unit, MOEI (Ministry of Energy & Infrastructure)',
    linkedin: 'https://www.linkedin.com/in/v4vijay/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/vijay-velayutham.jpeg',
    bio: 'Vijay Velayutham plays a cornerstone role in defending the cyber posture of the UAE\'s national power grid, aviation routes, water reserves, and logistics grids. At the Cyber Security Unit of the Ministry of Energy and Infrastructure, he integrates proactive detection protocols with cross-sector kinetic resilience schemes.',
    quote: 'National operational continuity demands zero-trust modeling, secure supply chain validation, and proactive cross-sector mapping.',
    session: 'Roundtable 2: Infrastructure Resilience & Continuity',
    topics: ['Critical utility hardening', 'Industrial Control Systems (ICS)', 'Supply chain vulnerability models']
  },
  {
    id: 'dr-arianna-mazzeo',
    name: 'Dr. Arianna Mazzeo',
    title: 'Professor, School of Communication & Creative Industries',
    organization: 'Canadian University Dubai',
    linkedin: 'https://www.linkedin.com/in/ariana-v-kok-barcenas-mazzeo-00197867/?locale=en',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/arianna-mazzeo.jpeg',
    bio: 'Dr. Arianna Mazzeo is a distinguished transdisciplinary design researcher and educator focused on the social impact of technological change. Operating out of Canadian University Dubai, her scholarly work examines how sovereignty frameworks affect digital ethics, media education, and collaborative civil design.',
    quote: 'Sovereignty cannot reside in server towers alone; it begins with digital literacy, ethical design, and human collaboration.',
    session: 'Roundtable 1: Digital Sovereignty & Data Governance',
    topics: ['Transdisciplinary policy co-design', 'Human-centered data systems', 'Ethics in digital media']
  },
  {
    id: 'heide-young',
    name: 'Heide Young',
    title: 'Manager Cyber Strategy & Engagement',
    organization: 'NEOM',
    linkedin: 'https://www.linkedin.com/in/heideyoung/',
    avatarUrl: 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/heide-young.jpg',
    bio: 'Heide Young drives cyber-risk strategy, technical engagement, and multi-lateral compliance frameworks for NEOM, the world\'s most ambitious cognitive and sovereign city project. She specializes in cognitive cloud security guidelines, zero-latency sensor array protections, and aligning legacy telecom layers with future AI orchestrators.',
    quote: 'Designing cognitive city shields means treating security not as an perimeter wall, but as a living, self-healing nervous system.',
    session: 'Roundtable 2: Infrastructure Resilience & Continuity',
    topics: ['Cognitive smart-city governance', 'Autonomous system protocols', 'Multi-tenant infrastructure shields']
  }
];

export const ROUNDTABLES: Roundtable[] = [
  {
    number: 1,
    title: 'Digital Sovereignty & Data Governance',
    subtitle: 'How should nations define and protect sovereign data assets in an era of distributed cloud infrastructure?',
    discussionAreas: [
      'National data classification frameworks',
      'Sovereign cloud requirements and certification',
      'Cross-border data flow agreements',
      'Digital asset protection during geopolitical disruption'
    ],
    imageType: 'cyber'
  },
  {
    number: 2,
    title: 'Infrastructure Resilience & Continuity',
    subtitle: 'What does true operational continuity look like when physical infrastructure, connectivity, and personnel face simultaneous pressure?',
    discussionAreas: [
      'Multi-layered redundancy beyond traditional DR',
      'Supply chain resilience for critical infrastructure',
      'Workforce continuity under sustained disruption',
      'Cross-sector dependency mapping'
    ],
    imageType: 'infrastructure'
  },
  {
    number: 3,
    title: 'Quantum Security & Cryptographic Transition',
    subtitle: 'How should governments and operators prepare cryptographic infrastructure for the post-quantum era?',
    discussionAreas: [
      'Post-quantum cryptography migration timelines',
      'Harvest-now-decrypt-later threat assessment',
      'National quantum-readiness frameworks',
      'Standards harmonisation across jurisdictions'
    ],
    imageType: 'quantum'
  },
  {
    number: 4,
    title: 'Cloud Continuity & International Cooperation',
    subtitle: 'What frameworks are needed to ensure sovereign access to cloud services during periods of geopolitical instability?',
    discussionAreas: [
      'Bilateral and multilateral data agreements',
      'Emergency access protocols for critical services',
      'Hyperscaler governance and accountability',
      'Regional infrastructure cooperation models'
    ],
    imageType: 'cloud'
  }
];

export const CORE_THEMES = [
  {
    id: 'theme-1',
    title: 'Digital Sovereignty',
    description: 'National control over critical data assets, cloud infrastructure, and digital services.'
  },
  {
    id: 'theme-2',
    title: 'Infrastructure Resilience',
    description: 'Ensuring continuity of operations when physical and digital systems face simultaneous pressure.'
  },
  {
    id: 'theme-3',
    title: 'Quantum Security',
    description: 'Preparing cryptographic infrastructure for the post-quantum era.'
  },
  {
    id: 'theme-4',
    title: 'Cloud Continuity',
    description: 'Maintaining sovereign access to cloud services during periods of geopolitical disruption.'
  },
  {
    id: 'theme-5',
    title: 'International Cooperation',
    description: 'Frameworks for cross-border data governance and mutual infrastructure support.'
  },
  {
    id: 'theme-6',
    title: 'Critical Infrastructure',
    description: 'Protecting essential services from cascading failures across interconnected systems.'
  }
];

export const THE_CONVERGING_FORCES = [
  {
    id: 'force-1',
    number: '01',
    title: 'Geopolitical Risk',
    description: 'Escalating tensions between major powers are creating new risks for cross-border data flows, cloud service continuity, and infrastructure access. Nations can no longer assume uninterrupted access to digital services hosted in foreign jurisdictions.'
  },
  {
    id: 'force-2',
    number: '02',
    title: 'Infrastructure Dependency',
    description: 'Critical national services increasingly depend on concentrated infrastructure — hyperscale cloud, submarine cables, and centralised data centres. A single point of failure can cascade across entire economies.'
  },
  {
    id: 'force-3',
    number: '03',
    title: 'Digital Sovereignty',
    description: 'Governments are accelerating efforts to establish sovereign control over data, infrastructure, and digital services. The regulatory and operational frameworks for this transition remain undefined.'
  }
];

export const AGENDA: AgendaItem[] = [
  { time: '08:00 - 09:00', title: 'Arrival & Registration', description: 'VIP Badge Collection, Morning Arabic Coffee & Networking' },
  { time: '09:00 - 09:15', title: 'Opening Remarks & Keynote Briefing', description: 'The state of digital sovereignty and future cyber defense', isHighlight: true },
  { time: '09:15 - 11:15', title: 'Strategic Roundtable Session I (RT 1 & RT 2)', description: 'Chatham House discussions in separated executive suites.' },
  { time: '11:15 - 11:30', title: 'Coffee & Direct Dialogue Recess', description: 'Structured networking between partners and regulators' },
  { time: '11:30 - 13:30', title: 'Strategic Roundtable Session II (RT 3 & RT 4)', description: 'Technical-to-policy cryptographic audits and international alignment.' },
  { time: '13:30 - 14:30', title: 'Three-Course Working Luncheon', description: 'Gourmet culinary experience at the JW Marriott Marina, Dubai', isHighlight: true },
  { time: '14:30 - 15:30', title: 'Policy Discussions & Co-Authorship Mapping', description: 'Establishing critical frameworks based on morning findings.' },
  { time: '15:30 - 16:30', title: 'White Paper Outcomes', description: 'Review and validation of the drafted national guidelines', isHighlight: true },
  { time: '16:30 - 18:00', title: 'Meridian Dialogue Reception', description: 'Elite sunset networking over overlooking the Dubai Marina' }
];

export const STATS: StatCard[] = [
  { value: '120-150', label: 'Senior Delegates', description: 'Limited exclusive attendance of core decision makers' },
  { value: '4', label: 'Strategic Roundtables', description: 'Focused, interactive working dialogues' },
  { value: '1', label: 'White Paper Outcome', description: 'Actionable policy blueprint co-published by attendees' },
  { value: 'Only', label: 'Invitation Only', description: 'Secured solely for C-Suite and Government leadership' }
];

export const MARKETING_CAMPAIGN = [
  { id: 'm-1', value: '+10,000', label: 'Website Views', description: 'Combined monthly high-intent traffic' },
  { id: 'm-2', value: '+2,000', label: 'Video Promotion', description: 'Direct dynamic video asset plays' },
  { id: 'm-3', value: '+5,000', label: 'Newsletter', description: 'Active core cybersecurity subscribers' },
  { id: 'm-4', value: '+100,000', label: 'Google Display Network', description: 'Impressions targeting key stakeholders' },
  { id: 'm-5', value: '+500', label: 'Telesales Outreach', description: 'Customized direct client invitations' },
  { id: 'm-6', value: '+250,000', label: 'Email Reach', description: 'Highly-filtered database broadcast' },
  { id: 'm-7', value: '+2', label: 'Press Releases', description: 'GCC-Wide distribution across wire' },
  { id: 'm-8', value: '+100,000', label: 'Social Media Paid', description: 'Impressions across LinkedIn & strategic channels' }
];

export const SPONSORS: SponsorPackage[] = [
  {
    level: 'Founding Partner',
    title: 'Founding Policy Partner',
    description: 'The highest tier of participation, establishing foundational policy footprint and thought leadership.',
    benefits: [
      'Co-authorship status on the final White Paper Outcomes document',
      'Roundtable co-leadership of a chosen key discussion theme',
      'Strategic full logo visibility across main entrance and digital stages',
      '4 premium passes for C-Level executives',
      'Exclusive panel participation during the policy synthesis session'
    ],
    gradient: 'from-purple-900 via-indigo-950 to-slate-900 border-purple-500/50',
    textColor: 'text-purple-300'
  },
  {
    level: 'Strategic Partner',
    title: 'Strategic Policy Partner',
    description: 'Active contribution to roundtable dialogs with direct access to national and ministerial policy creators.',
    benefits: [
      'Official contributor recognition in final White Paper publication',
      'Strategic presence on all discussion modules and digital frames',
      '2 premium VIP delegation passes',
      'Direct engagement with ministerial and cybersecurity regulators',
      'Tailored branding integration in select session highlights'
    ],
    gradient: 'from-violet-950/80 to-slate-900 border-violet-500/30',
    textColor: 'text-violet-300'
  },
  {
    level: 'Supporting Partner',
    title: 'Sovereign Infrastructure Partner',
    description: 'Ideal for tech providers looking to anchor their presence inside sovereign ecosystems.',
    benefits: [
      'Corporate visibility on our main digital display matrix',
      'Active participation seats in roundtables matching core domain',
      '1 premium delegation pass',
      'Access to full event delegate networking directory',
      'Branding in the digital conference workbook'
    ],
    gradient: 'from-slate-900 via-slate-900/40 to-slate-950 border-slate-700/50',
    textColor: 'text-slate-300'
  },
  {
    level: 'Reception Partner',
    title: 'Dialogue Reception Partner',
    description: 'Sole host of the high-prestige sunset networking cocktail hour overlooking Dubai Marina.',
    benefits: [
      'Exclusive hosting rights & naming of Sunday\'s ending reception',
      'Sponsor address & remarks opening the sunset event',
      'High-impact custom branding throughout reception zone',
      '2 premium VIP delegate passes',
      'Dedicated digital featurette in post-event wrap newsletters'
    ],
    gradient: 'from-indigo-950/90 to-purple-950/50 border-cyan-500/40',
    textColor: 'text-cyan-300'
  }
];

export const STAKEHOLDER_MATRIX = {
  government: [
    'Ministries of Digital Economy',
    'National Cybersecurity Authorities',
    'Telecommunications & Digital Gov Regulators',
    'Foreign Affairs & Sovereign Security Agencies',
    'Federal Security Council Delegations'
  ],
  industry: [
    'Hyperscaler Cloud Security Providers',
    'National Telecommunication Operators',
    'Critical Data Centre Operators',
    'Sovereign Cloud & Virtualization Providers',
    'Quantum cryptography research houses & tech vendors'
  ],
  investment: [
    'Sovereign Wealth Funds (SWF)',
    'Critical Infrastructure Investors',
    'Development Finance Institutions',
    'Private Equity specializing in digital assets & cybersecurity'
  ],
  advisory: [
    'International Corporate & Tech Law Jurisdictions',
    'Global Security & Risk Advisory Consultancies',
    'Sovereign Risk Research Advisors',
    'Regulatory Compliance & Cybersecurity Standard Bureaus'
  ]
};

export const SENIORITY_LEVELS = [
  'Ministers', 'His Excellencies', 'Government Authorities', 'Director Generals', 
  'C-Level Executives', 'Managing Directors', 'SVPs & VPs', 'Department Heads', 'Senior Policy Managers'
];

export const ORG_REPRESENTATION = [
  'Government & Regulatory', 'Cybersecurity Authorities', 'Central Banks', 'Foreign Affairs Ministries', 
  'Cloud Providers', 'Hyperscalers', 'Data Centre Operators', 'Quantum Security Vendors', 
  'Sovereign Wealth Funds', 'Law Firms', 'Consulting Firms', 'Diplomatic Missions'
];

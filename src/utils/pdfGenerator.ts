/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from 'jspdf';

/**
 * Programmatically generates a highly polished, presentation-grade multi-page PDF brochure matching
 * the physical brand parameters of Zenith Nexus's Meridian Exchange 2.0 (Page 1 through 17).
 */
export async function downloadBrochurePDF() {
  // Create landscape A4 PDF document (297mm width x 210mm height)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;

  // Let's load the Zenith Nexus logo image in base64 if possible
  // We'll use a reliable fallback to draw a high-fidelity vector representation if loading takes too long
  let logoBase64: string | null = null;
  try {
    const logoUrl = 'https://mohammedmalikraihan.github.io/meridian-exchange2.0/images/Zenith%20Nexus%20Logo.png';
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = logoUrl;
    await new Promise((resolve, reject) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          logoBase64 = canvas.toDataURL('image/png');
        }
        resolve(null);
      };
      img.onerror = () => {
        // Suppress and fallback gracefully
        resolve(null);
      };
      // Set short timeout
      setTimeout(() => resolve(null), 1500);
    });
  } catch (err) {
    console.warn('Could not pre-render logo base64, falling back to graphics', err);
  }

  // --- STYLE COLOR PALETTE (Prism Midnight theme) ---
  const colors = {
    bgDark: { r: 5, g: 2, b: 14 },        // #05020e - ultra deep violet black
    bgCard: { r: 15, g: 11, b: 28 },      // #0f0b1c - midnight purple
    textLight: { r: 255, g: 255, b: 255 },// white
    textDim: { r: 200, g: 201, b: 214 },  // slate light
    textMuted: { r: 110, g: 112, b: 135 },// muted slate
    primary: { r: 168, g: 85, b: 247 },   // purple-500
    cyan: { r: 34, g: 211, b: 238 },      // cyan-400
    gold: { r: 245, g: 158, b: 11 },       // amber-500
    red: { r: 239, g: 68, b: 68 },        // red-500
  };

  // Helper: Draw standard background on content slides
  const drawSlideFrame = (title: string, subtitle: string, pageNum: number) => {
    // Fill overall background
    doc.setFillColor(colors.bgDark.r, colors.bgDark.g, colors.bgDark.b);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Drawing premium high-tech grid points & lines (horizontal/vertical lines)
    doc.setDrawColor(20, 15, 35);
    doc.setLineWidth(0.15);
    // Grid lines
    for (let x = 0; x < pageWidth; x += 15) {
      doc.line(x, 0, x, pageHeight);
    }
    for (let y = 0; y < pageHeight; y += 15) {
      doc.line(0, y, pageWidth, y);
    }

    // Top Header Banner line
    doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.setLineWidth(0.4);
    doc.line(15, 25, pageWidth - 15, 25);

    // Decorative side shapes
    doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.rect(15, 12, 1.5, 9, 'F');

    // Top Left Headers
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.text('ZENITH NEXUS', 18, 15);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
    doc.text('MERIDIAN EXCHANGE: STRATEGIC POLICY FORUM 2026', 18, 19);

    // Slide specific title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(title.toUpperCase(), 15, 34);

    // Slide specific subtitle
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.text(subtitle, 15, 39);

    // Footer lines and content
    doc.setDrawColor(15, 11, 28);
    doc.setLineWidth(0.2);
    doc.line(15, pageHeight - 16, pageWidth - 15, pageHeight - 16);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
    doc.text('© 2026 MERIDIAN EXCHANGE COVENANT • CHATHAM HOUSE RULE', 15, pageHeight - 10);
    doc.text(`PAGE ${pageNum} / 9`, pageWidth - 32, pageHeight - 10);

    // Render original Zenith Logo in footer corner
    if (logoBase64) {
      try {
        doc.addImage(logoBase64, 'PNG', pageWidth - 30, 8, 15, 11);
      } catch (e) {
        // Silently catch template issues
      }
    } else {
      // Manual vector shape logo fallback
      doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
      doc.setLineWidth(0.4);
      doc.line(pageWidth - 28, 10, pageWidth - 23, 10);
      doc.line(pageWidth - 23, 10, pageWidth - 25, 15);
      doc.line(pageWidth - 25, 15, pageWidth - 28, 10);
    }
  };

  // ==========================================
  // PAGE 1: DECORATIVE BROCHURE COVER
  // ==========================================
  doc.setFillColor(colors.bgDark.r, colors.bgDark.g, colors.bgDark.b);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Draw cyber decorative grids on cover
  doc.setDrawColor(30, 10, 50);
  doc.setLineWidth(0.2);
  for (let r = 50; r < 240; r += 20) {
    doc.ellipse(pageWidth / 2, pageHeight / 2, r, r * 0.6);
  }

  // Cover Core branding Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
  doc.text('Z EN I T H   N E X U S   P R E S E N T S', pageWidth / 2, 45, { align: 'center' });

  // Main banner Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
  doc.text('MERIDIAN EXCHANGE', pageWidth / 2, 70, { align: 'center' });

  // Sub-title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(16);
  doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.text('Digital Sovereignty Resilience', pageWidth / 2, 82, { align: 'center' });

  // Event telemetry ribbon box
  doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
  doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.setLineWidth(0.3);
  doc.rect(40, 95, pageWidth - 80, 22, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
  doc.text('8 SEPTEMBER 2026   |   JW MARRIOTT MARINA, DUBAI, UAE', pageWidth / 2, 104, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
  doc.text('A Closed-Door Summit on Sovereign Digital Infrastructure, High-Value Cryptographic Transition & Critical Asset Protections', pageWidth / 2, 111, { align: 'center' });

  // Big quote in cover
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
  const coverQuote = '"The continuity question is no longer whether systems can be recovered. It is whether critical services can continue operating when infrastructure, connectivity, operations, and personnel are all under pressure simultaneously."';
  doc.text(coverQuote, 45, 138, { maxWidth: pageWidth - 90, align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
  doc.text('RESILIENCE IN THE ERA OF GEOPOLITICAL RISK  •  INVITATION ONLY', pageWidth / 2, 155, { align: 'center' });

  // Cover Footer
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', pageWidth / 2 - 12, 168, 24, 18);
    } catch (e) {
      // Silently catch logo exceptions
    }
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
  doc.text('CORPORATE NEXUS DIRECTIVE 2026', pageWidth / 2, 192, { align: 'center' });


  // ==========================================
  // PAGE 2: FORUM OVERVIEW
  // ==========================================
  doc.addPage();
  drawSlideFrame('Forum Overview', 'A working forum for policy and infrastructure leaders', 2);

  // Left Column (Details)
  doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
  doc.rect(15, 48, 140, 122, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
  doc.text('EXECUTIVE COMMISSION BRIEF', 22, 58);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
  const overviewP1 = 'Meridian Exchange has been established as a closed-door policy and industry forum focused on digital resilience, sovereign data governance, and future infrastructure security.';
  const overviewP2 = 'The event brings together stakeholders responsible for policy, infrastructure, regulation, investment, cybersecurity, and operations.';
  const overviewP3 = 'Unlike a traditional conference, Meridian Exchange is structured around working roundtables designed to encourage direct participation, peer-to-peer verification, and practical actionable outcomes.';
  doc.text(overviewP1, 22, 68, { maxWidth: 126 });
  doc.text(overviewP2, 22, 92, { maxWidth: 126 });
  doc.text(overviewP3, 22, 112, { maxWidth: 126 });

  // Quote on bottom left of page 2
  doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.setLineWidth(0.6);
  doc.line(22, 138, 22, 158);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.text('"National control over critical data assets, cloud infrastructure and digital services is no longer a luxury—it is the cornerstone of geopolitical survival."', 26, 144, { maxWidth: 120 });

  // Right Column Metrics Bento-Grid
  const drawMetricBox = (x: number, y: number, w: number, h: number, val: string, label: string, desc: string) => {
    doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
    doc.rect(x, y, w, h, 'F');
    doc.setDrawColor(25, 20, 45);
    doc.rect(x, y, w, h, 'D');

    // Accent line
    doc.setFillColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.rect(x, y, w, 1, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(val, x + 8, y + 14);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.text(label.toUpperCase(), x + 8, y + 22);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
    doc.text(desc, x + 8, y + 29, { maxWidth: w - 16 });
  };

  drawMetricBox(165, 48, 55, 38, '120-150', 'Senior Delegates', 'Elite ministries, regulators, cybersecurity giants & SWF investment actors.');
  drawMetricBox(227, 48, 55, 38, '4', 'Roundtables', 'Highly focused interactive work tables mapping technical sovereignty.');
  drawMetricBox(165, 93, 55, 38, '1', 'White Paper', 'Direct, actionable policy and technical deployment blueprint co-published.');
  drawMetricBox(227, 93, 55, 38, 'INVITE ONLY', 'Delegation Security', 'Chatham House secure rules active globally throughout all chambers.');

  // Bottom format banner
  doc.setFillColor(15, 11, 28);
  doc.rect(165, 138, 117, 32, 'F');
  doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.rect(165, 138, 117, 32, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.text('EVENT FORMAT STRATEGY', 171, 145);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
  doc.text('• Strictly Invitation Only\n• English with Arabic Interpretation Provided\n• Closed-Door Session, No Press / Media Permitted', 171, 151, { lineHeightFactor: 1.3 });


  // ==========================================
  // PAGE 3: THREE CONVERGING FORCES
  // ==========================================
  doc.addPage();
  drawSlideFrame('Why Now?', 'Three convergence forces fueling sovereign demands', 3);

  const drawForceCard = (x: number, num: string, title: string, desc: string, index: number) => {
    // Background and border
    doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
    doc.rect(x, 48, 85, 122, 'F');
    doc.setDrawColor(25, 20, 45);
    doc.rect(x, 48, 85, 122, 'D');

    // Accent header banner
    doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.rect(x, 48, 85, 1.5, 'F');

    // Huge Number
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.text(num, x + 8, 68);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(title.toUpperCase(), x + 8, 79);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
    doc.text(desc, x + 8, 89, { maxWidth: 69, lineHeightFactor: 1.35 });

    // Stream info
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
    doc.text(`AUDIT STREAM: ME-FORCES-0${index}`, x + 8, 158);
  };

  const force1Desc = 'Escalating tensions between major powers are creating new risks for cross-border data flows, cloud service continuity, and infrastructure access. Nations can no longer assume uninterrupted access to digital services hosted in foreign jurisdictions.';
  const force2Desc = 'Critical national services increasingly depend on concentrated infrastructure — hyperscale cloud, submarine cables, and centralised data centres. A single point of failure can cascade across entire economies.';
  const force3Desc = 'Governments are accelerating efforts to establish sovereign control over data, infrastructure, and digital services. The regulatory and operational frameworks for this transition remain undefined.';

  drawForceCard(15, '01', 'Geopolitical Risk', force1Desc, 1);
  drawForceCard(106, '02', 'Infrastructure Dependency', force2Desc, 2);
  drawForceCard(197, '03', 'Digital Sovereignty', force3Desc, 3);


  // ==========================================
  // PAGE 4: CORE DISCUSSION THEMES
  // ==========================================
  doc.addPage();
  drawSlideFrame('Discussion Framework', 'Core Discussion Themes formulating roundtable objectives', 4);

  const drawThemeBox = (x: number, y: number, w: number, h: number, title: string, desc: string) => {
    doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
    doc.rect(x, y, w, h, 'F');
    doc.setDrawColor(25, 20, 40);
    doc.rect(x, y, w, h, 'D');

    // Vector bullet
    doc.setFillColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.rect(x + 6, y + 7, 2, 2, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(title.toUpperCase(), x + 12, 10);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
    doc.text(desc, x + 6, 17, { maxWidth: w - 12, lineHeightFactor: 1.25 });
  };

  // 2 rows x 3 columns grid
  drawThemeBox(15, 48, 85, 54, 'Digital Sovereignty', 'National control over critical data assets, cloud infrastructure, and digital services.');
  drawThemeBox(106, 48, 85, 54, 'Infrastructure Resilience', 'Ensuring continuity of operations when physical and digital systems face simultaneous pressure.');
  drawThemeBox(197, 48, 85, 54, 'Quantum Security', 'Preparing cryptographic infrastructure and migration timelines for the post-quantum era.');
  
  drawThemeBox(15, 108, 85, 54, 'Cloud Continuity', 'Maintaining sovereign, uninterrupted access to cloud services during periods of intense geopolitical disruption.');
  drawThemeBox(106, 108, 85, 54, 'International Cooperation', 'Frameworks for cross-border data governance, cross-jurisdictional compliance, and mutual infrastructure support.');
  drawThemeBox(197, 108, 85, 54, 'Critical Infrastructure', 'Protecting essential utility transport services from cascading tech failures across interconnected systems.');


  // ==========================================
  // PAGE 5: EVENT PROGRAMME
  // ==========================================
  doc.addPage();
  drawSlideFrame('Event Programme', 'The Strategic Journey timeline of the forum', 5);

  // Left Section Timeline lines
  doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.setLineWidth(0.6);
  doc.line(25, 54, 25, 162);

  const formatTimelineItem = (y: number, time: string, title: string, hasBullet = true) => {
    if (hasBullet) {
      doc.setFillColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
      doc.circle(25, y, 1.8, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.text(time, 32, y + 1);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(title, 64, y + 1);
  };

  const timelineItems = [
    { time: '08:00 - 09:00', title: 'Arrival & Registration (VIP Badge Collection & Arabic Coffee)' },
    { time: '09:00 - 09:15', title: 'Opening Remarks & Strategic Sovereign Keynote Briefing' },
    { time: '09:15 - 11:15', title: 'Strategic Roundtable Session I (Roundtables 1 & 2)' },
    { time: '11:15 - 11:30', title: 'Coffee & Direct Policy Dialogue Recess' },
    { time: '11:30 - 13:30', title: 'Strategic Roundtable Session II (Roundtables 3 & 4)' },
    { time: '13:30 - 14:30', title: 'Three-Course Gourmet Working Luncheon' },
    { time: '14:30 - 15:30', title: 'Policy Discussions & Tactical Co-Authorship Mapping' },
    { time: '15:30 - 16:30', title: 'White Paper Outcomes & Regional Guidelines Review' },
    { time: '16:30 - 18:00', title: 'Meridian Dialogue Sunset Reception' },
  ];

  let currentY = 54;
  timelineItems.forEach((item) => {
    formatTimelineItem(currentY, item.time, item.title);
    currentY += 13;
  });

  // Right summary information
  doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
  doc.rect(210, 48, 72, 114, 'F');
  doc.setDrawColor(25, 20, 40);
  doc.rect(210, 48, 72, 114, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.text('FOR STRUCTURAL REASONS:', 216, 58);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
  const agendaFormats = 'All sessions follow strict Chatham House Rule protocols. Delegates are assigned individual secure workrooms to isolate intellectual properties. Attendance registers are heavily reviewed by our alignment committee to prevent conflict representation.';
  doc.text(agendaFormats, 216, 64, { maxWidth: 60, lineHeightFactor: 1.35 });


  // ==========================================
  // PAGE 6: THE ROUNDTABLES IN DETAIL
  // ==========================================
  doc.addPage();
  drawSlideFrame('Strategic Roundtables', 'The core working objectives (Roundtables 1 - 4)', 6);

  const drawRoundtableDetailBox = (x: number, y: number, num: string, title: string, bulletItems: string[]) => {
    // Background card
    doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
    doc.rect(x, y, 128, 54, 'F');
    doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.setLineWidth(0.2);
    doc.rect(x, y, 128, 54, 'D');

    // Number bullet
    doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.rect(x, y, 18, 12, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(`RT0${num}`, x + 4, y + 8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.text(title.toUpperCase(), x + 22, y + 8);

    // Bullet highlights
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);
    
    let bulletY = y + 17;
    bulletItems.forEach((b) => {
      doc.setFillColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
      doc.circle(x + 6, bulletY - 1, 0.7, 'F');
      doc.text(b, x + 12, bulletY, { maxWidth: 112 });
      bulletY += 8.5;
    });
  };

  drawRoundtableDetailBox(15, 48, '1', 'Digital Sovereignty & Governance', [
    'National data classification standards & residency frameworks.',
    'Sovereign cloud operational requirements & certification guidelines.',
    'Bilateral cross-border data transfer agreements.',
    'Digital asset shielding schemes during geopolitical disruptions.'
  ]);

  drawRoundtableDetailBox(154, 48, '2', 'Infrastructure Resilience & Continuity', [
    'Multi-layered facility redundancy beyond standard DR.',
    'Supply chain vulnerabilities tracking for physical telecoms.',
    'Workforce containment schemes under emergency disruptions.',
    'Cross-sector system dependency and cascade mappings.'
  ]);

  drawRoundtableDetailBox(15, 108, '3', 'Quantum & Cryptographic Transition', [
    'Operational post-quantum cryptography transition models.',
    '"Harvest Now, Decrypt Later" threat index assessment.',
    'National quantum-readiness validation frameworks.',
    'Inter-governmental cryptographic code harmonisation.'
  ]);

  drawRoundtableDetailBox(154, 108, '4', 'Cloud Continuity & Cooperation', [
    'Multi-national and bilateral digital data preservation coven.',
    'Emergency sovereign remote-cloud hosting access protocols.',
    'Hyperscaler audit accountability frameworks.',
    'Regional cloud-node cluster mesh configurations.'
  ]);


  // ==========================================
  // PAGE 7: EXECUTIVE STAKEHOLDER MATRIX
  // ==========================================
  doc.addPage();
  drawSlideFrame('Executive Stakeholder Matrix', 'Authorized institutional groupings and eligibility directories', 7);

  const drawMatrixGroup = (x: number, y: number, title: string, items: string[], accentCol: { r: number, g: number, b: number }) => {
    doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
    doc.rect(x, y, 62, 114, 'F');
    doc.setDrawColor(25, 20, 45);
    doc.rect(x, y, 62, 114, 'D');

    // Header strip
    doc.setFillColor(accentCol.r, accentCol.g, accentCol.b);
    doc.rect(x, y, 62, 10, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(title.toUpperCase(), x + 5, y + 6.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);

    let itemY = y + 17;
    items.forEach((it) => {
      doc.setFillColor(accentCol.r, accentCol.g, accentCol.b);
      doc.rect(x + 5, itemY - 2, 1.5, 5, 'F');
      doc.text(it, x + 10, itemY, { maxWidth: 48, lineHeightFactor: 1.15 });
      itemY += 18.5;
    });
  };

  const govItems = ['Ministries of Digital Economy', 'National Cybersecurity Authorities', 'Telecommunications Regulators', 'Foreign Affairs Departments', 'Federal Security Councils'];
  const indItems = ['Hyperscaler Cloud Security Teams', 'Telecom Carriers & Backbones', 'Critical Facility Operators', 'Sovereign Cloud Operators', 'Quantum Encryption Labs'];
  const invItems = ['Sovereign Wealth Funds (SWF)', 'Infrastructure Development Banks', 'Digital Asset Private Equity Units', 'National Security Finance Bureaus', 'Strategic Venture Operations'];
  const advItems = ['International Technology Lawyers', 'Geopolitical Risk Advisories', 'Critical Operations Evaluators', 'Federal Compliance Assessors', 'Sovereignty Standards Boards'];

  drawMatrixGroup(15, 48, '01 Government', govItems, colors.cyan);
  drawMatrixGroup(83, 48, '02 Industry', indItems, colors.primary);
  drawMatrixGroup(151, 48, '03 Investment', invItems, colors.gold);
  drawMatrixGroup(219, 48, '04 Advisory', advItems, colors.red);


  // ==========================================
  // PAGE 8: PARTNERSHIP STREAMS
  // ==========================================
  doc.addPage();
  drawSlideFrame('Partnership & Sponsorship', 'Strategic engagement tiers and visibility opportunities', 8);

  const drawSponsorCardPDF = (x: number, y: number, w: number, tier: string, subtitle: string, points: string[]) => {
    doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
    doc.rect(x, y, w, 114, 'F');
    doc.setDrawColor(25, 20, 45);
    doc.rect(x, y, w, 114, 'D');

    doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.rect(x, y, w, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(tier, x + 6, y + 10);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
    doc.text(subtitle, x + 6, y + 15);

    // Divider
    doc.setDrawColor(32, 26, 52);
    doc.line(x + 6, y + 19, x + w - 6, y + 19);

    // Points
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(colors.textDim.r, colors.textDim.g, colors.textDim.b);

    let ptY = y + 26;
    points.forEach((pt) => {
      doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
      doc.rect(x + 6, ptY - 1.5, 1.5, 1.5, 'F');
      doc.text(pt, x + 11, ptY, { maxWidth: w - 18, lineHeightFactor: 1.25 });
      ptY += 17;
    });
  };

  drawSponsorCardPDF(15, 48, 63, 'Founding Partner', 'Policy Frame Builder', [
    'Full co-authorship on final White Paper Outcomes.',
    'Roundtable co-leadership of chosen key theme.',
    'Full strategic visual branding across digital & print.',
    '4 C-Suite delegation passes.'
  ]);

  drawSponsorCardPDF(83, 48, 63, 'Strategic Partner', 'Bilateral Coordinator', [
    'Credited contributor listing in final outcomes paper.',
    'Logo integration in roundtable workspaces.',
    'Direct coordination with ministerial elements.',
    '2 premium delegation passes.'
  ]);

  drawSponsorCardPDF(151, 48, 63, 'Supporting Partner', 'Infrastructure Pioneer', [
    'High corporate display brand visibility.',
    'Direct roundtable active seats matching domain.',
    'Full access to attendee networking records.',
    '1 premium summit access pass.'
  ]);

  drawSponsorCardPDF(219, 48, 63, 'Reception Partner', 'Sunset Reception Host', [
    'Exclusive full hosting of sunset cocktail hour.',
    'Executive opening address during reception.',
    'Premium custom branding in networking zones.',
    '2 delegation passes.'
  ]);


  // ==========================================
  // PAGE 9: CONTACTS & ACKNOWLEDGEMENTS (BACK COVER)
  // ==========================================
  doc.addPage();
  doc.setFillColor(colors.bgDark.r, colors.bgDark.g, colors.bgDark.b);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Draw giant logo in the center back
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', pageWidth / 2 - 25, 42, 50, 38);
    } catch (e) {}
  }

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
  doc.text('"Resilient digital economies require resilient digital infrastructure."', pageWidth / 2, 94, { align: 'center', maxWidth: pageWidth - 60 });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
  doc.text('MERIDIAN EXCHANGE EXECUTIVE OFFICE', pageWidth / 2, 116, { align: 'center' });

  // Direct coordinator info
  doc.setFillColor(colors.bgCard.r, colors.bgCard.g, colors.bgCard.b);
  doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.setLineWidth(0.35);
  doc.rect(65, 124, pageWidth - 130, 48, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colors.cyan.r, colors.cyan.g, colors.cyan.b);
  doc.text('EXECUTIVE DESK COORDINATOR', pageWidth / 2, 134, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
  doc.text('MOHAMMED MALIK RAIHAN', pageWidth / 2, 142, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
  doc.text('Tel: +971 55 289 3299    •    Email: mohammed@zenithnexus.com', pageWidth / 2, 149, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
  doc.text('FOR GLOBAL ACCREDITATION REGISTRIES AND ENQUIRIES, INQUIRE DIRECTLY THEREOF.', pageWidth / 2, 161, { align: 'center' });

  // Credits
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(colors.textMuted.r, colors.textMuted.g, colors.textMuted.b);
  doc.text('ALL INFORMATION VALID FOR SUMMIT DATED SEPTEMBER 2026. REGISTRATION GATEWAY IS SUBJECT TO VETTING APPROVAL.', pageWidth / 2, 192, { align: 'center' });

  // SAVE ELEGANT PDF
  doc.save('Meridian_Exchange_Sovereign_Brochure_2026.pdf');
}

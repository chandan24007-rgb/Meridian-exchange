/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';

interface SmoothScrollHeroProps {
  /**
   * Height of the scroll section in pixels
   * @default 1200
   */
  scrollHeight?: number;
  /**
   * Background image URL for desktop view
   */
  desktopImage?: string;
  /**
   * Background image URL for mobile view
   */
  mobileImage?: string;
  /**
   * Initial clip path percentage (e.g. 15 of 15% inner crop frame)
   * @default 15
   */
  initialClipPercentage?: number;
  /**
   * Final clip path percentage (e.g. 85 for 85% bleed crop)
   * @default 85
   */
  finalClipPercentage?: number;
  /**
   * Children overlay element
   */
  children?: React.ReactNode;
}

export default function SmoothScrollHero({
  scrollHeight = 1200,
  desktopImage = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=82',
  mobileImage = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=82',
  initialClipPercentage = 15,
  finalClipPercentage = 85,
  children,
}: SmoothScrollHeroProps) {
  const { scrollY } = useScroll();

  // The clip-path reveals into full bleed
  const clipStart = useTransform(
    scrollY,
    [0, scrollHeight],
    [initialClipPercentage, 0]
  );
  const clipEnd = useTransform(
    scrollY,
    [0, scrollHeight],
    [finalClipPercentage, 100]
  );

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  // Scale down background for a nice parallax focus
  const backgroundSize = useTransform(
    scrollY,
    [0, scrollHeight + 400],
    ['140%', '100%']
  );

  // Content opacity fades out as you descend past the threshold
  const contentOpacity = useTransform(
    scrollY,
    [0, scrollHeight * 0.7],
    [1, 0]
  );

  const contentY = useTransform(
    scrollY,
    [0, scrollHeight],
    [0, -80]
  );

  return (
    <div
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full z-10"
    >
      {/* Scrollable track containing the sticky frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0316]">
        
        {/* Dynamic Clipped Window Visual Container */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-slate-950 flex flex-col justify-between"
          style={{
            clipPath,
            willChange: 'transform, opacity',
          }}
        >
          {/* Subtle grid pattern overlay inside the visual window */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/95 z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] z-10 pointer-events-none" />

          {/* Desktop night view */}
          <motion.div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${desktopImage})`,
              backgroundSize,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Mobile view */}
          <motion.div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${mobileImage})`,
              backgroundSize,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </motion.div>

        {/* Content Layer (Overlaid on top of sticky frame) */}
        <motion.div
          className="relative z-20 h-full w-full flex flex-col justify-between"
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

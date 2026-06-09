/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  linkedin: string;
  avatarUrl?: string;
  bio: string;
  quote: string;
  session: string;
  topics: string[];
}

export interface Roundtable {
  number: number;
  title: string;
  subtitle: string;
  discussionAreas: string[];
  imageType: 'cyber' | 'infrastructure' | 'quantum' | 'cloud';
}

export interface AgendaItem {
  time: string;
  title: string;
  description?: string;
  isHighlight?: boolean;
}

export interface StatCard {
  value: string;
  label: string;
  description?: string;
}

export interface SponsorPackage {
  level: string;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  textColor: string;
}

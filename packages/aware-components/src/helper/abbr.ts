import { ReactNode } from 'react';
import { getTextChildren } from './children';

const abbreviations = [
  'HTML',
  'CSS',
  'JS',
  'API',
  'HTTP',
  'HTTPS',
  'URL',
  'SQL',
  'DOM',
  'SEO',
  'UX',
  'UI',
  'FAQ',
  'IOT',
  'GPU',
  'CPU',
  'RAM',
  'ROM',
  'SSH',
  'VPN',
  'AI',
  'ML',
  'NLP',
  'NASA',
  'GDPR',
  'WI-FI',
  'RFID',
  'LED',
  'CD',
  'DVD',
  'SAAS',
  'PAAS',
  'B2B',
  'B2C',
  'KPI',
  'MVP',
  'ROI',
  'PHD',
  'MD',
  'BSC',
  'MSC',
  'DOB',
  'ETA',
  'DIY',
  'RSVP',
  'VAT',
  'PTO',
  'TBA',
  'TBD',
  'HR',
  'R&D',
  'ETA',
  'FBI',
  'CEO',
  'COO',
  'CTO',
  'CPA',
  'ASAP',
];

/**
 * Searches through a list of React node children to find any text that matches a known abbreviation.
 *
 * @param {Object} options - The options object.
 * @param {ReactNode[]} [options.children=[]] - The list of React child nodes to search through.
 *
 * @returns {string | undefined} - Returns the first abbreviation found in the children, or `undefined` if none is found.
 *
 * @example
 * // Given abbreviations = ["AI", "NASA", "HTML"]
 * findAbbreviation({ children: ["Welcome to ", <span>NASA</span>, " headquarters"] });
 * // Returns: "NASA"
 */
export const findAbbreviation = ({
  children = [],
}: {
  children?: ReactNode;
}): string | undefined =>
  getTextChildren(children).find((text) =>
    abbreviations.includes(text.toUpperCase())
  );

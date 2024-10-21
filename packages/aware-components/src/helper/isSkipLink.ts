const skipLinkPatterns = [
  '#main',
  '#maincontent',
  '#skip',
  '#skiplink',
  '#skip-to-content',
  '#skip-to-main',
  '#skip-to-maincontent',
  '#content',
  '#primary',
  '#mainContentArea',
  '#primaryContent',
  '#skip-navigation',
  '#bypass-nav',
  '#bypass-navigation',
  '#jump-to-content',
  '#jump-main',
  '#skip-nav',
  '#main-area',
  '#main-section',
];

export const isSkipLink = (href: string = '') =>
  skipLinkPatterns.includes(href);

export const DEVELOPMENT =
  import.meta.env.DEV || process.env.NODE_ENV === 'development';

//** Aria */
export const ARIA_LABEL = 'aria-label';
export const ARIA_LABELLEDBY = 'aria-labelledby';
export const ARIA_CHECKED = 'aria-checked';
export const ARIA_HIDDEN = 'aria-hidden';
export const ARIA_EXPANDED = 'aria-expanded';

//** PROPS */
export const TITLE = 'title';
export const ROLE = 'role';
export const ON_CLICK = 'onClick';
export const ALT = 'alt';
export const INERT = 'inert';

//** Heading */
export const H_1 = 'h1';
export const H_2 = 'h2';
export const H_3 = 'h3';
export const H_4 = 'h4';
export const H_5 = 'h5';
export const H_6 = 'h6';

//** ABSTRACT ROLES */
export const ABSTRACT_ROLES: string[] = [
  'command',
  'composite',
  'input',
  'landmark',
  'range',
  'roletype',
  'section',
  'sectionhead',
  'select',
  'structure',
  'widget',
  'window',
];

//** GENERIC TEXTS */
export const GENERIC_TEXTS: readonly string[] = [
  'click me',
  'click',
  'click!',
  'download',
  'here',
  'read more',
  'learn more',
  'click',
  'more',
  'submit',
  'go',
  'continue',
  'next',
  'previous',
  'back',
  'start',
  'stop',
  'info',
  'details',
  'view',
  'update',
  'press',
  'enter',
  'buy now',
  'order now',
  'help',
  'OK',
  'yes',
  'no',
];

//** Sizes */
export const PX = 'px' as const;

//** Tags */
export const A = 'A';
export const BUTTON = 'Button';
export const DIV = 'Div';
export const LEGEND = 'legend';
export const INPUT = 'Input';

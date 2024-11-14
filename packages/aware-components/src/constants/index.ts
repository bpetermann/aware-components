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
export const CAPTIONS = 'captions';

//** Heading */
export const H_1 = 'h1';
export const H_2 = 'h2';
export const H_3 = 'h3';
export const H_4 = 'h4';
export const H_5 = 'h5';
export const H_6 = 'h6';

//** Attributes */
export const COLUMN = 'col';
export const ROW = 'row';

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

//** Styles */
export const PX = 'px';
export const REM = 'rem';

export const WIDTH = 'width';
export const HEIGHT = 'height';
export const MAX_WIDTH = 'maxWidth';
export const MAX_HEIGHT = 'maxHeight';
export const PADDING = 'padding';
export const FONTSIZE = 'fontSize';

//** Tags */
export const A = 'A';
export const BUTTON = 'Button';
export const DIV = 'Div';
export const LEGEND = 'Legend';
export const INPUT = 'Input';
export const TEXTAREA = 'Textarea';
export const SELECT = 'Select';
export const OPTGROUP = 'optgroup';
export const BOLD = 'b';
export const ITALIC = 'i';
export const UNDERLINE = 'u';
export const STRONG = 'strong';
export const SPAN = 'span';
export const FONT = 'font';
export const EM = 'em';
export const P = 'P';
export const AUDIO = 'audio';
export const VIDEO = 'video';
export const TRACK = 'track';
export const TABLE_DATA = 'td';
export const TABLE_HEADER = 'th';
export const TABLE_ROW = 'tr';

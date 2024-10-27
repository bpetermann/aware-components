import { anchorChecks } from './anchor';
import { buttonChecks } from './button';
import { divChecks } from './div';
import { fieldsetChecks } from './fieldset';
import { headingChecks } from './heading';
import { imgChecks } from './img';
import { inputChecks } from './input';
import { mainChecks } from './main';
import { navChecks } from './nav';
import { sectionChecks } from './section';
import { selectChecks } from './select';
import { textareaChecks } from './textarea';

export const a11yChecks = {
  anchor: anchorChecks,
  button: buttonChecks,
  div: divChecks,
  fieldset: fieldsetChecks,
  heading: headingChecks,
  img: imgChecks,
  main: mainChecks,
  nav: navChecks,
  section: sectionChecks,
  input: inputChecks,
  textarea: textareaChecks,
  select: selectChecks,
};

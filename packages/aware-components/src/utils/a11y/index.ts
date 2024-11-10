import { anchorChecks } from './anchor';
import { audioChecks } from './audio';
import { buttonChecks } from './button';
import { divChecks } from './div';
import { fieldsetChecks } from './fieldset';
import { headingChecks } from './heading';
import { imgChecks } from './img';
import { inputChecks } from './input';
import { mainChecks } from './main';
import { navChecks } from './nav';
import { paragraphChecks } from './paragraph';
import { sectionChecks } from './section';
import { selectChecks } from './select';
import { tableChecks } from './table';
import { textareaChecks } from './textarea';
import { videoChecks } from './video';

export const a11yChecks = {
  anchor: anchorChecks,
  audio: audioChecks,
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
  paragraph: paragraphChecks,
  video: videoChecks,
  table: tableChecks,
};

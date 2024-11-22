import { anchorChecks } from './anchor';
import { audioChecks } from './audio';
import { buttonChecks } from './button';
import { divChecks } from './div';
import { fieldsetChecks } from './fieldset';
import { headingChecks } from './heading';
import { imgChecks } from './img';
import { inputChecks } from './input';
import { liChecks } from './li';
import { mainChecks } from './main';
import { navChecks } from './nav';
import { olChecks } from './ol';
import { paragraphChecks } from './paragraph';
import { sectionChecks } from './section';
import { selectChecks } from './select';
import { tableChecks } from './table';
import { tdChecks } from './td';
import { textareaChecks } from './textarea';
import { thChecks } from './th';
import { ulChecks } from './ul';
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
  table: tableChecks,
  th: thChecks,
  td: tdChecks,
  video: videoChecks,
  li: liChecks,
  ul: ulChecks,
  ol: olChecks,
};

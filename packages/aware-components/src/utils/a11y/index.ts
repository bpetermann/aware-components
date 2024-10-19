import { anchorChecks } from './anchor';
import { buttonChecks } from './button';
import { divChecks } from './div';
import { headingChecks } from './heading';
import { imgChecks } from './img';
import { mainChecks } from './main';
import { navChecks } from './nav';
import { sectionChecks } from './section';

export const a11yChecks = {
  anchor: anchorChecks,
  button: buttonChecks,
  div: divChecks,
  img: imgChecks,
  heading: headingChecks,
  section: sectionChecks,
  nav: navChecks,
  main: mainChecks,
};

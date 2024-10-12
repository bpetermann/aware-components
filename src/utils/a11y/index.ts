import { anchorChecks } from './anchor';
import { buttonChecks } from './button';
import { divChecks } from './div';
import { h1Checks, headingChecks } from './heading';
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
  h1: h1Checks,
  section: sectionChecks,
  nav: navChecks,
  main: mainChecks,
};

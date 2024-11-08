import { findAbbreviation } from '../../../../helper/abbr';
import { messages } from '../../../messages';
import { ParagraphProps } from '../types';

export const checkAbbrText = (props: ParagraphProps) => {
  const abbr = findAbbreviation(props);
  return abbr ? messages.p.abbr + abbr : null;
};

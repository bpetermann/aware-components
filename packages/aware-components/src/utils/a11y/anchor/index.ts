import { A } from '../../../constants';
import { getElementTextContent } from '../../../helper/getElementTextContent';
import { checkColorContrast } from '../style/checkColorContrast';
import { checkAriaHidden } from './checks/checkAriaHidden';
import { checkAttributes } from './checks/checkAttributes';
import { checkGenericText } from './checks/checkGenericText';
import { checkMailLink } from './checks/checkMailLink';
import { AnchorProps } from './types/AnchorProps';

export const anchorChecks = (props: AnchorProps): string[] => {
  const text = getElementTextContent(props.children) || '';

  return [
    checkMailLink(props, text),
    checkGenericText(text),
    checkAriaHidden(props),
    checkColorContrast(props, A),
    checkAttributes(props),
  ].filter((check) => check !== null);
};

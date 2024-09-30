import { getElementTextContent } from '../../../helper/getElementTextContent';
import { checkGenericText } from './checks/checkGenericText';
import { checkMailLink } from './checks/checkMailLink';
import { AnchorProps } from './types/AnchorProps';

export const anchorChecks = (props: AnchorProps): string[] => {
  const text = getElementTextContent(props.children) || '';

  return [checkMailLink(props, text), checkGenericText(text)].filter(
    (check) => check !== null
  );
};

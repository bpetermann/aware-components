import { getSequenceLength } from '../../../../helper/getSequenceLength';
import { messages } from '../../../messages';
import { DivProps } from '../types/DivProps';

const MAX_DIV_SEQUENCE = 4;

export const checkDivSoup = (
  props: DivProps,
  Div: React.ComponentType
): string | null => {
  const divSequence =
    getSequenceLength<string | React.ComponentType>(props.children, [
      'div',
      Div,
      // Increment sequence count by one to account for the parent div element itself
    ]) + 1;

  return divSequence > MAX_DIV_SEQUENCE
    ? messages.div.soup + divSequence
    : null;
};

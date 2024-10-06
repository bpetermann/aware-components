import React from 'react';
import { ARIA_HIDDEN } from '../../../../constants';
import { canHaveAriaHidden } from '../../../../helper/canHaveAriaHidden';
import { messages } from '../../../messages';
import { DivProps } from '../types/DivProps';

export const checkAriaHidden = (props: DivProps): string | null =>
  props[ARIA_HIDDEN] && !canHaveAriaHidden(React.createElement('div', props))
    ? messages.div.hidden
    : null;

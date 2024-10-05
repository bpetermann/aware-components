import React from 'react';
import { ARIA_HIDDEN } from '../../../../constants';
import { canHaveAriaHidden } from '../../../../helper/canHaveAriaHidden';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

export const checkAriaHidden = (props: AnchorProps): string | null =>
  props[ARIA_HIDDEN] &&
  (props.href || !canHaveAriaHidden(React.createElement('a', props)))
    ? messages.anchor.hidden
    : null;

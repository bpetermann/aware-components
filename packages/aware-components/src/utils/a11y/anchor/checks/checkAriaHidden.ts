import React from 'react';
import { ARIA_HIDDEN, INERT } from '../../../../constants';
import { canHaveAriaHidden } from '../../../../helper/canHaveAriaHidden';
import { inertValue } from '../../../../helper/inertValue';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

export const checkAriaHidden = (props: AnchorProps): string | null =>
  props[ARIA_HIDDEN] &&
  ((props.href && props?.[INERT] !== inertValue) ||
    !canHaveAriaHidden(React.createElement('a', props)))
    ? messages.anchor.hidden
    : null;

import React from 'react';
import { describe, expect, it } from 'vitest';
import { checkAbstractRole } from '../../utils/a11y/div/checks/checkAbstractRole';
import { checkAriaHidden } from '../../utils/a11y/div/checks/checkAriaHidden';
import { checkButtonRole } from '../../utils/a11y/div/checks/checkButtonRole';
import { checkWrongAttributes } from '../../utils/a11y/div/checks/checkWrongAttributes';
import { messages } from '../../utils/messages';

describe('Accessibility checks for <div> elements', () => {
  it('warns when <div> has an aria-expanded attribute', () => {
    const props = {
      'aria-expanded': true,
    };
    const warnings = checkWrongAttributes(props);
    expect(warnings).toEqual(messages.div.expanded);
  });

  it('warns when <div> has a role of "button"', () => {
    const props = {
      role: 'button',
    };
    const warnings = checkButtonRole(props);
    expect(warnings).toEqual(messages.div.button);
  });

  it('warns when <div> has an onClick handler', () => {
    const props = {
      onClick: () => {},
    };
    const warnings = checkButtonRole(props);
    expect(warnings).toEqual(messages.div.button);
  });

  it('warns when <div> has an abstract role', () => {
    const props = { role: 'roletype', children: 'Click me' };

    const warnings = checkAbstractRole(props);
    expect(warnings).toEqual(messages.div.role);
  });

  it('warns when <div> has aria-hidden but contains focusable children', () => {
    const props = {
      'aria-hidden': true,
      children: React.createElement(
        'div',
        {},
        React.createElement(
          'div',
          {},
          React.createElement('a', { href: '/about' }, 'about section')
        )
      ),
    };
    const warnings = checkAriaHidden(props);
    expect(warnings).toEqual(messages.div.hidden);
  });
});

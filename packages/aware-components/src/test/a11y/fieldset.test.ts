import React from 'react';
import { describe, expect, it } from 'vitest';
import { fieldsetChecks } from '../../utils/a11y/fieldset';
import { messages } from '../../utils/messages';

describe('Accessibility checks for <fieldset> elements', () => {
  it('warns whenno child present', () => {
    const props = {};

    const warnings = fieldsetChecks(props);
    expect(warnings).toContain(messages.fieldset.legend);
  });

  it('warns when first child is not <legend>', () => {
    const props = {
      children: React.createElement('p', {}, 'Choose your favorite monster'),
    };

    const warnings = fieldsetChecks(props);
    expect(warnings).toContain(messages.fieldset.legend);
  });

  it('pass when first child is <legend>', () => {
    const props = {
      children: React.createElement(
        'legend',
        {},
        'Choose your favorite monster'
      ),
    };

    const warnings = fieldsetChecks(props);
    expect(warnings.length).toEqual(0);
  });

  it('pass when first child after fraction is <legend>', () => {
    const props = {
      children: React.createElement(
        React.Fragment,
        {},
        React.createElement('legend', {}, 'Choose your favorite monster')
      ),
    };

    const warnings = fieldsetChecks(props);
    expect(warnings.length).toEqual(0);
  });
});

import React from 'react';
import { describe, expect, it } from 'vitest';
import { checkOptGroup } from '../../utils/a11y/select/checks/checkOptGroup';
import { messages } from '../../utils/messages';

describe('Accessibility check for <select> element', () => {
  it('should warn if an <optgroup> within <select> lacks a label', () => {
    const select = React.createElement(
      'select',
      {},
      React.createElement(
        React.Fragment,
        {},
        React.createElement('option', {}, 'Choose a food'),
        React.createElement(
          'optgroup',
          { label: 'Fruit' },
          React.createElement('option', { value: 'apply' }, 'Apple'),
          React.createElement('option', { value: 'banana' }, 'Banana'),
          React.createElement('option', { value: 'cherry' }, 'Cherry')
        ),
        React.createElement(
          'optgroup',
          { label: 'Meat' },
          React.createElement('option', { value: 'beef' }, 'Beef'),
          React.createElement('option', { value: 'chicken' }, 'Chicken'),
          React.createElement('option', { value: 'pork' }, 'Pork')
        ),
        React.createElement(
          'optgroup',
          {},
          React.createElement('option', { value: 'artichoke' }, 'Artichokes'),
          React.createElement('option', { value: 'broccoli' }, 'Broccoli'),
          React.createElement('option', { value: 'cabbage' }, 'Cabbages')
        )
      )
    );

    const warnings = checkOptGroup(select.props);
    expect(warnings).toEqual(messages.select.optgroup);
  });

  it('should warn if an <optgroup> inside a fragment lacks a label', () => {
    const select = React.createElement(
      'select',
      {},
      React.createElement(
        React.Fragment,
        {},
        React.createElement('option', {}, 'Choose a food'),
        React.createElement(
          'optgroup',
          { label: 'Fruit' },
          React.createElement('option', { value: 'apply' }, 'Apple'),
          React.createElement('option', { value: 'banana' }, 'Banana'),
          React.createElement('option', { value: 'cherry' }, 'Cherry')
        ),
        React.createElement(
          'optgroup',
          { label: 'Meat' },
          React.createElement('option', { value: 'beef' }, 'Beef'),
          React.createElement('option', { value: 'chicken' }, 'Chicken'),
          React.createElement('option', { value: 'pork' }, 'Pork')
        ),
        React.createElement(
          React.Fragment,
          {},
          React.createElement(
            'optgroup',
            {},
            React.createElement('option', { value: 'artichoke' }, 'Artichokes'),
            React.createElement('option', { value: 'broccoli' }, 'Broccoli'),
            React.createElement('option', { value: 'cabbage' }, 'Cabbages')
          )
        )
      )
    );

    const warnings = checkOptGroup(select.props);
    expect(warnings).toEqual(messages.select.optgroup);
  });

  it('should pass if each <optgroup> within <select> has a label', () => {
    const select = React.createElement(
      'select',
      {},
      React.createElement(
        React.Fragment,
        {},
        React.createElement('option', {}, 'Choose a food'),
        React.createElement(
          'optgroup',
          { label: 'Fruit' },
          React.createElement('option', { value: 'apply' }, 'Apple'),
          React.createElement('option', { value: 'banana' }, 'Banana'),
          React.createElement('option', { value: 'cherry' }, 'Cherry')
        ),
        React.createElement(
          'optgroup',
          { label: 'Meat' },
          React.createElement('option', { value: 'beef' }, 'Beef'),
          React.createElement('option', { value: 'chicken' }, 'Chicken'),
          React.createElement('option', { value: 'pork' }, 'Pork')
        ),
        React.createElement(
          'optgroup',
          { label: 'Vegetables' },
          React.createElement('option', { value: 'artichoke' }, 'Artichokes'),
          React.createElement('option', { value: 'broccoli' }, 'Broccoli'),
          React.createElement('option', { value: 'cabbage' }, 'Cabbages')
        )
      )
    );

    const warnings = checkOptGroup(select.props);
    expect(warnings).toBeNull();
  });

  it('should work if <select> children are not wrapped in a fragment', () => {
    const select = React.createElement(
      'select',
      {},
      React.createElement('option', {}, 'Choose a food'),
      React.createElement(
        'optgroup',
        {},
        React.createElement('option', { value: 'apply' }, 'Apple'),
        React.createElement('option', { value: 'banana' }, 'Banana'),
        React.createElement('option', { value: 'cherry' }, 'Cherry')
      )
    );

    const warnings = checkOptGroup(select.props);
    expect(warnings).toEqual(messages.select.optgroup);
  });
});

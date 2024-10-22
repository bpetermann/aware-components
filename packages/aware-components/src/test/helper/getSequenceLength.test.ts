import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import { describe, expect, it } from 'vitest';
import { Div } from '../../components';
import { getSequenceLength } from '../../helper/getSequenceLength';

describe('getSequenceLength', () => {
  it('should return 0 if the root element is not of the specified type', () => {
    const element = React.createElement('span', {}, 'content');
    expect(getSequenceLength(element, ['div'])).toBe(0);
  });

  it('should return 1 if there is a single matching element', () => {
    const element = React.createElement('div', {}, 'content');
    expect(getSequenceLength(element, ['div'])).toBe(1);
  });

  it('should return the correct sequence length for nested elements of the same type', () => {
    const nestedDivs = React.createElement(
      'div',
      {},
      React.createElement(
        'div',
        {},
        React.createElement('div', {}, 'Deeply nested div')
      )
    );

    expect(getSequenceLength(nestedDivs, ['div'])).toBe(3);
  });

  it('should ignore fragments and still count the nested sequence', () => {
    const nestedWithFragment = React.createElement(
      'div',
      {},
      React.createElement(
        Fragment,
        {},
        React.createElement('div', {}, React.createElement('div', {}, 'deep'))
      )
    );
    expect(getSequenceLength(nestedWithFragment, ['div'])).toBe(3);
  });

  it('should return 0 if children contain elements of different types', () => {
    const mixedElements = React.createElement(
      'div',
      {},
      React.createElement('span', {}, 'content'),
      React.createElement('div', {}, 'div content')
    );
    expect(getSequenceLength(mixedElements, ['div'])).toBe(1);
  });

  it('should work with custom <Div> components', () => {
    const nestedDivs = React.createElement(
      Div,
      {},
      React.createElement(
        Div,
        {},
        React.createElement(
          Div,
          {},
          React.createElement(Div, {}, 'Deeply nested div')
        )
      )
    );

    expect(getSequenceLength(nestedDivs, [Div])).toBe(4);
  });

  it('should work with a combination of "div" elements and <Div> components', () => {
    const nestedDivs = React.createElement(
      Div,
      {},
      React.createElement(
        'div',
        {},
        React.createElement(
          Div,
          {},
          React.createElement(
            'div',
            {},
            React.createElement(
              Div,
              {},
              React.createElement(
                'div',
                {},
                React.createElement(
                  Div,
                  {},
                  React.createElement(Div, {}, 'Deeply nested div')
                )
              )
            )
          )
        )
      )
    );

    expect(getSequenceLength(nestedDivs, ['div', Div])).toBe(8);
  });
});

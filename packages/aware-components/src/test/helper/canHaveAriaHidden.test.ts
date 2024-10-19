import React from 'react';
import { describe, expect, it } from 'vitest';
import { canHaveAriaHidden } from '../../helper/canHaveAriaHidden';

describe('canHaveAriaHidden', () => {
  it('should return false for focusable input element', () => {
    const input = React.createElement('input', { type: 'text' });
    expect(canHaveAriaHidden(input)).toBe(false);
  });

  it('should return true for a non-focusable div', () => {
    const div = React.createElement('div', null, 'Non-focusable div');
    expect(canHaveAriaHidden(div)).toBe(true);
  });

  it('should return false for a link with href', () => {
    const link = React.createElement(
      'a',
      { href: 'https://example.com' },
      'Link'
    );
    expect(canHaveAriaHidden(link)).toBe(false);
  });

  it('should return true for a link without href', () => {
    const link = React.createElement('a', null, 'No href link');
    expect(canHaveAriaHidden(link)).toBe(true);
  });

  it('should return true for a button with negative tabIndex', () => {
    const button = React.createElement(
      'button',
      { tabIndex: -1 },
      'Hidden button'
    );
    expect(canHaveAriaHidden(button)).toBe(true);
  });

  it('should return false for a button with no tabIndex', () => {
    const button = React.createElement('button', null, 'Focusable button');
    expect(canHaveAriaHidden(button)).toBe(false);
  });

  it('should handle React.Fragment with non-focusable children', () => {
    const fragment = React.createElement(
      React.Fragment,
      null,
      React.createElement('div', null, 'Non-focusable'),
      React.createElement('span', null, 'Still non-focusable')
    );
    expect(canHaveAriaHidden(fragment)).toBe(true);
  });

  it('should handle React.Fragment with focusable children', () => {
    const fragment = React.createElement(
      React.Fragment,
      null,
      React.createElement('div', null, 'Non-focusable'),
      React.createElement('button', null, 'Focusable button')
    );
    expect(canHaveAriaHidden(fragment)).toBe(false);
  });

  it('should return false for an element with contentEditable', () => {
    const div = React.createElement(
      'div',
      { contentEditable: true },
      'Editable content'
    );
    expect(canHaveAriaHidden(div)).toBe(false);
  });

  it('should return true for nested non-focusable elements', () => {
    const nested = React.createElement(
      'div',
      null,
      React.createElement('span', null, 'Non-focusable'),
      React.createElement('p', null, 'Another non-focusable element')
    );
    expect(canHaveAriaHidden(nested)).toBe(true);
  });

  it('should return false for nested elements with focusable children', () => {
    const nested = React.createElement(
      'div',
      null,
      React.createElement('span', null, 'Non-focusable'),
      React.createElement('button', null, 'Focusable button')
    );
    expect(canHaveAriaHidden(nested)).toBe(false);
  });

  it('should return true for an element with aria-hidden set', () => {
    const div = React.createElement(
      'div',
      { 'aria-hidden': true },
      'Hidden element'
    );
    expect(canHaveAriaHidden(div)).toBe(true);
  });

  it('should return false for a textarea element', () => {
    const textarea = React.createElement('textarea', null);
    expect(canHaveAriaHidden(textarea)).toBe(false);
  });

  it('should return true for elements inside a React.Fragment with aria-hidden applied to non-focusable children', () => {
    const fragment = React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        { 'aria-hidden': true },
        'Non-focusable hidden element'
      )
    );
    expect(canHaveAriaHidden(fragment)).toBe(true);
  });
});

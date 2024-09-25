import React from 'react';
import {
  checkAbstractRole,
  checkSwitchRole,
  containsAccessibleText,
} from '../../utils/a11y/button';
import { messages } from '../../utils/messages';

describe('Accessibility check for button', () => {
  it('should pass when button has aria-label', () => {
    const props = { 'aria-label': 'Submit' };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should fail when button has no text or aria attributes', () => {
    const props = { children: null };
    const result = containsAccessibleText(props);
    expect(result).toBe(false);
  });

  it('should pass when button has text child', () => {
    const props = { children: 'Click Me' };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has image child', () => {
    const props = {
      children: React.createElement(
        'img',
        { src: 'button-icon.png', alt: 'Icon' },
        'Click Me!'
      ),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should fail when button has empty string as children', () => {
    const props = { children: '' };
    const result = containsAccessibleText(props);
    expect(result).toBe(false);
  });

  it('should warn when button has an abstract role', () => {
    const props = { role: 'roletype', children: 'Click me' };
    const warnings = checkAbstractRole(props);
    expect(warnings).toContain(messages.button.role);
  });

  it('should pass when button has nested string children', () => {
    const props = {
      children: React.createElement('div', {}, 'Click Me!'),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has nested string children', () => {
    const props = {
      children: React.createElement(
        'div',
        {},
        ' ',
        React.createElement('div', {}, 'Click Me!'),
        ''
      ),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has aria-labelledby', () => {
    const props = { 'aria-labelledby': 'label-id' };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has title attribute', () => {
    const props = { title: 'Button Title' };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has text inside React.Fragment', () => {
    const props = {
      children: React.createElement(React.Fragment, {}, 'Fragment Text'),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has deeply nested string children', () => {
    const props = {
      children: React.createElement(
        'div',
        {},
        React.createElement(
          'div',
          {},
          React.createElement('span', {}, 'Click Me')
        )
      ),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has React.Fragment with nested string children', () => {
    const props = {
      children: React.createElement(
        React.Fragment,
        {},
        React.createElement('div', {}, 'Nested Text')
      ),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should fail when button has React.Fragment with no text', () => {
    const props = {
      children: React.createElement(
        React.Fragment,
        {},
        React.createElement('div', {})
      ),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(false);
  });

  it('should pass when button has a non-abstract role', () => {
    const props = { role: 'button', children: 'Click me' };
    const warnings = checkAbstractRole(props);
    expect(warnings).toBeNull();
  });

  it('should fail when button has incomplete aria attributes', () => {
    const props = { 'aria-label': '' }; // Empty aria-label
    const result = containsAccessibleText(props);
    expect(result).toBe(false);
  });

  it('should fail when button has incomplete aria attributes', () => {
    const props = { title: '' }; // Empty title
    const result = containsAccessibleText(props);
    expect(result).toBe(false);
  });

  it('should fail when button has null children', () => {
    const props = { children: null };
    const result = containsAccessibleText(props);
    expect(result).toBe(false);
  });

  it('should pass when button has both image and text children', () => {
    const props = {
      children: [
        React.createElement('img', { src: 'icon.png', alt: 'Icon' }),
        'Submit',
      ],
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when button has both aria-label and aria-labelledby', () => {
    const props = { 'aria-label': 'Submit', 'aria-labelledby': 'label-id' };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when one aria role is valid', () => {
    const props = { 'aria-label': 'Submit', 'aria-labelledby': '' };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should pass when one condition is met', () => {
    const props = {
      'aria-label': '',
      children: React.createElement('div', {}, 'Click Me!'),
    };
    const result = containsAccessibleText(props);
    expect(result).toBe(true);
  });

  it('should fail when button has switch role but no aria-checked', () => {
    const props = { role: 'switch' };
    const warnings = checkSwitchRole(props);
    expect(warnings).toContain(messages.button.switch);
  });

  it('should fail when button has switch role and aria-checked', () => {
    const props = { role: 'switch', 'aria-checked': true };
    const warnings = checkSwitchRole(props);
    expect(warnings).toBeNull();
  });
});

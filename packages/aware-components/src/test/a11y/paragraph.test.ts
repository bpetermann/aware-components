import React from 'react';
import { describe, expect, it } from 'vitest';
import { headingCheck } from '../../utils/a11y/paragraph/index';
import { messages } from '../../utils/messages';

describe('Accessibility check for paragraph', () => {
  const message = messages.p.heading;

  it('returns the correct message for a single valid child element', () => {
    const props = { children: React.createElement('b', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBe(`${message}<b>`);
  });

  it('returns null when there are multiple child elements', () => {
    const props = {
      children: [
        React.createElement('b', {}, 'Hello'),
        React.createElement('italic', {}, 'World'),
      ],
    };
    const result = headingCheck(props);
    expect(result).toBeNull();
  });

  it('returns null when there is no child element', () => {
    const props = { children: null };
    const result = headingCheck(props);
    expect(result).toBeNull();
  });

  it('returns null for a single non-valid child element type', () => {
    const props = { children: React.createElement('div', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBeNull();
  });

  it('returns the correct message for a single valid `ITALIC` element', () => {
    const props = { children: React.createElement('i', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBe(`${message}<i>`);
  });

  it('returns the correct message for a single valid `STRONG` element', () => {
    const props = { children: React.createElement('strong', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBe(`${message}<strong>`);
  });

  it('handles mixed valid and invalid elements by returning null', () => {
    const props = {
      children: [
        React.createElement('b', {}, 'Hello'),
        React.createElement('div', {}, 'World'),
      ],
    };
    const result = headingCheck(props);
    expect(result).toBeNull();
  });

  it('returns null when children is a text node only', () => {
    const props = { children: 'Hello World' };
    const result = headingCheck(props);
    expect(result).toBeNull();
  });

  it('returns null when children is a valid element but not in the allowed list', () => {
    const props = { children: React.createElement('p', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBeNull();
  });

  it('returns the correct message for a single `FONT` element', () => {
    const props = { children: React.createElement('font', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBe(`${message}<font>`);
  });

  it('returns the correct message for a single `EM` element', () => {
    const props = { children: React.createElement('em', {}, 'Hello') };
    const result = headingCheck(props);
    expect(result).toBe(`${message}<em>`);
  });
});

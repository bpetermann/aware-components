import React from 'react';
import { describe, expect, it } from 'vitest';
import { checkAbbrText } from '../../utils/a11y/paragraph/checks/checkAbbrText';
import { checkFontSize } from '../../utils/a11y/paragraph/checks/checkFontSize';
import { checkHeading } from '../../utils/a11y/paragraph/checks/checkHeading';
import { messages } from '../../utils/messages';

describe('Accessibility check for paragraph', () => {
  const message = messages.p.heading;

  it('returns the correct message for a single valid child element', () => {
    const props = { children: React.createElement('b', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBe(`${message}<b>`);
  });

  it('returns null when there are multiple child elements', () => {
    const props = {
      children: [
        React.createElement('b', {}, 'Hello'),
        React.createElement('italic', {}, 'World'),
      ],
    };
    const result = checkHeading(props);
    expect(result).toBeNull();
  });

  it('returns null when there is no child element', () => {
    const props = { children: null };
    const result = checkHeading(props);
    expect(result).toBeNull();
  });

  it('returns null for a single non-valid child element type', () => {
    const props = { children: React.createElement('div', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBeNull();
  });

  it('returns the correct message for a single valid `ITALIC` element', () => {
    const props = { children: React.createElement('i', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBe(`${message}<i>`);
  });

  it('returns the correct message for a single valid `STRONG` element', () => {
    const props = { children: React.createElement('strong', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBe(`${message}<strong>`);
  });

  it('handles mixed valid and invalid elements by returning null', () => {
    const props = {
      children: [
        React.createElement('b', {}, 'Hello'),
        React.createElement('div', {}, 'World'),
      ],
    };
    const result = checkHeading(props);
    expect(result).toBeNull();
  });

  it('returns null when children is a text node only', () => {
    const props = { children: 'Hello World' };
    const result = checkHeading(props);
    expect(result).toBeNull();
  });

  it('returns null when children is a valid element but not in the allowed list', () => {
    const props = { children: React.createElement('p', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBeNull();
  });

  it('returns the correct message for a single `FONT` element', () => {
    const props = { children: React.createElement('font', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBe(`${message}<font>`);
  });

  it('returns the correct message for a single `EM` element', () => {
    const props = { children: React.createElement('em', {}, 'Hello') };
    const result = checkHeading(props);
    expect(result).toBe(`${message}<em>`);
  });

  it('should return null if font size is above 9px', () => {
    const props = {
      style: { fontSize: '10px' },
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should return null if font size is above 0.563em', () => {
    const props = {
      style: { fontSize: '0.6em' },
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should return null if font size is above 0.563rem', () => {
    const props = {
      style: { fontSize: '0.6rem' },
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should return a warning if font size is below 9px', () => {
    const props = {
      style: { fontSize: '8px' },
    };
    const result = checkFontSize(props);
    expect(result).toBe(messages.p.min);
  });

  it('should return a warning if font size is below 0.563em', () => {
    const props = {
      style: { fontSize: '0.5em' },
    };
    const result = checkFontSize(props);
    expect(result).toBe(messages.p.min);
  });

  it('should return a warning if font size is below 0.563rem', () => {
    const props = {
      style: { fontSize: '0.5rem' },
    };
    const result = checkFontSize(props);
    expect(result).toBe(messages.p.min);
  });

  it('should return null if no fontSize is specified', () => {
    const props = {
      style: {},
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should handle edge case where fontSize is exactly 9px', () => {
    const props = {
      style: { fontSize: '9px' },
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should handle edge case where fontSize is exactly 0.563em', () => {
    const props = {
      style: { fontSize: '0.563em' },
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should handle edge case where fontSize is exactly 0.563rem', () => {
    const props = {
      style: { fontSize: '0.563rem' },
    };
    const result = checkFontSize(props);
    expect(result).toBeNull();
  });

  it('should detect children that would be better suited inside an <abbr> element', () => {
    const abbr = 'HTML';
    const props = {
      children: React.createElement(
        React.Fragment,
        {},
        React.createElement(React.Fragment, {}, abbr)
      ),
    };

    const result = checkAbbrText(props);
    expect(result).toEqual(messages.p.abbr + abbr);
  });
});

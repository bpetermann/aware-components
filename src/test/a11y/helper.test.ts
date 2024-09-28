import React from 'react';
import { getElementTextContent } from '../../helper/content';

describe('getElementTextContent', () => {
  it('should return text if the children is a string', () => {
    const props = { children: 'valid' };
    const text = getElementTextContent(props.children);
    expect(text).toBe('valid');
  });

  it('should return concatenated text if children is an array of elements', () => {
    const text = ['Hello, ', 'World!'];
    const props = {
      children: [
        React.createElement('span', {}, text[0]),
        React.createElement('span', {}, text[1]),
      ],
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe(text.join(' '));
  });

  it('should return concatenated text if children is a fragment', () => {
    const text = ['Hello, ', 'World!'];
    const props = {
      children: React.createElement(
        React.Fragment,
        {},
        React.createElement('span', {}, text[0]),
        React.createElement('span', {}, text[1])
      ),
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe(text.join(' '));
  });

  it('should return null if children is null or undefined', () => {
    const result1 = getElementTextContent(null);
    const result2 = getElementTextContent(undefined);
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });

  it('should return null if children is an empty array', () => {
    const result = getElementTextContent([]);
    expect(result).toBeNull();
  });

  it('should return text from nested components', () => {
    const text = 'Hello World';
    const props = {
      children: React.createElement('div', {}, [
        React.createElement('span', {}, text),
      ]),
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe(text);
  });

  it('should return concatenated text from deeply nested components', () => {
    const text1 = 'Hello';
    const text2 = 'World';
    const props = {
      children: React.createElement(
        'div',
        {},
        React.createElement(
          'div',
          {},
          React.createElement('span', {}, text1),
          React.createElement('span', {}, text2)
        )
      ),
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe(`${text1} ${text2}`);
  });

  it('should return concatenated text from an array with mixed content types', () => {
    const text1 = 'Hello';
    const text2 = 'World';
    const props = {
      children: [
        text1,
        React.createElement('span', {}, text2),
        React.createElement('div', {}, 'from React'),
      ],
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe('Hello World from React');
  });

  it('should ignore empty strings, null, and undefined elements', () => {
    const props = {
      children: [
        null,
        undefined,
        '',
        'Hello',
        React.createElement('span', {}, 'World'),
      ],
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe('Hello World');
  });

  it('should handle a mixture of fragments, elements, and strings', () => {
    const props = {
      children: React.createElement(
        React.Fragment,
        {},
        React.createElement('div', {}, 'Hello'),
        ' ',
        React.createElement('span', {}, 'World'),
        '!',
        React.createElement(
          React.Fragment,
          {},
          React.createElement('span', {}, 'How are you?')
        )
      ),
    };
    const result = getElementTextContent(props.children);
    expect(result).toBe('Hello World ! How are you?');
  });

  it('should return null if children contains only empty elements', () => {
    const props = {
      children: [
        React.createElement('div', {}, ''),
        React.createElement('span', {}, null),
      ],
    };
    const result = getElementTextContent(props.children);
    expect(result).toBeNull();
  });
});

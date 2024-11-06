import { describe, expect, test } from 'vitest';
import { containsImageElement } from '../../helper/validation';

import React, { Fragment } from 'react';

describe('containsImageElement function', () => {
  test('returns true if <img> is inside nested fragments', () => {
    const children = React.createElement(
      Fragment,
      {},
      React.createElement(Fragment, {}, React.createElement('img', {}))
    );

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(true);
  });

  test('returns true if <img> is inside an array of elements', () => {
    const children = [
      React.createElement('div', {}),
      React.createElement('span', {}),
      React.createElement('img', {}),
    ];

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(true);
  });

  test('returns true if <img> is the sole child', () => {
    const children = React.createElement('img', {});

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(true);
  });

  test('returns false if no <img> element is present', () => {
    const children = React.createElement('div', {}, 'No image here');

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(false);
  });

  test('returns true if <img> element is deeply nested', () => {
    const children = React.createElement(
      Fragment,
      {},
      React.createElement('div', {}, React.createElement('img', {}))
    );

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(true);
  });

  test('returns true if <img> is in an array of mixed elements', () => {
    const children = [
      React.createElement('div', {}),
      React.createElement('span', {}),
      React.createElement(Fragment, {}, React.createElement('img', {})),
      'Text node',
    ];

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(true);
  });

  test('returns false for empty children array', () => {
    const children = [];

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(false);
  });

  test('returns false for text nodes without an <img>', () => {
    const children = ['Text only', 'More text'];

    const hasImgChild = containsImageElement(children);
    expect(hasImgChild).toEqual(false);
  });
});

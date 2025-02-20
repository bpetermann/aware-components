import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { H2, Li, Ol } from '../../components';
import { messages } from '../../utils/messages';
import { cleanup, render } from '../utils';

const originalEnv = process.env.NODE_ENV;

beforeEach(() => {
  process.env.NODE_ENV = 'development';
});

afterEach(() => {
  vi.restoreAllMocks();
  process.env.NODE_ENV = originalEnv;
  cleanup();
});

describe('Ol Component', () => {
  it('warns if a list contains elements other than <li>', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <H2>MyList</H2>
        <Ol style={{ backgroundColor: '#666' }}>
          <Li>Item 1</Li>
          <Li>Item 2</Li>
          <span>Item 3</span>
          <p role='listitem'>Item 5</p>
        </Ol>
      </>
    );

    expect(warnSpy).toHaveBeenCalledWith(`${messages.ol.role}"${'p'}"`);
    expect(warnSpy).toHaveBeenCalledWith(`${messages.ol.children}"${'span'}"`);
  });
});

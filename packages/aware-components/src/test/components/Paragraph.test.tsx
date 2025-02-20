import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { P } from '../../components';
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

describe('Paragraph Component', () => {
  it('warns when a <p> element is used as a heading', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const children = 'foo';

    render(
      <P>
        <b>{children}</b>
      </P>
    );

    expect(warnSpy).toHaveBeenCalledWith(messages.p.heading + '<b>');
  });
});

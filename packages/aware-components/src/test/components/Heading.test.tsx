import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { H1, H2, H3 } from '../../components';
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

describe('Heading Component', () => {
  it('warns twice when multiple <H1> components are used', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <H1>1</H1>
        <H1>2</H1>
      </>
    );

    expect(warnSpy.mock.calls.length).toBe(2);
  });

  it('logs the number of rendered <H1> components', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <H1>1</H1>
        <H1>2</H1>
        <H1>3</H1>
      </>
    );

    expect(warnSpy).toHaveBeenLastCalledWith(messages.heading.unique + 3);
  });

  it('warns when a heading level is skipped', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <H1>1</H1>
        <H3>3</H3>
      </>
    );

    expect(warnSpy).toHaveBeenLastCalledWith('[h3] ' + messages.heading.skip);
  });

  it('passes if a correct heading structure has been adhered to', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <H1>1</H1>
        <H2>2</H2>
        <H3>3</H3>
        <H3>3</H3>
        <H2>2</H2>
        <H3>3</H3>
        <H3>3</H3>
      </>
    );

    expect(warnSpy.mock.calls.length).toBe(0);
  });
});

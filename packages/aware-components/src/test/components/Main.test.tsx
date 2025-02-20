import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Main } from '../../components';
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

describe('Main Component', () => {
  it('warns when more than one <main> component is used', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <Main></Main>
        <Main></Main>
      </>
    );

    expect(warnSpy).toHaveBeenCalledWith(messages.main.unique);
  });
});

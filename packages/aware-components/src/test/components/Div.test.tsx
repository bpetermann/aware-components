import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Div } from '../../components';
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

describe('Div Component', () => {
  it('warns when excessive nested divs are used', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const expectedCount = 5;

    render(
      <Div>
        <Div>
          <div>
            <Div>
              <div>{'foo'}</div>
            </Div>
          </div>
        </Div>
      </Div>
    );

    expect(warnSpy).toHaveBeenCalledWith(messages.div.soup + expectedCount);
  });
});

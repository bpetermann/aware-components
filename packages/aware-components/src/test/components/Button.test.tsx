import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Button } from '../../components';
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

describe('Button Component', () => {
  it('logs a warning if no text content found', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Button />);

    expect(warnSpy).toHaveBeenCalledWith(messages.button.text);
  });

  it('should warn if no text content found', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Button role='roletype'>click</Button>);

    expect(warnSpy).toHaveBeenCalledWith(messages.button.role);
  });

  it('should warn when button has an abstract role', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Button role='roletype'>click</Button>);

    expect(warnSpy).toHaveBeenCalledWith(messages.button.role);
  });

  it('should warn when button has switch role but no aria-checked', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Button role='switch'>click</Button>);

    expect(warnSpy).toHaveBeenCalledWith(messages.button.switch);
  });

  it('should pass if button has no text but <img> child', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <Button>
        <img src='icon.png' alt='Icon' />
      </Button>
    );

    expect(warnSpy.mock.calls.length).toEqual(0);
  });

  it('should pass if button has no text but aria-label', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Button aria-label='Submit' />);

    expect(warnSpy.mock.calls.length).toEqual(0);
  });
});

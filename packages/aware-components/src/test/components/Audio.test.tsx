import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Audio, Div } from '../../components';
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

describe('Audio Component', () => {
  it('warns when audio element lacks required attributes', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <Div>
        <Audio autoPlay loop>
          <source src='horse.ogg' type='audio/ogg' />
          <source src='horse.mp3' type='audio/mpeg' />
          Your browser does not support the audio element
        </Audio>
      </Div>
    );

    expect(warnSpy).toHaveBeenCalledWith(messages.audio.autoplay);
    expect(warnSpy).toHaveBeenCalledWith(messages.audio.controls);
    expect(warnSpy).toHaveBeenCalledWith(messages.audio.loop);
    expect(warnSpy).toHaveBeenCalledWith(messages.audio.transcript);
  });

  it('does not warn when audio element is properly configured', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <Div>
        <Audio controls>
          <source src='horse.ogg' type='audio/ogg' />
          <source src='horse.mp3' type='audio/mpeg' />
          Your browser does not support the audio element
        </Audio>
        <p>Transcript: A horse sound</p>
      </Div>
    );

    expect(warnSpy.mock.calls.length).toBe(0);
  });
});

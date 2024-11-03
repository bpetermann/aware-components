import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  checkAutoPlay,
  checkControls,
  checkLoop,
} from '../../utils/a11y/audio';
import { messages } from '../../utils/messages';

describe('Audio element accessibility checks', () => {
  it('should warn if autoplay is enabled without muted', () => {
    const element = React.createElement('audio', {
      autoPlay: true,
    });

    const warning = checkAutoPlay(element.props);
    expect(warning).toEqual(messages.audio.autoplay);
  });

  it('should not warn if autoplay is enabled with muted', () => {
    const element = React.createElement('audio', {
      autoPlay: true,
      muted: true,
    });

    const warning = checkAutoPlay(element.props);
    expect(warning).toBeNull();
  });

  it('should warn if loop is enabled without visible controls', () => {
    const element = React.createElement('audio', {
      loop: true,
      autoPlay: true,
    });

    const warning = checkLoop(element.props);
    expect(warning).toEqual(messages.audio.loop);
  });

  it('should not warn if loop is enabled with visible controls', () => {
    const element = React.createElement('audio', {
      loop: true,
      autoPlay: true,
      controls: true,
    });

    const warning = checkLoop(element.props);
    expect(warning).toBeNull();
  });

  it('should warn if controls are enabled but display is set to hidden', () => {
    const element = React.createElement('audio', {
      controls: true,
      style: { display: 'none' },
    });

    const warning = checkControls(element.props);
    expect(warning).toEqual(messages.audio.controls);
  });

  it('should warn if controls are not enabled', () => {
    const element = React.createElement('audio', {});

    const warning = checkControls(element.props);
    expect(warning).toEqual(messages.audio.controls);
  });

  it('should not warn if controls are enabled and visible', () => {
    const element = React.createElement('audio', {
      controls: true,
    });

    const warning = checkControls(element.props);
    expect(warning).toBeNull();
  });
});

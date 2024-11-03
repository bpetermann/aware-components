import React from 'react';
import { describe, expect, it } from 'vitest';
import { videoChecks } from '../../utils/a11y/video';
import { messages } from '../../utils/messages';

describe('Video element accessibility checks', () => {
  it('should return all warnings when all checks fail', () => {
    const element = React.createElement('video', {
      autoPlay: true,
      loop: true,
    });

    const warnings = videoChecks(element.props);
    expect(warnings).toContain(messages.video.autoplay);
    expect(warnings).toContain(messages.video.loop);
    expect(warnings).toContain(messages.video.captions);
    expect(warnings).toContain(messages.video.controls);
  });

  it('should warn if autoplay is enabled without muted', () => {
    const element = React.createElement(
      'video',
      {
        autoPlay: true,
      },
      React.createElement('track', { kind: 'captions' })
    );

    const warning = videoChecks(element.props);
    expect(warning).toContain(messages.video.autoplay);
  });

  it('should not warn if autoplay is enabled with muted', () => {
    const element = React.createElement(
      'video',
      {
        autoPlay: true,
        muted: true,
        controls: true,
      },
      React.createElement('track', { kind: 'captions' })
    );

    const warning = videoChecks(element.props);
    expect(warning.length).toBe(0);
  });

  it('should warn if loop is enabled without visible controls', () => {
    const element = React.createElement('video', {
      loop: true,
      autoPlay: true,
    });

    const warning = videoChecks(element.props);
    expect(warning).toContain(messages.video.loop);
  });

  it('should not warn if loop is enabled with visible controls', () => {
    const element = React.createElement(
      'video',
      {
        loop: true,
        controls: true,
      },

      React.createElement('track', { kind: 'captions' })
    );

    const warning = videoChecks(element.props);
    expect(warning.length).toBe(0);
  });

  it('should warn if controls are enabled but display is set to hidden', () => {
    const element = React.createElement('video', {
      controls: true,
      style: { display: 'none' },
    });

    const warning = videoChecks(element.props);
    expect(warning).toContain(messages.video.controls);
  });

  it('should warn if controls are not enabled', () => {
    const element = React.createElement('video', {});

    const warning = videoChecks(element.props);
    expect(warning).toContain(messages.video.controls);
  });

  it('should not warn if controls are enabled and visible', () => {
    const element = React.createElement(
      'video',
      {
        controls: true,
      },
      React.createElement('track', { kind: 'captions' })
    );

    const warning = videoChecks(element.props);
    expect(warning.length).toBe(0);
  });

  it('should not warn if <track> is inside a fragment', () => {
    const element = React.createElement(
      'video',
      {
        autoPlay: true,
        muted: true,
        controls: true,
      },

      React.createElement(
        React.Fragment,
        {},
        React.createElement('track', { kind: 'captions' })
      )
    );

    const warning = videoChecks(element.props);
    expect(warning.length).toBe(0);
  });
});

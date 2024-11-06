import React from 'react';
import { describe, expect, it } from 'vitest';
import { anchorChecks } from '../../utils/a11y/anchor/';
import { checkAriaHidden } from '../../utils/a11y/anchor/checks/checkAriaHidden';
import { checkAttributes } from '../../utils/a11y/anchor/checks/checkAttributes';
import { checkGenericText } from '../../utils/a11y/anchor/checks/checkGenericText';
import { checkMailLink } from '../../utils/a11y/anchor/checks/checkMailLink';
import { checkSkipLink } from '../../utils/a11y/anchor/checks/checkSkipLink';
import { messages } from '../../utils/messages';

describe('Anchor element accessibility checks', () => {
  it('should return all warnings when all checks fail', () => {
    const element = React.createElement(
      'a',
      {
        href: 'mailto:john.doe@gmail.com',
        'aria-hidden': true,
        onClick: () => {},
        style: {
          color: 'black',
          backgroundColor: 'black',
        },
      },
      'click'
    );
    const warnings = anchorChecks(element.props, ['/contact']);
    expect(warnings.length).toBe(6);
    expect(warnings).toContain(messages.anchor.mail);
    expect(warnings).toContain(messages.anchor.onclick);
    expect(warnings).toContain(`[A] ${messages.styles.contrast}`);
    expect(warnings).toContain(messages.anchor.hidden);
    expect(warnings).toContain(messages.anchor.generic + 'click');
    expect(warnings).toContain(messages.anchor.skipLink);
  });

  it('should pass when an email link is used as the anchor text', () => {
    const props = {
      href: 'mailto:john.doe@gmail.com',
      children: 'john.doe@gmail.com',
    };
    const warnings = checkMailLink(props, props.children);
    expect(warnings).toBeNull();
  });

  it('should warn when "mailto" href does not match the anchor text', () => {
    const props = {
      href: 'mailto:john.doe@gmail.com',
      children: 'click',
    };
    const warnings = checkMailLink(props, props.children);
    expect(warnings).toEqual(messages.anchor.mail);
  });

  it('should warn when anchor contains an onClick event', () => {
    const element = React.createElement('a', {
      onClick: () => {},
    });
    const warnings = checkAttributes(element.props);
    expect(warnings).toEqual(messages.anchor.onclick);
  });

  it('should pass when anchor is hidden with both aria-hidden and inert attributes', () => {
    const element = React.createElement('a', {
      /** An empty string "" is truthy for inert prop, before react version 19 */
      inert: '',
      href: '/contact',
      'aria-hidden': true,
    });
    const warnings = checkAriaHidden(element.props);
    expect(warnings).toBeNull();
  });

  it('should pass when anchor has aria-hidden and no href attribute', () => {
    const element = React.createElement('a', {
      'aria-hidden': true,
    });
    const warnings = checkAriaHidden(element.props);
    expect(warnings).toBeNull();
  });

  it('should warn when aria-hidden is used with an accessible href link', () => {
    const element = React.createElement(
      'a',
      {
        href: '/contact',
        'aria-hidden': true,
      },
      'Link'
    );
    const warnings = checkAriaHidden(element.props);
    expect(warnings).toEqual(messages.anchor.hidden);
  });

  it('should warn when anchor uses generic text like "click"', () => {
    const warnings = checkGenericText({}, 'click');
    expect(warnings).toEqual(messages.anchor.generic + 'click');
  });

  it('should pass when anchor text is descriptive (non-generic)', () => {
    const warnings = checkGenericText({}, 'Learn more about our services');
    expect(warnings).toBeNull();
  });

  it('should pass when anchor with "mailto" contains matching email and no aria-hidden', () => {
    const props = {
      href: 'mailto:john.doe@gmail.com',
      children: 'john.doe@gmail.com',
    };
    const warnings = anchorChecks(props, []);
    expect(warnings).toEqual([]);
  });

  it('should warn when anchor uses color with poor contrast (e.g., black text on black background)', () => {
    const element = React.createElement(
      'a',
      {
        href: '#',
        style: {
          color: 'black',
          backgroundColor: 'black',
        },
      },
      'Link'
    );
    const warnings = anchorChecks(element.props, []);
    expect(warnings).toContain(`[A] ${messages.styles.contrast}`);
  });

  it('should warn when no skip link is present', () => {
    const warnings = checkSkipLink(['/contact']);
    expect(warnings).toEqual(messages.anchor.skipLink);
  });

  it('should pass when no anchors are present', () => {
    const warnings = checkSkipLink([]);
    expect(warnings).toBeNull();
  });

  it('should pass when skip link is present', () => {
    const warnings = checkSkipLink(['/contact', '#main']);
    expect(warnings).toBeNull();
  });
});

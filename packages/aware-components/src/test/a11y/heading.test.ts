import { describe, expect, it } from 'vitest';
import { headingChecks } from '../../utils/a11y/heading';
import { messages } from '../../utils/messages';

describe('Accessibility checks for <h*> elements', () => {
  it('warns when <h2> is present, but no <h1>', () => {
    const heading = 'h2';

    const warnings = headingChecks([heading], {});
    expect(warnings).includes(`[${heading}] ${messages.heading.skip}`);
  });

  it('warns when <h3> is present, but no <h2>', () => {
    const heading = 'h3';

    const warnings = headingChecks(['h1', heading], {});
    expect(warnings).includes(`[${heading}] ${messages.heading.skip}`);
  });

  it('should pass, when <h2> and <h1> are present', () => {
    const heading = 'h2';

    const warnings = headingChecks(['h1', heading], {});
    expect(warnings.length).toEqual(0);
  });

  it('warn when two <h1> elements are present', () => {
    const headings = ['h1', 'h1'];

    const warnings = headingChecks(headings, {});
    expect(warnings).include(
      messages.heading.unique + headings.filter((h) => h === 'h1').length
    );
  });

  it('should pass,when every heading element is present one time', () => {
    const warnings = headingChecks(['h1', 'h2', 'h4', 'h3', 'h6', 'h5'], {});
    expect(warnings.length).toEqual(0);
  });
});

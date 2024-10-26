import { describe, expect, it } from 'vitest';
import { inputChecks } from '../../utils/a11y/input';
import { messages } from '../../utils/messages';

describe('Accessibility check for input', () => {
  it('should return all warnings when all checks fail', () => {
    const props = {
      id: 'name',
      style: { color: 'black', backgroundColor: 'black' },
    };
    const labels = [];

    const warnings = inputChecks(props, labels);
    expect(warnings.length).toEqual(2);
    expect(warnings).toContain(`${messages.input.label}"${props?.id || ''}"`);
    expect(warnings).toContain(`[Input] ${messages.styles.contrast}`);
  });

  it('warns when <input> has no label nor aria-labelledby', () => {
    const props = { id: 'name' };
    const labels = [];

    const warnings = inputChecks(props, labels);
    expect(warnings).toContain(`${messages.input.label}"${props?.id || ''}"`);
  });

  it('passes when <input> has a matching label', () => {
    const props = { id: 'name' };
    const labels = ['name'];

    const warnings = inputChecks(props, labels);
    expect(warnings.length).toEqual(0);
  });

  it('passes when <input> has an aria-labelledby property', () => {
    const props = { id: 'name', 'aria-labelledby': 'name' };
    const labels = ['name'];

    const warnings = inputChecks(props, labels);
    expect(warnings.length).toEqual(0);
  });
});

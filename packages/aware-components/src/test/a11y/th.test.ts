import { describe, expect, it } from 'vitest';
import { Scope } from '../../context/table/types';
import { thChecks } from '../../utils/a11y/th';
import { messages } from '../../utils/messages';

describe('Accessibility check for <Th>', () => {
  const withAllProps = {
    children: 'Monday',
    id: 'stud',
    scope: 'col',
    headers: 'par',
  };

  const multiLevelScope: Scope[] = ['col', 'col', 'row', 'row'];
  const twoLevelScope: Scope[] = ['col', 'row', 'row'];
  const twoLevelHeaderWarning = `${messages.th.two}"${withAllProps.children}"`;
  const multiLevelHeaderWarning = `${messages.th.multi}"${withAllProps.children}"`;

  it('should warn, if "id" is missing in complex table', () => {
    const props = { children: 'Monday', headers: 'col1' };
    const warnings = thChecks(props, multiLevelScope);

    expect(warnings).toContain(multiLevelHeaderWarning);
  });

  it('should warn, if "scope" and "headers" are missing in complex table', () => {
    const props = { children: 'Monday', id: 'col1' };
    const warnings = thChecks(props, multiLevelScope);

    expect(warnings).toContain(multiLevelHeaderWarning);
  });

  it('should pass, if "id" and "headers" attribute is present', () => {
    const warnings = thChecks(withAllProps, multiLevelScope);

    expect(warnings.length).toEqual(0);
  });

  it('should pass, if "id" is missing in table with two headers', () => {
    const props = { children: 'Monday', headers: 'col1' };
    const warnings = thChecks(props, twoLevelScope);

    expect(warnings.length).toEqual(0);
  });

  it('should warn, if "scope" and "headers" are missing in table with two headers', () => {
    const props = { children: 'Monday' };
    const warnings = thChecks(props, twoLevelScope);

    expect(warnings).toContain(twoLevelHeaderWarning);
  });

  it('should pass, if no headers are present', () => {
    const props = {};
    const warnings = thChecks(props, []);

    expect(warnings.length).toEqual(0);
  });
});

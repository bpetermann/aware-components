import { describe, expect, it } from 'vitest';
import { Scope } from '../../context/table/types';
import { tdChecks } from '../../utils/a11y/td';
import { messages } from '../../utils/messages';

describe('Accessibility check for <Td>', () => {
  const props = { children: 'Monday' };
  const multiLevelScope: Scope[] = ['col', 'col', 'row', 'row'];
  const twoLevelScope: Scope[] = ['col', 'row', 'row'];
  const warning = `${messages.td.multi}"${props.children}"`;

  it('should warn, if "headers" attribute is missing in complex table', () => {
    expect(tdChecks(props, multiLevelScope)).toContain(warning);
  });

  it('should pass, if "headers" attribute is missing in table with two headers', () => {
    expect(tdChecks(props, twoLevelScope).length).toEqual(0);
  });

  it('should pass, if "headers" attribute is missing in table without headers', () => {
    expect(tdChecks(props, []).length).toEqual(0);
  });
});

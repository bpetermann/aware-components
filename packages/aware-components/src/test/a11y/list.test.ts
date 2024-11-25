import React from 'react';
import { describe, expect, it } from 'vitest';
import { formatWarning } from '../../helper/list';
import { ulChecks } from '../../utils/a11y/ul';

describe('Accessibility check for list', () => {
  const validList = React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Item 1'),
    React.createElement('li', {}, 'Item 2'),
    React.createElement('li', {}, 'Item 3')
  );

  const invalidList = React.createElement(
    'ul',
    {
      style: {
        backgroundColor: '#fff',
        color: '#fff',
      },
    },
    React.createElement('li', {}),
    React.createElement('div', {})
  );

  const listitem = React.createElement('div', { role: 'listitem' });

  it('should return all warnings when all checks fail', () => {
    const warnings = ulChecks(invalidList.props);
    expect(warnings.length).toEqual(2);
  });

  it('should return no warnings for a valid list', () => {
    const warnings = ulChecks(validList.props);
    expect(warnings.length).toEqual(0);
  });

  it('warns if an element is not a <li> but has role "listitem"', () => {
    const warnings = ulChecks({
      ...validList.props,
      children: [...validList.props['children'], listitem],
    });
    expect(warnings[0]).toEqual(formatWarning(listitem, 'Ul', 'role'));
  });
});

import React from 'react';
import { describe, expect, it } from 'vitest';
import { formatWarning } from '../../helper/list';
import { liChecks } from '../../utils/a11y/li';
import { ulChecks } from '../../utils/a11y/ul';
import { messages } from '../../utils/messages';

describe('Accessibility checks for <Li> and lists', () => {
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

  it('returns warnings for invalid list structure', () => {
    const warnings = ulChecks(invalidList.props);
    expect(warnings.length).toEqual(2);
  });

  it('returns no warnings for a valid list', () => {
    const warnings = ulChecks(validList.props);
    expect(warnings.length).toEqual(0);
  });

  it('warns if a non-<li> element has role="listitem"', () => {
    const warnings = ulChecks({
      ...validList.props,
      children: [...validList.props['children'], listitem],
    });
    expect(warnings[0]).toEqual(formatWarning(listitem, 'Ul', 'role'));
  });

  it('passes checks for a valid <li> element', () => {
    const warnings = liChecks({}, true, undefined);
    expect(warnings.length).toEqual(0);
  });

  it('warns about insufficient contrast in fallback styles', () => {
    const warnings = liChecks({ style: { color: '#fff' } }, true, '#fff');
    expect(warnings[0]).toEqual(`[Li] ${messages.styles.contrast}`);
  });

  it('warns if a <li> element is not inside a list', () => {
    const warnings = liChecks({}, false, '#fff');
    expect(warnings[0]).toEqual(messages.li.list);
  });
});

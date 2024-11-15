import React from 'react';
import { describe, expect, it } from 'vitest';
import { Scope } from '../../context/table/types';
import { tableChecks } from '../../utils/a11y/table/index';
import { messages } from '../../utils/messages';

describe('Accessibility check for table', () => {
  const colHeading: Scope[] = ['col'];
  const twoHeadings: Scope[] = ['col', 'row'];
  const multiHeadings: Scope[] = ['col', 'col', 'row', 'row'];

  const caption = React.createElement('caption', {}, 'Caption');

  const createThead = (
    children: React.DetailedReactHTMLElement<object, HTMLElement>
  ) => React.createElement('thead', {}, children);

  const createTr = (
    children: React.DetailedReactHTMLElement<object, HTMLElement>[]
  ) => React.createElement('tr', {}, ...children);

  const createTh = () => React.createElement('th', {});

  const createTd = () => React.createElement('td', {});

  const createThWithScope = () => React.createElement('th', { scope: 'scope' });

  const createThWithAttributes = () =>
    React.createElement('th', { scope: 'scope', id: 'id' });

  const tableHeader = {
    children: [createThead(createTr([createTh(), createTh(), createTh()]))],
  };

  const thWithScopeAndId = {
    children: [
      createThead(
        createTr(
          Array(3)
            .fill(undefined)
            .map(() => createThWithAttributes())
        )
      ),
    ],
  };

  const thWithScope = {
    children: [
      createThead(
        createTr(
          Array(3)
            .fill(undefined)
            .map(() => createThWithScope()) as React.DetailedReactHTMLElement<
            object,
            HTMLElement
          >[]
        )
      ),
    ],
  };

  const tableBody = {
    children: createTr(
      Array(5)
        .fill(undefined)
        .map((_, i) => (i === 0 ? createTh() : createTd()))
    ),
  };

  it('warns if no column heading is provided', () => {
    const warnings = tableChecks({}, [], undefined);
    expect(warnings).toContain(messages.table.col);
  });

  it('passes if column heading is defined by scope', () => {
    const warnings = tableChecks({}, colHeading, undefined);
    expect(warnings.length).toEqual(0);
  });

  it('passes if column heading is defined via props', () => {
    const warnings = tableChecks(tableHeader, [], undefined);
    expect(warnings.length).toEqual(0);
  });

  it('warns if two-heading table lacks `scope`', () => {
    const warnings = tableChecks(
      { children: [...tableHeader.children, tableBody.children] },
      [],
      undefined
    );
    expect(warnings).toContain(messages.table.row);
  });

  it('warns if two-heading table has no `scope`', () => {
    const warnings = tableChecks(tableBody, twoHeadings, undefined);
    expect(warnings).toContain(messages.table.row);
  });

  it('passes if all <th> elements in two-heading table have `scope`', () => {
    const warnings = tableChecks(thWithScope, twoHeadings, undefined);
    expect(warnings.length).toEqual(0);
  });

  it('warns if <th> in multi-heading table lacks `scope`', () => {
    const warnings = tableChecks(tableHeader, multiHeadings, undefined);
    expect(warnings).toContain(messages.table.multi);
  });

  it('passes if all <th> elements in multi-heading table have `scope`', () => {
    const warnings = tableChecks(
      { children: [caption, ...thWithScopeAndId.children] },
      multiHeadings,
      undefined
    );
    expect(warnings.length).toEqual(0);
  });

  it('warns if multi-heading table lacks `caption`', () => {
    const warnings = tableChecks(thWithScopeAndId, multiHeadings, undefined);
    expect(warnings).toContain(messages.table.caption);
  });

  it('passes if `caption` is provided via context in multi-heading table', () => {
    const warnings = tableChecks(thWithScopeAndId, multiHeadings, true);
    expect(warnings.length).toEqual(0);
  });

  it('issues one warning if no headings exist in table', () => {
    const warnings = tableChecks({}, [], undefined);
    expect(warnings.length).toEqual(1);
  });

  it('issues one warning if a two-heading table fails checks', () => {
    const warnings = tableChecks(tableHeader, twoHeadings, undefined);
    expect(warnings.length).toEqual(1);
  });

  it('issues two warnings if multi-heading table fails checks', () => {
    const warnings = tableChecks(tableHeader, multiHeadings, undefined);
    expect(warnings.length).toEqual(2);
  });
});

import React from 'react';
import { describe, expect, it } from 'vitest';
import { tableChecks } from '../../utils/a11y/table';
import { checkColHeader } from '../../utils/a11y/table/checks/checkColHeader';
import { checkMultiHeader } from '../../utils/a11y/table/checks/checkMultiHeader';
import { checkRowHeader } from '../../utils/a11y/table/checks/checkRowHeader';
import { messages } from '../../utils/messages';

describe('Table element accessibility checks', () => {
  const createElementWithScopeAndId = (
    type: 'th' | 'td',
    scope?: string,
    id?: string
  ) => React.createElement(type, { scope, id, key: id ?? '1' });

  const validHeader = createElementWithScopeAndId('th', 'col', 'header1');
  const invalidHeaderNoScope = createElementWithScopeAndId('th');
  const rowHeaders = [validHeader];
  const colHeaders = [validHeader];
  const headerColumns = [validHeader, validHeader];

  describe('checkRowHeader', () => {
    it('should return null if all row headers have scope', () => {
      expect(checkRowHeader([...colHeaders, ...rowHeaders])).toBe(null);
    });

    it('should return a message if any row header is missing scope', () => {
      const result = checkRowHeader([...colHeaders, invalidHeaderNoScope]);
      expect(result).toBe(messages.table.row);
    });
  });

  describe('checkColHeader', () => {
    it('should return a message if no column headers are provided', () => {
      expect(checkColHeader(false)).toBe(messages.table.col);
    });

    it('should return null if column headers are provided', () => {
      expect(checkColHeader(!!headerColumns.length)).toBe(null);
    });
  });

  describe('checkMultiHeader', () => {
    it('should return null if all headers have scope and id for multi-level headers', () => {
      expect(checkMultiHeader([...colHeaders, ...rowHeaders], [])).toBe(null);
    });

    it('should return a message if any header in multi-level headers is missing scope or id', () => {
      const result = checkMultiHeader(
        [invalidHeaderNoScope, ...rowHeaders],

        []
      );
      expect(result).toBe(messages.table.multi);
    });
  });

  describe('tableChecks', () => {
    it('should return an empty array if all checks pass', () => {
      const mockTableProps = {
        children: [
          React.createElement('caption', {}, 'Caption'),
          React.createElement('tr', { key: 'table1' }, [
            createElementWithScopeAndId('th', 'col', 'header1'),
            createElementWithScopeAndId('th', 'col', 'header1'),
            createElementWithScopeAndId('td', undefined, 'data1'),
          ]),
        ],
      };

      const result = tableChecks(mockTableProps, ['col']);
      expect(result).toEqual([]);
    });
  });
});

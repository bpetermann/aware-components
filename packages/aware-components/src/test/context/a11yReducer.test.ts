import { describe, expect, it } from 'vitest';
import {
  addHeading,
  addLabel,
  addLink,
  deleteHeading,
  deleteLabel,
  deleteLink,
} from '../../context';
import { a11yReducer, initialState } from '../../context/a11y/reducer';
import { A11yAction, A11yState } from '../../context/a11y/types';

const reduce = (actions: A11yAction[]): A11yState =>
  actions.reduce(a11yReducer, initialState);

describe('a11yReducer duplicate-safe registries', () => {
  describe('links', () => {
    it('keeps a value registered while another contributor remains', () => {
      const state = reduce([
        addLink('#'),
        addLink('#'),
        deleteLink('#'),
      ]);

      expect(state.links).toContain('#');
    });

    it('removes a value once the last contributor unmounts', () => {
      const state = reduce([
        addLink('#'),
        addLink('#'),
        deleteLink('#'),
        deleteLink('#'),
      ]);

      expect(state.links).not.toContain('#');
    });

    it('removal order does not strand a still-mounted contributor', () => {
      const state = reduce([
        addLink('#main'),
        addLink('#main'),
        addLink('#footer'),
        deleteLink('#footer'),
        deleteLink('#main'),
      ]);

      expect(state.links).toContain('#main');
      expect(state.links).not.toContain('#footer');
    });

    it('ignores adds/deletes without an href', () => {
      const state = reduce([addLink(undefined), deleteLink(undefined)]);

      expect(state.links).toEqual([]);
    });
  });

  describe('labels', () => {
    it('keeps a value registered while another contributor remains', () => {
      const state = reduce([
        addLabel('name'),
        addLabel('name'),
        deleteLabel('name'),
      ]);

      expect(state.labels).toContain('name');
    });

    it('removes a value once the last contributor unmounts', () => {
      const state = reduce([
        addLabel('name'),
        addLabel('name'),
        deleteLabel('name'),
        deleteLabel('name'),
      ]);

      expect(state.labels).not.toContain('name');
    });
  });

  describe('headings', () => {
    it('keeps an h1 registered while a duplicate h1 remains', () => {
      const state = reduce([
        addHeading('h1'),
        addHeading('h1'),
        deleteHeading('h1'),
      ]);

      expect(state.headings).toContain('h1');
      expect(state.headings.filter((tag) => tag === 'h1')).toHaveLength(1);
    });
  });
});

import '@testing-library/jest-dom';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Label, Optgroup, Select } from '../../components';
import { cleanup, render } from '../utils';

const originalEnv = process.env.NODE_ENV;

beforeEach(() => {
  process.env.NODE_ENV = 'development';
});

afterEach(() => {
  vi.restoreAllMocks();
  process.env.NODE_ENV = originalEnv;
  cleanup();
});

describe('Select Component', () => {
  it('does not warn for valid <select> structures with mixed elements', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <Label htmlFor='hr-select'>Your favorite food</Label> <br />
        <Select name='foods' id='hr-select'>
          <>
            <option value=''>Choose a food</option>
            <optgroup label='Fruit'>
              <option value='apple'>Apples</option>
              <option value='banana'>Bananas</option>
              <option value='cherry'>Cherries</option>
              <option value='damson'>Damsons</option>
            </optgroup>
            <Optgroup label='Vegetables'>
              <option value='artichoke'>Artichokes</option>
              <option value='broccoli'>Broccoli</option>
              <option value='cabbage'>Cabbages</option>
            </Optgroup>
            <optgroup label='Meat'>
              <option value='beef'>Beef</option>
              <option value='chicken'>Chicken</option>
              <option value='pork'>Pork</option>
            </optgroup>
            <>
              <optgroup label='Fish'>
                <option value='cod'>Cod</option>
                <option value='haddock'>Haddock</option>
                <option value='salmon'>Salmon</option>
                <option value='turbot'>Turbot</option>
              </optgroup>
            </>
          </>
        </Select>
      </>
    );

    expect(warnSpy.mock.calls.length).toBe(0);
  });
});

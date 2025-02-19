import '@testing-library/jest-dom';
import test from 'node:test';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Caption, Table, Td, Th, Tr } from '../../components';
import { messages } from '../../utils/messages';
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

describe('Table Component', () => {
  it('two heading table', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const th = 'Wednesday';

    render(
      <Table>
        <caption>Delivery slots:</caption>
        <thead>
          <Tr>
            <Td></Td>
            <Th scope='col'>Monday</Th>
            <Th scope='col'>Tuesday</Th>
            <Th>{th}</Th>
            <Th scope='col'>Thursday</Th>
            <Th scope='col'>Friday</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Th scope='row'>09:00 – 11:00</Th>
            <Td>Closed</Td>
            <Td>Open</Td>
            <Td>Open</Td>
            <Td>Closed</Td>
            <Td>Closed</Td>
          </Tr>
          <Tr>
            <Th scope='row'>11:00 – 13:00</Th>
            <Td>Open</Td>
            <Td>Open</Td>
            <Td>Closed</Td>
            <Td>Closed</Td>
            <Td>Closed</Td>
          </Tr>
        </tbody>
      </Table>
    );

    expect(warnSpy).toHaveBeenCalledWith(messages.table.row);
    expect(warnSpy).toHaveBeenCalledWith(`${messages.th.two}"${th}"`);
  });

  test('multi heading table', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <Table>
        <>
          <Caption>Delivery slots:</Caption>
        </>
        <thead>
          <Tr>
            <Td></Td>
            <Th scope='col'>Studio</Th>
            <Th id='apt' scope='col'>
              <abbr title='Apartment'>Apt</abbr>
            </Th>
            <Th id='chal' scope='col'>
              Chalet
            </Th>
            <Th id='villa' scope='col'>
              Villa
            </Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Th id='par' colSpan={5} scope='colgroup'>
              Paris
            </Th>
          </Tr>
          <Tr>
            <Th headers='par' id='pbed1'>
              1 bedroom
            </Th>
            <Td headers='par pbed1 stud'>11</Td>
            <Td headers='par pbed1 apt'>20</Td>
            <Td headers='par pbed1 chal'>25</Td>
            <Td headers='par pbed1 villa'>23</Td>
          </Tr>
          <Tr>
            <Th headers='par' id='pbed2'>
              2 bedroom
            </Th>
            <Td headers='par pbed2 stud'>-</Td>
            <Td headers='par pbed2 apt'>43</Td>
            <Td headers='par pbed2 chal'>52</Td>
            <Td headers='par pbed2 villa'>32</Td>
          </Tr>
          <Tr>
            <Th headers='par' id='pbed3'>
              3 bedroom
            </Th>
            <Td headers='par pbed3 stud'>-</Td>
            <Td headers='par pbed3 apt'>13</Td>
            <Td headers='par pbed3 chal'>15</Td>
            <Td headers='par pbed3 villa'>40</Td>
          </Tr>
          <Tr>
            <Th id='rome' colSpan={5} scope='colgroup'>
              Rome
            </Th>
          </Tr>
          <Tr>
            <Th id='rbed1' headers='rome'>
              1 bedroom
            </Th>
            <Td headers='rome rbed1 stud'>13</Td>
            <Td headers='rome rbed1 apt'>21</Td>
            <Td headers='rome rbed1 chal'>22</Td>
            <Td headers='rome rbed1 villa'>3</Td>
          </Tr>
          <Tr>
            <Th id='rbed2' headers='rome'>
              2 bedroom
            </Th>
            <Td headers='rome rbed2 stud'>-</Td>
            <Td headers='rome rbed2 apt'>23</Td>
            <Td headers='rome rbed2 chal'>43</Td>
            <Td headers='rome rbed2 villa'>30</Td>
          </Tr>
          <Tr>
            <Th id='rbed3' headers='rome'>
              3 bedroom
            </Th>
            <Td headers='rome rbed3 stud'>-</Td>
            <Td headers='rome rbed3 apt'>16</Td>
            <Td headers='rome rbed3 chal'>32</Td>
            <Td headers='rome rbed3 villa'>40</Td>
          </Tr>
        </tbody>
      </Table>
    );

    expect(warnSpy).toHaveBeenCalledWith(messages.table.multi);
    expect(warnSpy).toHaveBeenCalledWith(messages.table.multi);
  });
});

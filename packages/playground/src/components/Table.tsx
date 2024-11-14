import { Table, Th, Tr } from 'aware-components';

export function MyTable() {
  return (
    <Table>
      <caption>Delivery slots:</caption>
      <thead>
        <Tr>
          <td></td>
          <Th scope='col'>Monday</Th>
          <Th scope='col'>Tuesday</Th>
          <Th scope='col'>Wednesday</Th>
          <Th scope='col'>Thursday</Th>
          <Th scope='col'>Friday</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Th scope='row'>09:00 – 11:00</Th>
          <td>Closed</td>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
        </Tr>
        <Tr>
          <Th scope='row'>11:00 – 13:00</Th>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
          <td>Closed</td>
        </Tr>
      </tbody>
    </Table>
  );
}

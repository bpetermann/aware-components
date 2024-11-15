import { Table } from 'aware-components';

export function MixedTable() {
  return (
    <Table>
      <caption>Delivery slots:</caption>
      <thead>
        <tr>
          <td></td>
          <th scope='col'>Monday</th>
          <th scope='col'>Tuesday</th>
          <th scope='col'>Wednesday</th>
          <th scope='col'>Thursday</th>
          <th scope='col'>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>09:00 – 11:00</th>
          <td>Closed</td>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
        <tr>
          <th scope='row'>11:00 – 13:00</th>
          <td>Open</td>
          <td>Open</td>
          <td>Closed</td>
          <td>Closed</td>
          <td>Closed</td>
        </tr>
      </tbody>
    </Table>
  );
}

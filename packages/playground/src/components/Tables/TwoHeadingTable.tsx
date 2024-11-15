import { Table, Td, Th, Tr } from 'aware-components';

function TableHeader() {
  return (
    <thead>
      <Tr>
        <Td></Td>
        <Th scope='col'>Monday</Th>
        <Th scope='col'>Tuesday</Th>
        <Th scope='col'>Wednesday</Th>
        <Th scope='col'>Thursday</Th>
        <Th scope='col'>Friday</Th>
      </Tr>
    </thead>
  );
}

export function TwoHeadingTable() {
  return (
    <Table>
      <caption>Delivery slots:</caption>
      <TableHeader />
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
}

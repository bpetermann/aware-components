import { Table, Th, Tr } from 'aware-components';

export function MultiHeaderTable() {
  return (
    <Table>
      <caption>Delivery slots:</caption>
      <thead>
        <Tr>
          <td></td>
          <Th id='stud' scope='col'>
            Studio
          </Th>
          <th id='apt' scope='col'>
            <abbr title='Apartment'>Apt</abbr>
          </th>
          <th id='chal' scope='col'>
            Chalet
          </th>
          <th id='villa' scope='col'>
            Villa
          </th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <th id='par' colSpan={5} scope='colgroup'>
            Paris
          </th>
        </Tr>
        <Tr>
          <th headers='par' id='pbed1'>
            1 bedroom
          </th>
          <td headers='par pbed1 stud'>11</td>
          <td headers='par pbed1 apt'>20</td>
          <td headers='par pbed1 chal'>25</td>
          <td headers='par pbed1 villa'>23</td>
        </Tr>
        <Tr>
          <th headers='par' id='pbed2'>
            2 bedroom
          </th>
          <td headers='par pbed2 stud'>-</td>
          <td headers='par pbed2 apt'>43</td>
          <td headers='par pbed2 chal'>52</td>
          <td headers='par pbed2 villa'>32</td>
        </Tr>
        <Tr>
          <th headers='par' id='pbed3'>
            3 bedroom
          </th>
          <td headers='par pbed3 stud'>-</td>
          <td headers='par pbed3 apt'>13</td>
          <td headers='par pbed3 chal'>15</td>
          <td headers='par pbed3 villa'>40</td>
        </Tr>
        <tr>
          <th id='rome' colSpan={5} scope='colgroup'>
            Rome
          </th>
        </tr>
        <tr>
          <th id='rbed1' headers='rome'>
            1 bedroom
          </th>
          <td headers='rome rbed1 stud'>13</td>
          <td headers='rome rbed1 apt'>21</td>
          <td headers='rome rbed1 chal'>22</td>
          <td headers='rome rbed1 villa'>3</td>
        </tr>
        <tr>
          <th id='rbed2' headers='rome'>
            2 bedroom
          </th>
          <td headers='rome rbed2 stud'>-</td>
          <td headers='rome rbed2 apt'>23</td>
          <td headers='rome rbed2 chal'>43</td>
          <td headers='rome rbed2 villa'>30</td>
        </tr>
        <tr>
          <th id='rbed3' headers='rome'>
            3 bedroom
          </th>
          <td headers='rome rbed3 stud'>-</td>
          <td headers='rome rbed3 apt'>16</td>
          <td headers='rome rbed3 chal'>32</td>
          <td headers='rome rbed3 villa'>40</td>
        </tr>
      </tbody>
    </Table>
  );
}

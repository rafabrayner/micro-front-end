import React from 'react';
import { Table } from 'reactstrap';
import Client from '../../models/client';
import calculateBMI from '../../utils/calculateBMI';

type ClientListProps = {
  clientList: Client[]
}

export default function ClientList(props: ClientListProps) {

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>name</th>
          <th scope='col'>Peso</th>
          <th scope='col'>Altura</th>
          <th scope='col'>Sexo</th>
          <th scope='col'>IMC</th>
        </tr>
      </thead>

      <tbody>
        {props.clientList.map((client, idx) => {
          return (
            <tr key={idx}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.weight}</td>
              <td>{client.height}</td>
              <td>{client.gender}</td>
              <td>{calculateBMI(client.weight!, client.height!)}</td>
            </tr>);
        })}
      </tbody>
    </Table>
  );
}

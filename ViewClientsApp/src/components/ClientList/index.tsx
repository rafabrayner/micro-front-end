import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import Client from '../../models/client';
import calculateBMI from '../../utils/calculateBMI';

type ClientListProps = {
  clientList: Client[],
}

export default function ClientList(props: ClientListProps) {

  const navigate = useNavigate();

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Weight</th>
          <th scope='col'>Height</th>
          <th scope='col'>Height</th>
          <th scope='col'>IMC</th>
          <th scope='col'></th>
        </tr>
      </thead>

      <tbody>
        {props.clientList.map((client, idx) => {
          return (
            <tr key={idx}>
              <td>{client.id}</td>
              <td>{client.nome}</td>
              <td>{client.peso}</td>
              <td>{client.altura}</td>
              <td>{client.sexo}</td>
              <td>{calculateBMI(client.peso!, client.altura!).toFixed(2)}</td>
              <td><Button onClick={() => navigate(`/client/${client.id}`)}>View</Button></td>
            </tr>);
        })}
      </tbody>
    </Table>
  );
}

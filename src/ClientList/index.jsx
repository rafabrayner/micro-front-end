import React from 'react';
import { Table } from 'reactstrap';

export function ClientList() {
  const clientList = [
    {
      id: 1,
      name: 'John',
      weight: 75,
      height: 1.75,
      gender: 'Male'
    },
    {
      id: 2,
      name: 'Maria',
      weight: 60,
      height: 1.55,
      gender: 'Female'
    }
  ];

  /**
   * Calculates the Body Mass Index
   * @param {*} client
   * @returns 
   */
  const calculateBMI = function(client) {
    return client.weight / (client.height**2);
  }
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
        <tr>
          <td>{clientList[0].id}</td>
          <td>{clientList[0].name}</td>
          <td>{clientList[0].weight}</td>
          <td>{clientList[0].height}</td>
          <td>{clientList[0].gender}</td>
          <td>{calculateBMI(clientList[0])}</td>
        </tr>

        <tr>
          <td>{clientList[1].id}</td>
          <td>{clientList[1].name}</td>
          <td>{clientList[1].weight}</td>
          <td>{clientList[1].height}</td>
          <td>{clientList[1].gender}</td>
          <td>{calculateBMI(clientList[[1]])}</td>
        </tr>
      </tbody>
    </Table>
  );
}
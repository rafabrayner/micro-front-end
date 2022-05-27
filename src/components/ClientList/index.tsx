import React from 'react';
import { Table } from 'reactstrap';
import Client from '../../models/client';

type ClientListProps = {
  clientList: Client[]
}

export default class ClientList extends React.Component<ClientListProps> {
  /**
   * Calculates the Body Mass Index
   * @param client 
   * @returns 
   */
  calculateBMI(client: Client): number {
    return client.weight / (client.height**2);
  }

  render() {
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
            <td>{this.props.clientList[0].id}</td>
            <td>{this.props.clientList[0].name}</td>
            <td>{this.props.clientList[0].weight}</td>
            <td>{this.props.clientList[0].height}</td>
            <td>{this.props.clientList[0].gender}</td>
            <td>{this.calculateBMI(this.props.clientList[0])}</td>
          </tr>
  
          <tr>
            <td>{this.props.clientList[1].id}</td>
            <td>{this.props.clientList[1].name}</td>
            <td>{this.props.clientList[1].weight}</td>
            <td>{this.props.clientList[1].height}</td>
            <td>{this.props.clientList[1].gender}</td>
            <td>{this.calculateBMI(this.props.clientList[1])}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

import React from 'react';
import { Container } from 'reactstrap';
import Client from '../../models/client';
import ClientList from '../ClientList';
import NavBar from '../NavBar';

export default class App extends React.Component<{}> {

  clientList: Client[] = [
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

  render() {
    return (
      <Container>
        <NavBar />
        <ClientList clientList={this.clientList}/>
      </Container>
    );
  }
}

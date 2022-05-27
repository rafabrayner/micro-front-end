import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import Client from '../../models/client';
import ClientList from '../ClientList';
import NavBar from '../NavBar';

export default function App() {

  const [clientList, setClientList] = useState<Client[]>([
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
  ]);

  function addClient() {
    const client: Client = {
      id: 3,
      name: 'Joseph',
      weight: 80,
      height: 1.85,
      gender: 'Male'
    }
    setClientList([...clientList, client] )
  }

  return (
    <Container>
      <NavBar />
      <ClientList clientList={clientList} />
      <Button onClick={() => addClient()}>Add +</Button>
    </Container>
  );
}

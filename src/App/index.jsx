import React from 'react';
import { Container } from 'reactstrap';
import { ClientList } from '../ClientList';
import { NavBar } from '../NavBar';

export function App() {
  return (
    <Container>
      <NavBar />
      <ClientList />
    </Container>
  );
}

import React from 'react';
import { Container } from 'reactstrap';
import AppRoutes from '../../AppRoutes';
import NavBar from '../NavBar';

export default function App() {

  return (
    <Container>
      <NavBar />
      <AppRoutes />
    </Container>
  );
}

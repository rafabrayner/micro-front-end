import React from 'react';
import { Container } from 'reactstrap';
import AppRoutes from '../AppRoutes';
import NavBar from '../components/NavBar';

export default function MainContainer() {

  return (
    <Container>
      <NavBar />
      <AppRoutes />
    </Container>
  );
}

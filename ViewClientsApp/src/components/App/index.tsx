import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import ViewClients from '../../pages/ViewClients';

export default function App() {

  const navigate = useNavigate();

  return (
    <Container>
      <ViewClients navigate={navigate}/>
    </Container>
  );
}

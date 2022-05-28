import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import CreateClient from '../../pages/CreateClient';

export default function App() {

  const navigate = useNavigate();

  return (
    <Container>
      <CreateClient navigate={navigate}/>
    </Container>
  );
}

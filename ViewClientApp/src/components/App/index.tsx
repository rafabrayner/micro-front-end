import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import ViewClient from '../../pages/ViewClient';

export default function App() {

  
  return (
    <Routes>
      <Route path='/'>
        <Route path=':clientId' element={
        <Container>
          <ViewClient />
        </Container>} />
      </Route>
    </Routes>
  );
}

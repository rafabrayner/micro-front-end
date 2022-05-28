import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import ViewClient from '../../pages/ViewClient';

export default function App() {

  const navigate = useNavigate();
  
  return (
    <Routes>
      <Route path='/'>
        <Route path=':clientId' element={
        <Container>
          <ViewClient navigate={navigate}/>
        </Container>} />
      </Route>
    </Routes>
  );
}

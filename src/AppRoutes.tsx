import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddClient from './pages/AddClient';
import ViewClients from './pages/ViewClients';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ViewClients />} />
      <Route path="/create" element={<AddClient />} />
    </Routes>
  );
}
import React, { Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const ViewClientsApp = React.lazy(() => import('viewClients/ViewClientsApp'));
const CreateClientApp = React.lazy(() => import('createClient/CreateClientApp'));

export default function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<div>Loading...</div>}>
          <ViewClientsApp />
        </Suspense>} />
      <Route path="/create" element={
        <Suspense fallback={<div>Loading...</div>}>
          <CreateClientApp navigate={navigate}/>
        </Suspense>
      } />
    </Routes>
  );
}
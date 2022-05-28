import React, { Suspense } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

const ViewClientsApp = React.lazy(() => import('viewClients/ViewClientsApp'));
const CreateClientApp = React.lazy(() => import('createClient/CreateClientApp'));
const ViewClientApp = React.lazy(() => import('viewClient/ViewClientApp'));

export default function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<div>Loading...</div>}>
          <ViewClientsApp navigate={navigate} />
        </Suspense>} />
      <Route path='/create' element={
        <Suspense fallback={<div>Loading...</div>}>
          <CreateClientApp navigate={navigate} />
        </Suspense>} />
      <Route path='/client'>
        <Route path=':clientId' element={
          <Suspense fallback={<div>Loading...</div>}>
            <ViewClientApp navigate={navigate} />
          </Suspense>} />
      </Route>

    </Routes>
  );
}
import React, { useEffect, useState } from 'react';
import Client from '../models/client';
import ClientList from '../components/ClientList';
import { getClients } from '../services/clientService';

export default function ViewClients() {

  const [clientList, setClientList] = useState<Client[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await getClients();
    setClientList(response.data)
  }

  return (
    <ClientList clientList={clientList} />
  );
}
import React, { useEffect, useState } from 'react';
import Client from '../models/client';
import ClientList from '../components/ClientList';
import { getClients } from '../services/clientService';
import { NavigateFunction } from 'react-router-dom';

type ViewClientsProps = {
  navigate: NavigateFunction
}

export default function ViewClients(props: ViewClientsProps) {

  const [clientList, setClientList] = useState<Client[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await getClients();
    setClientList(response.data)
  }

  return (
    <ClientList clientList={clientList} navigate={props.navigate} />
  );
}
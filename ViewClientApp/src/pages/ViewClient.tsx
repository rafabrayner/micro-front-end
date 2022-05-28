import React, { useEffect, useState } from 'react';
import { NavigateFunction, useParams } from 'react-router-dom';
import ClientCard from '../components/ClientCard';
import Client from '../models/client';
import { getClientById } from '../services/clientService';


type ViewClientProps = {
  navigate: NavigateFunction
}

export default function ViewClient(props: ViewClientProps) {

  const { clientId } = useParams();
  const [client, setClient] = useState<Client>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await getClientById(+clientId!);
    setClient(response.data)
  }

  return (
    <ClientCard client={client!} navigate={props.navigate}/>
  );
}

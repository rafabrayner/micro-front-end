import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import ClientForm from '../components/ClientForm';

type CreateClientProps = {
  navigate: NavigateFunction
}

export default function CreateClient(props: CreateClientProps) {

  return (
    <ClientForm navigate={props.navigate}/>
  );
}

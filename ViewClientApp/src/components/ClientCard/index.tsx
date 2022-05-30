import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import Client from '../../models/client';
import calculateBMI from '../../utils/calculateBMI';

type ClientCardProps = {
  client: Client;
}

export default function ClientCard(props: ClientCardProps) {

  const navigate = useNavigate();

  return (
    <>
      <h1>Client</h1>
      <p><strong>Name:</strong> {props.client?.nome}</p>
      <p><strong>Weight:</strong> {props.client?.peso}</p>
      <p><strong>Height:</strong> {props.client?.altura}</p>
      <p><strong>Gender:</strong> {props.client?.sexo}</p>
      <p><strong>Gender:</strong> {calculateBMI(props.client?.peso!, props.client?.altura!).toFixed(2)}</p>
      <Button onClick={() => navigate('/')}>Back</Button>
    </>
  );
}

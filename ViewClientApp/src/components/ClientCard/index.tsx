import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Button } from 'reactstrap';
import Client from '../../models/client';
import calculateBMI from '../../utils/calculateBMI';

type ClientCardProps = {
  client: Client;
  navigate: NavigateFunction
}

export default function ClientCard(props: ClientCardProps) {

  return (
    <>
      <h1>Client</h1>
      <p><strong>Name:</strong> {props.client?.nome}</p>
      <p><strong>Weight:</strong> {props.client?.peso}</p>
      <p><strong>Height:</strong> {props.client?.altura}</p>
      <p><strong>Gender:</strong> {props.client?.sexo}</p>
      <p><strong>Gender:</strong> {calculateBMI(props.client?.peso!, props.client?.altura!)}</p>
      <Button onClick={() => props.navigate('/')}>Back</Button>
    </>
  );
}

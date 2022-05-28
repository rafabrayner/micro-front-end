import React, { useState } from 'react';
import { NavigateFunction } from 'react-router';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Client from '../../models/client';
import { createClient } from '../../services/clientService';

type ClientFormProps = {
  navigate: NavigateFunction
}

export default function ClientForm(props: ClientFormProps) {

  const [name, setName] = useState<string>('');
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [gender, setGender] = useState<string>('Male');


  const onSubmit = async function (event: React.SyntheticEvent) {
    event.preventDefault();

    const client: Client = {
      nome: name,
      peso: weight,
      altura: height,
      sexo: gender
    };

    try {
      await createClient(client);
      props.navigate('/');
    } catch (error) {
      alert('Could not create the client');
      console.error(error);
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input id="name" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}></Input>
        <Label for="weight">Weight</Label>
        <Input id="weight" type="number" placeholder="Weight" step="0.01" onChange={(event) => setWeight(+event.target.value)}></Input>
        <Label for="height">Height</Label>
        <Input id="height" type="number" placeholder="Height" step="0.01" onChange={(event) => setHeight(+event.target.value)}></Input>
        <Label for="name">Gender</Label>
        <Input id="gender" type="select" onChange={(event) => setGender(event.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Male</option>
        </Input>
      </FormGroup>
      <Button color="primary">Create</Button>
    </Form>
  );
}

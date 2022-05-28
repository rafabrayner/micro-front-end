import Client from '../models/client';
import { api } from './api';

export const getClients = function() {
  return api.get<Client[]>('/clientes');
} 

export const createClient = function(client: Client) {
  return api.post<Client>('/clientes', client);
} 

export const getClientById = function(id: number) {
  return api.get<Client>(`/clientes/${id}`);
} 

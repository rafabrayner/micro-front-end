import Client from '../models/client';
import { api } from './api';

export const getClients = function() {
  return api.get<Client[]>('/client');
} 

export const createClient = function(client: Client) {
  return api.post<Client>('/client', client);
} 

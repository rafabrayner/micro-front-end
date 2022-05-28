import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    client: Model,
  },

  seeds(server) {
    server.db.loadData({
      clients: [
        {
          id: 1,
          name: "John",
          weight: 75,
          height: 1.75,
          gender: "Male"
        },
        {
          id: 2,
          name: "Maria",
          weight: 60,
          height: 1.55,
          gender: "Female"
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/client', () => {
      return this.schema.all('client').models;
    });

    this.post('/client', (schema, request) => {
      const client = JSON.parse(request.requestBody);
      return this.schema.create('client', client);
    });
  }
});

const root = ReactDom.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

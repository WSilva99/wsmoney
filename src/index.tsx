import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          type: 'deposit',
          title: 'Desenvolvimento Website',
          amount: 2000.00,
          category: 'Desenvolvimento',
          createdAt: new Date('2022-05-10 09:00:00')
        },
        {
          id: 2,
          type: 'withdraw',
          title: 'Combo 2x Hamburguers e fritas',
          amount: 24.99,
          category: 'Alimentação',
          createdAt: new Date('2022-05-11 18:30:00')
        },
        {
          id: 3,
          type: 'withdraw',
          title: 'Combo 2x Milk Shacks',
          amount: 16.00,
          category: 'Alimentação',
          createdAt: new Date('2022-05-11 18:30:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', {...data, createdAt: new Date()});
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


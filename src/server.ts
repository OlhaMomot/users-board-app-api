import { Request, Response } from 'express';

const express = require('express');
const cors = require('cors');
const UserController = require('./controllers/users.controller');

const PORT = 443;
const CLIENT_ORIGIN = 'http://localhost:3000/';
const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

app.get('/', (req: Request, res: Response) => {
    res.end('Hello!');
});

app.get('/users', UserController.getAll);

app.post('/users', UserController.create);

app.get('/users/:userId', UserController.getById);

app.get('/colors', (req: Request, res: Response) => {
  res.send(colors);
});

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
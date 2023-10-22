const express = require('express');
import { Request, Response } from 'express';
const cors = require('cors');
const dotenv = require('dotenv');
const UserController = require('./controllers/users.controller');
const ColorController = require('./controllers/colors.controller');

dotenv.config();

import { connect } from './utils/db-setup';

connect();

const PORT = 5000;
const CLIENT_ORIGIN = process.env.CLIENT_URL;
const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.get('/', (req: Request, res: Response) => {
    res.end('Hello!');
});

app.get('/users', UserController.getAll);

app.post('/users', UserController.create);

app.get('/users/:userId', UserController.getById);

app.get('/colors', ColorController.getColors);

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
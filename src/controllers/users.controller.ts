const UserService = require('../services/users.service');
import { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
  const users = await UserService.getAll();

  res.send(users);
}; 

export const create = async (req: Request, res: Response) => {
  const { name, carColorId } = req.query;

  if (typeof name !== 'string'
    || typeof carColorId !== 'number') {
      res.sendStatus(422);

      return;
    }
  
  const newUser = await UserService.create(name, carColorId);

  res.status(201);
  res.send(newUser);
};

export const getById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const user = await UserService.getById(+userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
};

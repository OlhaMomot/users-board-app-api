import { User } from "../models/User";

export const getAll = () => {
  return User.findAll();
}

export const create = ({ name, carColorId }: Omit<User, 'id'>) => {
  return User.create({
    name,
    carColorId,
  });
}

export const findById = (userId: number) => {
  return User.findByPk(userId);
}

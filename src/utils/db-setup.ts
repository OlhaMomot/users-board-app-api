import { Sequelize } from 'sequelize-typescript';
import { Color } from '../models/Color';
import { User } from '../models/User';

const DB_URI = 'postgres://olha:uopiawDK9TwQsXoccWATwlnFUbhlIugI@dpg-ckq0n81rfc9c73ecrp20-a.frankfurt-postgres.render.com/users_data_vmqt';

const sequelize = new Sequelize(DB_URI, {
  models: [Color, User],
  dialectOptions: {
    ssl: true,
  }
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function reset() {
  await sequelize.sync({ force: true });
}

async function fillDbWithData() {
  const users = [
    { name: 'Joe Biden', carColorId: 5 },
    { name: 'Elon Musk', carColorId: 4 },
    { name: 'Pan Roman', carColorId: 2 },
  ];

  const colors = [
    { name: 'Black' },
    { name: 'DeepPink' },
    { name: 'Red' },
    { name: 'Aquamarine' },
    { name: 'Gold' },
    { name: 'YellowGreen' },
    { name: 'Yellow' },
  ];

  await Color.bulkCreate(colors);
  await User.bulkCreate(users);
}

export function clear(){
  connect()
  .then(reset)
  .then(fillDbWithData)
}

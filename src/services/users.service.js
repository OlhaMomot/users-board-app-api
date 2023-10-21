const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

function getMaxId(elements) {
  const ids = elements.map(({ id }) => id);

  return Math.max(...ids) + 1;
}

function getAll() {
  return users;
}

function create({ name, carColorId }) {
  const newUser = {
    id: getMaxId(users),
    name,
    carColorId,
  }

  users.push(newUser);

  return newUser;
}

function getById(userId) {
  const users = getAll();
  const user = users.find(({ id }) => id === userId);

  return user;
}

module.exports = {
  getAll,
  create,
  getById,
}

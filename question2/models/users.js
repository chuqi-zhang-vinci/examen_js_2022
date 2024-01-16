const path = require('node:path');
// eslint-disable-next-line import/no-unresolved
const { v4: uuidv4 } = require('uuid');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUsers = [];

function createNewUser(nomUtilisateur, adresseMail) {
  const users = parse(jsonDbPath, defaultUsers);

  const createdUser = {
    id: uuidv4(),
    nomUtilisateur,
    adresseMail,
  };

  users.push(createdUser);
  serialize(jsonDbPath, users);

  return JSON.stringify({ id: createdUser.id });
}

module.exports = { createNewUser };

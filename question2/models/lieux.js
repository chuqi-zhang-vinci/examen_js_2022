const path = require('node:path');
// eslint-disable-next-line import/no-unresolved
const { v4: uuidv4 } = require('uuid');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/locations.json');

const defaultLocations = [];

function createNewLocation(nom, description) {
  const lieux = parse(jsonDbPath, defaultLocations);

  const createdLocation = {
    id: uuidv4(),
    nom,
    description,
  };

  lieux.push(createdLocation);
  serialize(jsonDbPath, lieux);

  return JSON.stringify({ id: createdLocation.id });
}

module.exports = { createNewLocation };

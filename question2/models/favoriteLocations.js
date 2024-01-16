const path = require('node:path');
// eslint-disable-next-line import/no-unresolved
const { v4: uuidv4 } = require('uuid');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/favoriteLocations.json');
const jsonUsersPath = path.join(__dirname, '/../data/users.json');
const jsonLocationsPath = path.join(__dirname, '/../data/locations.json');

const defaultFavoriteLocations = [];
const defaultUsers = [];
const defaultLocations = [];

function createNewFavoriteLocation(idUser, idLocation) {
  const favoriteLocations = parse(jsonDbPath, defaultFavoriteLocations);
  const users = parse(jsonUsersPath, defaultUsers);
  const locations = parse(jsonLocationsPath, defaultLocations);

  if (users.some((user) => user.id === idUser)) {
    if (locations.some((location) => location.id === idLocation)) {
      if (favoriteLocations.some((favoriteLocation) => favoriteLocation.idUser === idUser
       && favoriteLocation.idLocation === idLocation)) {
        throw new Error('utilisateur a déjà ce lieu dans ses favoris');
      } else {
        const createdFavoriteLocation = {
          id: uuidv4(),
          idUser,
          idLocation,
        };

        favoriteLocations.push(createdFavoriteLocation);
        serialize(jsonDbPath, favoriteLocations);

        return JSON.stringify({ id: createdFavoriteLocation.id });
      }
    }
    throw new Error('invalid location');
  } else {
    throw new Error('invalid user');
  }
}

module.exports = { createNewFavoriteLocation };

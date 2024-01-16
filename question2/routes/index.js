const express = require('express');
const { createNewLocation } = require('../models/lieux');
const { createNewUser } = require('../models/users');
const { createNewFavoriteLocation } = require('../models/favoriteLocations');

const router = express.Router();

router.post('/lieu', (req, res) => {
  const nom = req?.body?.nom;
  const description = req?.body?.description;

  if (!nom && nom === null) return res.sendStatus(400);
  if (!description && description === null) return res.sendStatus(400);

  return res.json(createNewLocation(nom, description));
});

router.post('/user', (req, res) => {
  const nom = req?.body?.nom;
  const email = req?.body?.email;

  if (!nom && nom === null) return res.sendStatus(400);
  if (!email && email === null) return res.sendStatus(400);

  return res.json(createNewUser(nom, email));
});

router.post('/favorite', (req, res) => {
  const user = req?.body?.user;
  const location = req?.body?.location;

  if (!user && user === null) return res.sendStatus(400);
  if (!location && location === null) return res.sendStatus(400);

  return res.json(createNewFavoriteLocation(user, location));
});

module.exports = router;

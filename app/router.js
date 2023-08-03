const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const typeController = require('./controllers/typeController');
const detailController = require('./controllers/detailController');


router.get('/', mainController.homePage);
router.get('/types', typeController.getTypesOfPokemon);
router.get('/:typeId', typeController.getAllPokemonByTypes)
router.get('/pokemonDetail/:pokemonId', detailController.getPokemonDetail)



module.exports = router;
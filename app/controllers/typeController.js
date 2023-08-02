const dataMapper = require('../dataMapper.js');

const typeController = {
    getTypesOfPokemon: async (req, res) => {
    try {
      const pokemonTypes = await dataMapper.getPokemonType();
      res.render('types', { pokemonTypes });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  getAllPokemonByTypes: async (req, res) => {
    try {
        const typeId = +req.params.typeId;
        const pokemonByTypes = await dataMapper.getPokemonByTypes(typeId);
        res.render('home', { pokemons: pokemonByTypes });
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
  },
};

module.exports = typeController;
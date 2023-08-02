const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const pokemons = await dataMapper.getAllPokemon();
      res.render('home', { pokemons });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  }
};

module.exports = mainController;
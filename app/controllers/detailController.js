const dataMapper = require('../dataMapper.js');

const detailController = {
  getPokemonDetail: async (req, res) => {
    const pokemonId = +req.params.pokemonId;
    try {
        
        const getPokemonDetailById = await dataMapper.getPokemonById(pokemonId);
        if (getPokemonDetailById.length > 1) {
            getPokemonDetailById[0].second_name = getPokemonDetailById[1].name;
            getPokemonDetailById[0].second_color = getPokemonDetailById[1].color;
        }; 
        res.render('detail', { pokemon: getPokemonDetailById[0] });
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
  },
};

module.exports = detailController;
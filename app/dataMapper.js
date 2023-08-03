const database = require('./database');

const dataMapper = {

  async getAllPokemon () {
    const query = 'SELECT * FROM pokemon';
    const result = await database.query(query);
    return result.rows;
  },

  async getPokemonType () {
    const query = 'SELECT * FROM type';
    const result = await database.query(query);
    return result.rows;
  },

  async getPokemonByTypes (typeId) {
    const query =  {
      text: `SELECT p.id, p.nom, p.numero, pt.pokemon_numero 
      FROM
       pokemon AS p 
       JOIN 
       pokemon_type AS pt 
       ON 
       p.numero = pt.pokemon_numero 
       WHERE 
       pt.type_id = $1`,
      values: [typeId],
    };
    const result = await database.query(query);
    return result.rows;
  },

  async getPokemonById (id) {
    const query = {
      text: `SELECT * FROM 
      pokemon AS p 
      JOIN 
      pokemon_type AS pt 
      ON 
      p.numero = pt.pokemon_numero 
      JOIN 
      type AS t 
      ON 
      pt.type_id = t.id WHERE p.id = $1`,
      values: [id] 
    };
    const result = await database.query(query);
    return result.rows;
  },


}

module.exports = dataMapper;
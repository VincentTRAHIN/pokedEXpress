// Recupération module dotenv et configuration
const dotenv = require('dotenv').config();
// Recupération module express
const express = require('express');

// Recupération router.js
const router = require('./app/router.js');

const app = express();

// on ajoute un body-parser pour avoir accès à "request.body" dans les controlleurs
app.use(express.urlencoded({ extended: true }));

// Recupération des views
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Recupération fichier static
app.use(express.static('public'));


// Appel du Router
app.use(router);

// Lancement du serveur
            // Appel le PORT du dossier .env
app.listen(process.env.PORT, () => {
    console.log(
      `Vous êtes dans le serveur du Pokedex du Professeur Chen sur http://localhost:${process.env.PORT}`
    );
});
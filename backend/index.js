const express = require('express');
const app = express();
const port = 8081; // Vous pouvez choisir n'importe quel port que vous préférez

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Endpoint racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre serveur Express !');
});

// Exemple de route avec un paramètre
app.get('/api/:parametre', (req, res) => {
  const parametre = req.params.parametre;
  res.json({ message: `Vous avez fourni le paramètre : ${parametre}` });
});

// Serveur écoutant sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});

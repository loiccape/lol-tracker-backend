// index.js
require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const app = express();
const riotRoutes = require('./routes/accountRoutes');

const PORT = process.env.PORT || 5000;

// Utiliser les routes définies dans 'riotRoutes'
app.use(riotRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

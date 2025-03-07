// routes/riotRoutes.js
const express = require('express');
const router = express.Router();
const riotService = require('../services/accountService');

router.get('/riot/account/:gameName/:tagLine', async (req, res) => {
  const { gameName, tagLine } = req.params;

  try {
    const accountData = await riotService.getRiotAccountPuuid(gameName, tagLine);
    res.json(accountData);  // Retourner les données du compte
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

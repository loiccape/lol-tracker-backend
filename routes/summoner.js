const express = require('express');
const { getSummonerData } = require('../services/riotService');
const router = express.Router();

router.get('/:summonerName/:tag', async (req, res) => {
    const { summonerName, tag } = req.params;
    const data = await getSummonerData(summonerName, tag);
    res.json(data);
});

module.exports = router;

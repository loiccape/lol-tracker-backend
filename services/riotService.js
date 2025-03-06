const fetch = require('node-fetch');
require('dotenv').config();

const RIOT_API_KEY = process.env.RIOT_API_KEY;

async function getSummonerData(summonerName, tag) {
    const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tag}?api_key=${RIOT_API_KEY}`;
    const response = await fetch(url);
    return response.json();
}

module.exports = { getSummonerData };

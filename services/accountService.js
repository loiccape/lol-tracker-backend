// services/riotService.js
const axios = require('axios');

const RIOT_API_KEY = process.env.RIOT_API_KEY; // Utiliser une clé API dans .env

async function getRiotAccountPuuid(gameName, tagLine) {
  try {
    const response = await axios.get(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${RIOT_API_KEY}`);

    return response.data.puuid;  // Retourner les données de l'API Riot
  } catch (error) {
    throw new Error('Error fetching data from Riot API');
  }
}

module.exports = {
  getRiotAccountPuuid,
};

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
    res.json({ status: 'API is running' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const summonerRoutes = require('./routes/summoner');
app.use('/summoner', summonerRoutes);

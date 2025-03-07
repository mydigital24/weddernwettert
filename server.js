const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get('https://app.weathercloud.net/d9973843518');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Fehler beim Abrufen der Daten');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy läuft auf Port ${PORT}`);
});

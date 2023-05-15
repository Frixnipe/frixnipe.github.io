const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 9001;

// Enable CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/messages/:channelId', (req, res) => {
  const channelId = req.params.channelId;
  const discordApiUrl = `https://discord.com/api/v9/channels/${channelId}/messages`;

  fetch(discordApiUrl, {
    headers: {
      'Authorization': 'MTEwNzY1MDEwODc1NTAyNTkyMA.Go665S.ehOA_GQM6w4TBn6HyXETs2GagiJkbMgJmwNshQ' // Replace with your Discord bot token
    }
  })
    .then(response => response.json())
    .then(data => {
      const messages = data.map(message => message.content);
      const serializedMessages = messages.join('¤');
      res.send(serializedMessages);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching messages from Discord.');
    });
});

app.listen(port, () => {
  console.log(`Discord server listening at http://localhost:${port}`);
});

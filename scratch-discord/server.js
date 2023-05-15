const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 9001;

app.use(express.json());

app.get('/messages/:channelId', (req, res) => {
  const channelId = req.params.channelId;
  const discordApiUrl = `https://discord.com/api/v9/channels/${channelId}/messages`;

  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) {
    return res.status(500).send('Discord bot token is not provided.');
  }

  fetch(discordApiUrl, {
    headers: {
      'Authorization': `Bot ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const messages = data.map(message => `${message.author.username}: ${message.content}`);
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

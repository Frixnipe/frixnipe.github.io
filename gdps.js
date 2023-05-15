const channelId = 'YOUR_CHANNEL_ID'; // Replace with the desired channel ID

fetch(`https://discord.com/api/v9/channels/${channelId}/messages`, {
  method: 'GET',
  headers: {
    'Authorization': 'YOUR_DISCORD_BOT_TOKEN' // Replace with your Discord bot token
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the messages
    const messages = data.map(message => message.content);
    const serializedMessages = messages.join('¤');
    console.log(serializedMessages); // Replace with your desired handling of the messages
  })
  .catch(error => console.error(error));

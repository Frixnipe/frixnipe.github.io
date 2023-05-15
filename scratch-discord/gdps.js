(function (extension) {
  const API_ENDPOINT = 'https://discord.com/channels/';

  extension._shutdown = function () {};

  extension._getStatus = function () {
    return {
      status: 2,
      msg: 'Ready',
    };
  };

  extension.fetchMessages = function (channelId, token, callback) {
    const url = `${API_ENDPOINT}${channelId}`;
    fetch(url, {
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => response.text())
      .then((data) => {
        const messages = data.split('¤');
        callback(messages);
      })
      .catch((error) => {
        console.error(error);
        callback([]);
      });
  };

  Scratch.extensions.register('Discord', extension);
})(function () {});

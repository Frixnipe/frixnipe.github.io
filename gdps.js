(function (Scratch) {
  'use strict';

  class Discord {
    getInfo() {
      return {
        id: 'discord',
        name: 'Discord',
        blocks: [
          {
            opcode: 'fetchMessages',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fetch messages from Discord channel [CHANNEL_ID]',
            arguments: {
              CHANNEL_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'CHANNEL_ID',
              },
            },
          },
        ],
      };
    }

    fetchMessages(args) {
      const channelId = args.CHANNEL_ID;
      const apiUrl = `https://discord.com/channels/${channelId}`;

      return Scratch.fetch(apiUrl)
        .then((response) => response.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Discord());
})(Scratch);

(function (ext) {
  const baseUrl = 'https://boomlings.com/database/';
  let online = false;

  ext._getStatus = function () {
    if (online) {
      return { status: 2, msg: 'Server online' };
    } else {
      return { status: 1, msg: 'Server offline' };
    }
  };

  ext.setDatabase = function (databaseUrl) {
    if (databaseUrl === '') {
      databaseUrl = baseUrl;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', databaseUrl + 'getGJLevels21.php', true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        online = true;
      } else {
        online = false;
      }
    };
  };

  ext.getLevelData = function (id, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', baseUrl + 'downloadGJLevel22.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`gameVersion=21&binaryVersion=35&gdw=0&levelID=${id}&inc=1&extras=0&secret=Wmfd2893gb7`);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = xhr.responseText.split('#')[0].split(':');
        const levelData = {
          name: response[2],
          id: parseInt(response[1]),
          description: response[3],
          version: parseInt(response[5]),
          creatorName: response[6],
          difficulty: parseInt(response[9]),
          downloads: parseInt(response[10]),
          officialSong: parseInt(response[12]),
          customSong: parseInt(response[13]),
          likes: parseInt(response[14]),
          length: parseInt(response[15]),
          stars: parseInt(response[18]),
          coins: parseInt(response[19]),
          verified: parseInt(response[20]) === 1,
          epic: parseInt(response[21]) === 1,
          featured: parseInt(response[31]) === 1,
          rating: parseFloat(response[37]),
          objectCount: parseInt(response[38]),
          objectCount2: parseInt(response[39]),
        };
        callback(levelData);
      }
    };
  };

  ext.getAccountData = function (id, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', baseUrl + 'getGJUserInfo20.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`gameVersion=21&binaryVersion=35&gdw=0&accountID=${id}&gjp=${gjp}&getExt=1`);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = xhr.responseText.split(':');
        const accountData = {
          userName: response[1],
          userID: parseInt(response[2]),
          stars: parseInt(response[3]),
          diamonds: parseInt(response[4]),
          coins: parseInt(response[13]),
          userCoins: parseInt(response[17]),
          demons: parseInt(response[8]),
          cp: parseInt(response[11]),
          accountType: parseInt(response[18]),
          friendRequests: parseInt(response[19]),
          messages: parseInt(response[20]),
          commentHistory: parseInt(response[21]),
          moderator: parseInt(response[48]) === 1,
          youtube: response[50] === '1',
       

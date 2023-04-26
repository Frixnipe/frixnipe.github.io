(function(ext) {
    var xmlhttp = new XMLHttpRequest();
    var database = "https://boomlings.com/database/";
    var online = false;
    var level_deleted = false;

ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
};


    function get_request(action, parameter, callback) {
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            }
        };
        xmlhttp.open("POST", database + action + ".php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameter);
    }

    function get_level_info(id, callback) {
        var str = "gameVersion=21&binaryVersion=35&gdw=0&id=" + id;
        get_request("getGJLevels21", str, callback);
    }

    function get_account_info(id, callback) {
        var str = "gameVersion=21&binaryVersion=35&gdw=0&targetAccountID=" + id;
        get_request("getGJUserInfo20", str, callback);
    }

    function get_level_comments(id, page, callback) {
        var str = "gameVersion=21&binaryVersion=35&gdw=0&page=" + page + "&total=0&count=9999&mode=0&levelID=" + id + "&secret=Wmfd2893gb7";
        get_request("getGJComments21", str, callback);
    }

    function get_leaderboard(id, callback) {
        var str = "gameVersion=21&binaryVersion=35&gdw=0&levelID=" + id + "&type=0&str=&diff=-&count=100&secret=Wmfd2893gb7";
        get_request("getGJScores21", str, callback);
    }

    ext.set_database = function(link) {
        database = link;
    };

    ext.get_level_info = function(id, callback) {
        get_level_info(id, callback);
    };

    ext.get_account_info = function(id, callback) {
        get_account_info(id, callback);
    };

    ext.get_level_comments = function(id, page, callback) {
        get_level_comments(id, page, callback);
    };

    ext.get_leaderboard = function(id, callback) {
        get_leaderboard(id, callback);
    };

    ext.is_server_online = function(callback) {
        get_request("getGJUserData20", "gameVersion=21&binaryVersion=35&gdw=0&accountID=1", function(response) {
            if (response.indexOf("<body>") == -1) {
                online = true;
            } else {
                online = false;
            }
            callback(online);
        });
    };

    ext.is_level_deleted = function(id, callback) {
        var str = "gameVersion=21&binaryVersion=35&gdw=0&levelID=" + id;
        get_request("downloadGJLevel22", str, function(response) {
            if (response == -1) {
                level_deleted = true;
            } else {
                level_deleted = false;
            }
            callback(level_deleted);
        });
    };

    // Block and block menu descriptions
var descriptor = {
    blocks: [
        // Existing blocks
        [" ", "set database to %s", "set_database", "https://boomlings.com/database/"],
        ["b", "is server online", "is_server_online"],
        ["R", "get info of level ID %n", "get_level_info", 66250232],
        ["R", "fetch account with ID %n", "get_account_info", 14253397],
        ["R", "fetch comments of level with ID %n page %n", "get_level_comments", 66250232, 2],
        ["R", "fetch global leaderboard", "get_leaderboard"],
        ["b", "level with ID %n deleted?", "is_level_deleted", 66250232],

        // New custom block
        ["R", "check value of %m.property in %m.type %n", "check_value", "level", "info", 66250232],
    ],
    menus: {
        type: ["level", "account", "comment", "score"],
        property: {
            level: ["name", "description", "author", "difficulty", "downloads", "likes", "length", "coins", "verified", "song"],
            account: ["username", "playerID", "stars", "demons", "diamonds", "CP", "accountID", "rank", "icon", "color1", "color2"],
            comment: ["text", "authorID", "likes", "percent", "date"],
            score: ["username", "playerID", "stars", "demons", "diamonds", "CP", "rank", "icon", "color1", "color2"],
        },
    },
};

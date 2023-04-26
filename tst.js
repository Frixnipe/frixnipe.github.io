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
  
    var descriptor = {
        blocks: [
            [" ", "set database to %s", "set_database", "https://boomlings.com/database/"],
            ["R", "get info of level ID %n", "get_level_info", 66250232]
        ]
    };

    ScratchExtensions.register('Geometry Dash Extension', descriptor, ext);

})({});

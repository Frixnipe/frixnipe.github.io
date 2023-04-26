(function (ext) {

    // Default database server
    var databaseUrl = "https://boomlings.com/database/";

    // Constants for endpoints
    var LEVEL_ENDPOINT = "getGJLevels21.php";
    var ACCOUNT_ENDPOINT = "getGJUserInfo20.php";
    var COMMENT_ENDPOINT = "getGJComments21.php";
    var SEARCH_ENDPOINT = "getGJLevels21.php";

    // Constants for modes
    var LEVEL_MODE = 0;
    var ACCOUNT_MODE = 1;
    var COMMENT_MODE = 2;

    // Constants for leaderboard types
    var FRIENDS_LEADERBOARD = 0;
    var GLOBAL_LEADERBOARD = 1;

    // Constants for demon difficulties
    var DEMON_DIFFICULTIES = [
        "Easy",
        "Medium",
        "Insane",
        "Hard",
        "Harder",
        "Extreme",
        "Demon",
        "Auto"
    ];

    // Constants for reward types
    var REWARD_TYPES = [
        "Stars",
        "Diamonds",
        "Shards",
        "Orbs",
        "Coins",
        "User Coins",
        "Demons",
        "Creator Points"
    ];

    // Boolean for checking if the database is online
    var isDatabaseOnline = false;

    // Array to store all fetched levels
    var fetchedLevels = [];

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block to set the database URL
            [" ", "set database URL to %s", "setDatabaseUrl", databaseUrl],

            // Block to check if the database is online
            ["b", "database online?", "isDatabaseOnline"],

            // Blocks to fetch levels
            ["R", "fetch levels with %m.searchType %s %m.orderType %m.demonFilter %m.songFilter page %n", "fetchLevels", "keyword", "", "newest", "all", "all", 0],
            ["R", "level %m.levelInfo of level ID %n", "getLevelInfo", "name", 0],

            // Blocks to fetch accounts
            ["R", "fetch account with ID %n", "fetchAccount", 0],
            ["R", "account %m.accountInfo of current account", "getAccountInfo", "name"],

            // Blocks to fetch comments
            ["R", "fetch comments of level ID %n page %n", "fetchComments", 0, 0],
            ["R", "comment %m.commentInfo of comment ID %n", "getCommentInfo", "content", 0],

            // Blocks to fetch leaderboard
            ["R", "fetch %m.leaderboardType leaderboard of level ID %n", "fetchLeaderboard", "global", 0],

            // Block to check if a level is deleted
            ["b", "level with ID %n deleted?", "isLevelDeleted", 0],

            // Block to fetch a deleted level
            ["R", "fetch deleted level with ID %n", "fetchDeletedLevel", 0],

            // Block to get demon difficulty name
            ["r", "demon difficulty %m.demonDifficulty", "getDemonDifficultyName", "Easy"],

            // Block to get reward type name
            ["r", "reward type %m.rewardType", "getRewardTypeName", "Stars"]
        ],
        menus: {
            searchType: ["keyword", "user", "song"],
            orderType: ["newest", "rating", "downloads", "featured", "recent

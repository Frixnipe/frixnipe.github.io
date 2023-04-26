[{
    "opcode": "get_account",
    "type": "reporter",
    "message0": "Get account with ID %s",
    "args0": [
        {
            "type": "input_value",
            "name": "ACCOUNT_ID",
            "check": "Number"
        }
    ],
    "output": "JSON",
    "colour": 230
},
{
    "opcode": "get_level",
    "type": "reporter",
    "message0": "Get level with ID %s",
    "args0": [
        {
            "type": "input_value",
            "name": "LEVEL_ID",
            "check": "Number"
        }
    ],
    "output": "JSON",
    "colour": 230
},
{
    "opcode": "get_level_comments",
    "type": "reporter",
    "message0": "Get comments of level %s page %s",
    "args0": [
        {
            "type": "input_value",
            "name": "LEVEL_ID",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "PAGE",
            "check": "Number"
        }
    ],
    "output": "JSON",
    "colour": 230
},
{
    "opcode": "get_leaderboard",
    "type": "reporter",
    "message0": "Get leaderboard of level %s mode %m.leaderboard_modes",
    "args0": [
        {
            "type": "input_value",
            "name": "LEVEL_ID",
            "check": "Number"
        },
        {
            "type": "field_dropdown",
            "name": "LEADERBOARD_MODE",
            "options": [
                [
                    "Top",
                    "top"
                ],
                [
                    "Creator",
                    "creators"
                ]
            ]
        }
    ],
    "output": "JSON",
    "colour": 230
},
{
    "opcode": "is_server_online",
    "type": "Boolean",
    "message0": "Server online?",
    "output": "Boolean",
    "colour": 230
},
{
    "opcode": "is_level_deleted",
    "type": "Boolean",
    "message0": "Level with ID %s deleted?",
    "args0": [
        {
            "type": "input_value",
            "name": "LEVEL_ID",
            "check": "Number"
        }
    ],
    "output": "Boolean",
    "colour": 230
},
{
    "opcode": "get_deleted_level",
    "type": "reporter",
    "message0": "Get deleted level with ID %s",
    "args0": [
        {
            "type": "input_value",
            "name": "LEVEL_ID",
            "check": "Number"
        }
    ],
    "output": "JSON",
    "colour": 230
},
{
    "opcode": "set_database",
    "type": "command",
    "message0": "Set database to %s",
    "args0": [
        {
            "type": "field_input",
            "name": "DATABASE",
            "text": "https://boomlings.com/database/"
        }
    ],
    "colour": 230
}]


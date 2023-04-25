{
    "opcode": "myReporter",
    "blockType": "reporter",
    "text": "my reporter block with input [INPUT]",
    "arguments": {
        "INPUT": {
            "type": "string",
            "defaultValue": "default value"
        }
    }
}

Scratch.extensions.register(new (class {
    myReporter(args) {
        return args.INPUT;
    }
})());
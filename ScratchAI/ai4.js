(function(ext) {
    // Define your API credentials here
    let openaiApiKey = "";

    // Define your custom block here
    ext.generateText = function(prompt, callback) {
        $.ajax({
            url: "https://api.openai.com/v1/engines/davinci/completions",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openaiApiKey}`
            },
            data: JSON.stringify({
                prompt: prompt,
                max_tokens: 50
            }),
            success: function(data) {
                console.log(data);
                if (data.choices && data.choices.length > 0) {
                    callback(data.choices[0].text);
                } else {
                    callback("");
                }
            }
        });
    };

    ext.generateSound = function(prompt, name, callback) {
        $.ajax({
            url: "https://api.openai.com/v1/engines/whisper-1/completions",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openaiApiKey}`
            },
            data: JSON.stringify({
                prompt: prompt,
                max_tokens: 0
            }),
            success: function(data) {
                console.log(data);
                if (data.choices && data.choices.length > 0) {
                    const image = data.choices[0].image;
                    callback(image, name);
                } else {
                    callback(null, "");
                }
            }
        });
    };

    // Set the OpenAI API key
    ext.setApiKey = function(apiKey) {
        openaiApiKey = apiKey;
    };

    // Describe your custom blocks here
    var descriptor = {
        blocks: [
            ["R", "Generate text from prompt %s", "generateText", "Explain quantum computing in simple terms"],
            [" ", "Set OpenAI API key to %s", "setApiKey", ""],
            ["w", "Generate sound from prompt %s with name %s", "generateSound", "Generate a sound", "sound"]
        ]
    };

    // Register the extension
    ScratchExtensions.register("AI Extension", descriptor, ext);
})({});

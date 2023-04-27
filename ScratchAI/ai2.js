(function(ext) {
    // Define your API credentials here
    const openaiApiKey = window.openaiApiKey;

    // Define your custom block here
    ext.generateText = function(prompt, callback) {
        $.ajax({
            url: "https://api.openai.com/v1/engines/davinci-codex/completions",
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

    // Describe your custom block here
    var descriptor = {
        blocks: [
            ["R", "Generate text from prompt %s", "generateText", "Explain quantum computing in simple terms"]
        ]
    };

    // Register the extension
    ScratchExtensions.register("AI Extension", descriptor, ext);
})({});

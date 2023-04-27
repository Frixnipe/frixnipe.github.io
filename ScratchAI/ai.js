(function(ext) {

    // Define your API credentials here
    const openaiApiKey = "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";

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
                callback(data.choices[0].text);
            }
        });
    };

    // Describe your custom block here
    var descriptor = {
        blocks: [
            ["R", "generate text from prompt %s", "generateText"]
        ]
    };

    // Register the extension
    ScratchExtensions.register("AI Extension", descriptor, ext);
})({});

const apiKey = "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"; // Replace with your actual API key

const openai = new OpenAIApi(new openai.Configuration({
    apiKey: apiKey
}));

// Rest of the code remains the same


function displayMessage(message, role) {
    const chatOutput = document.getElementById("chatOutput");
    const messageElement = document.createElement("p");
    messageElement.textContent = `${role}: ${message}`;
    chatOutput.appendChild(messageElement);
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    s
    displayMessage(userInput, "User");

    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }]
    }).then(res => {
        const aiResponse = res.data.choices[0].message.content;
        displayMessage(aiResponse, "AI");
    });
}

const sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener("click", sendMessage);

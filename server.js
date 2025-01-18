const express = require("express");
const bodyParser = require("body-parser");
const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const apiKey = "AIzaSyA1-2I2gOUYu3T5GYXm5ereD3RsND2nuCk"; // Set your API key in the environment variables
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(message);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process the message" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

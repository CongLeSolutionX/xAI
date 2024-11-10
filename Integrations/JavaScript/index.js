import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "<YOUR_API_KEY>",
  baseURL: "https://api.x.ai/v1",
});

const openai = new OpenAIApi(configuration);

const getCompletion = async () => {
  try {
    const completion = await openai.createChatCompletion({
      model: "grok-beta",
      messages: [
        { role: "system", content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy." },
        {
          role: "user",
          content: "What is the meaning of life, the universe, and everything?",
        },
      ],
    });

    console.log(completion.data.choices[0].message);
  } catch (error) {
    console.error("Error creating completion:", error);
  }
};

getCompletion();

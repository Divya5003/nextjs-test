import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Tell me a random joke",
  });

  res.status(200).json({ text: `${completion.data.choices[0].text}` });
};
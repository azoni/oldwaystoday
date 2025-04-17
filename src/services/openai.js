import axios from "axios";

export const askGPT = async (userMessage) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant that suggests non-toxic, eco-friendly alternatives to household and personal products.`,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content;
};

export const askGPT = async (userMessage) => {
  console.log("Sending to GPT:", userMessage);

  const response = await fetch("/.netlify/functions/proxy-gpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: userMessage
    }),
  });
  console.log("userMessage: ", userMessage)
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No reply available.";
};

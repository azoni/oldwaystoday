// src/pages/Home.js
import React, { useState } from "react";
import { askGPT } from "../services/openai";
import "../App.css"; // or its own CSS if preferred
import ReactMarkdown from "react-markdown";

const Home = () => {
  const [messages, setMessages] = useState([
    {
        role: "system",
        content:`
        You are a kind and knowledgeable assistant that helps families find safe, non-toxic, and effective alternatives to common household and personal care products.
        Your goal is to recommend healthier, low-tox options that are practical and accessible. Use a warm and encouraging tone. Structure your answers clearly with generous line breaks for readability.
        
        When applicable:
        - Suggest multiple product options in a list
        - Include links to reputable purchase sources (only if valid and working)
        - Highlight potential trade-offs — including safety, affordability, ingredient concerns, and product effectiveness
        - Consider factors such as country of origin, presence of PFAS/PFOAs, heavy metals, synthetic fragrances, dyes, and plastic packaging
        
        Also, when possible:
        - Offer traditional or DIY alternatives that were used before mass production and plastic packaging
        - Explain why your recommendations are safer or more thoughtful than conventional products
        
        End responses by offering to explain any suggestion in more detail, including how it compares to mainstream products.`
    },
    {
        role: "assistant",
        content: `This is where the welcome message goes`
    }
    ,]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    const reply = await askGPT(newMessages);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  return (
    <div className="app-container">
      <h2>Old Ways Today</h2>
      <div className="chat-box">
        {messages
            .filter((msg) => msg.role !== "system")
            .map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
                <strong>{msg.role === "user" ? "You" : "GPT"}:</strong>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about a product..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Home;

// src/pages/Home.js
import React, { useState } from "react";
import { askGPT } from "../services/openai";
import "../App.css"; // or its own CSS if preferred
import ReactMarkdown from "react-markdown";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");

    const reply = await askGPT(input);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  return (
    <div className="app-container">
      <h2>Old Ways Today</h2>
      <div className="chat-box">
        {messages.map((msg, idx) => (
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

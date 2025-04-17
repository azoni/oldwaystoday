import React, { useState } from "react";
import { askGPT } from "./services/openai";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input.trim() };
    setInput("");

    const reply = await askGPT(input);
    setMessages((msgs) => [...msgs, userMsg, { role: "assistant", content: reply }]);
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
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        placeholder="Ask about a product..."
      />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;

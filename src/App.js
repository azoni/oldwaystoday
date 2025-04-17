import React, { useState } from "react";
import { askGPT } from "./services/openai";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");

    const reply = await askGPT(input);
    setMessages((msgs) => [...msgs, userMsg, { role: "assistant", content: reply }]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Safe Alternatives GPT</h2>
      <div style={{ minHeight: 300, marginBottom: 20 }}>
        {messages.map((msg, idx) => (
          <p key={idx}><strong>{msg.role}:</strong> {msg.content}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about a product..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;

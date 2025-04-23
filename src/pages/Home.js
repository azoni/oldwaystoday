// src/pages/Home.js
import React, { useEffect, useRef, useState } from "react";
import { askGPT } from "../services/openai";
import "../App.css"; // or its own CSS if preferred
import ReactMarkdown from "react-markdown";
import { suggestions, initialState } from "../resources/initialState";

const Home = () => {
  const getRandomSuggestion = () =>
    suggestions[Math.floor(Math.random() * suggestions.length)];

  const [placeholder, setPlaceholder] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialState);
  const chatBoxRef = useRef(null);
  const wasAtBottomRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    setPlaceholder(getRandomSuggestion());
  }, []);

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (!chatBox) return;
  
    if (wasAtBottomRef.current) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      const scrollOffset = chatBox.scrollTop + chatBox.clientHeight;
      const scrollHeight = chatBox.scrollHeight;
      wasAtBottomRef.current = scrollHeight - scrollOffset < 50;
    }
  
    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setPlaceholder(getRandomSuggestion());
  
    const reply = await askGPT(newMessages);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };
  return (
    <div className="app-container">
      <div className="chat-box" ref={chatBoxRef}>
        {messages
          .filter((msg) => msg.role !== "system")
          .map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <strong>{msg.role === "user" ? "You" : "Search"}:</strong>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="input-area">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          } else if (e.key === "Tab" && input.trim() === "") {
            e.preventDefault(); // prevent focus change
            setInput(placeholder);
          }
        }}
        placeholder={placeholder}
      />
        <button onClick={sendMessage}>Send</button>
      </div>
      <footer className="site-footer">
        <p>
          Products change and AI can make mistakes. Please verify that recommendations meet your needs.
        </p>
        <p>&copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

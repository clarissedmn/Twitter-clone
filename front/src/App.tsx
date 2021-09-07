import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((messages: { messageList: string[] }) => {
        setMessages(messages.messageList);
      });
  }, []);

  return (
    <div className="App">
      {messages.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default App;

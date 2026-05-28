import React, { useState } from "react";

import "./ChatBot.scss";

const ChatBot = () => {

  const [message, setMessage] = useState("");

  return (

    <div className="chatbot">

      <h1>Food Delivery Chatbot</h1>

      <input
        type="text"
        placeholder="Ask your question..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button>
        Send
      </button>

    </div>
  );
};

export default ChatBot;
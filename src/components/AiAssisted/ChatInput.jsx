import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full p-4 bg-black"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message PBGPT..."
        className="flex-1 p-3 mr-4 rounded-full border border-gray-300 bg-white text-black"
      />
      <button type="submit" className="p-3 bg-gray-500 text-white rounded-full">
        <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
      </button>
    </form>
  );
};

export default ChatInput;

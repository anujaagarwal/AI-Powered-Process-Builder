import React, { useState } from "react";
import ChatInput from "../components/AiAssisted/ChatInput";
import ChatHistory from "../components/AiAssisted/ChatHistory";

export default function AiAssisted() {
  const [chatHistory, setChatHistory] = useState([]);
  const [editingStep, setEditingStep] = useState(null);

  const handleSendMessage = async (message) => {
    setChatHistory([...chatHistory, { type: "user", text: `You: ${message}` }]);

    try {
      const response = await fetch(
        "http://localhost:3000/api/process-description",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: message }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Add response to chat history
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { type: "response", data: data },
        ]);
      } else {
        console.error("Failed to fetch response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditSave = async (processId, order, title, description) => {
    const originalStep = chatHistory
      .find((item) => item.type === "response")
      ?.data.steps.find((step) => step.order === order);
    if (
      !originalStep ||
      (originalStep.title === title && originalStep.description === description)
    ) {
      setEditingStep(null);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/update-step/${processId}/${order}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (response.ok) {
        const updatedStep = await response.json();
        // Update local state to reflect changes
        const updatedChatHistory = chatHistory.map((item) => {
          if (item.type === "response") {
            return {
              ...item,
              data: {
                ...item.data,
                steps: item.data.steps.map((step) =>
                  step.order === order ? updatedStep : step
                ),
              },
            };
          }
          return item;
        });

        setChatHistory(updatedChatHistory);
      } else {
        console.error("Failed to update step");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setEditingStep(null); // Stop editing regardless of success or failure
  };

  const handleEdit = (order) => {
    setEditingStep(order);
  };
  return (
    <div className="min-h-screen bg-black text-white bg-opacity-20 border border-gray-200 rounded-lg shadow-lg p-4 glassmorphism">
      <div className="p-4">
        <ChatHistory
          chatHistory={chatHistory}
          onEdit={handleEdit}
          onEditSave={handleEditSave}
          editingStep={editingStep}
        />
      </div>
      <div className="fixed inset-x-0 bottom-0 p-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

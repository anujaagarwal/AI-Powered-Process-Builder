// CreateProcess.js
import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

export default function CreateProcess({ onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description });
    // Reset the form fields
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h1>Create Process</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <InputField
            label="Name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button text="Create Process" type="submit" />
        </div>
      </form>
    </div>
  );
}

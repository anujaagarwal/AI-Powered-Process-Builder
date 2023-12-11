import { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import React from "react";
export default function EditStepForm({ step, onSave, onCancel, processId }) {
  const [title, setTitle] = useState(step.title);
  const [description, setDescription] = useState(step.description);

  const handleSave = () => {
    onSave(processId, step.order, title, description);
  };

  return (
    <div>
      <InputField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="text-black"
      />
      <div className="flex justify-end mt-4 gap-2">
        <Button onClick={handleSave} text="Save" />
        <Button onClick={onCancel} text="Cancel" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Button from "../common/Button";
import InputField from "../common/InputField";

export default function CreateStep({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meta, setMeta] = useState("");
  const [order, setOrder] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, description, meta, order });
    // Reset the form fields
    setTitle("");
    setDescription("");
    setMeta("");
    setOrder(0);
  };

  return (
    <div>
      <h1>Create Step</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <InputField
            label="Title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputField
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            label="MetaData"
            placeholder="Enter more data"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
          />
          <InputField
            label="Order"
            placeholder="Enter order of step"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          <Button text="Create Step" type="submit" />
        </div>
      </form>
    </div>
  );
}

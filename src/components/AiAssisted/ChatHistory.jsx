import React from "react";
import EditStepForm from "../ManualDefinition/EditStepForm";
import Button from "../common/Button";
export default function ChatHistory({
  chatHistory,
  onEdit,
  onEditSave,
  editingStep,
}) {
  return (
    <div>
      {chatHistory.map((item, index) => (
        <div
          key={index}
          className={`mb-2 p-2 ${
            item.type === "user" ? "bg-black" : "bg-white"
          } rounded`}
        >
          <p>{item.type === "user" ? item.text : "PBGPT:"}</p>
          {item.type === "response" &&
            item.data.steps &&
            item.data.steps.map((step) => (
              <div key={step.order} className="mb-2 p-2 bg-neutral-900 rounded">
                {editingStep === step.order ? (
                  <EditStepForm
                    processId={step.processId}
                    step={step}
                    onSave={onEditSave}
                    onCancel={() => onEdit(null)}
                  />
                ) : (
                  <>
                    <p>
                      Step {step.order}: {step.title}
                    </p>
                    <p>{step.description}</p>
                    <Button onClick={() => onEdit(step.order)} text="Edit" />
                  </>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

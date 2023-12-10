// components/ManualDefinition/StepListComponent.js
import React from "react";
import Button from "../common/Button";

const StepList = ({ steps, onEditStep, onDeleteStep, onStepChange }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-600 mb-3">Steps</h2>
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center"
        >
          {step.isEditing ? (
            <div>
              <input
                type="text"
                value={step.order}
                onChange={(e) => onStepChange(e, index, "order")}
                className="border p-2 mr-2"
              />
              <input
                type="text"
                value={step.title}
                onChange={(e) => onStepChange(e, index, "title")}
                className="border p-2 mr-2"
              />
              <input
                type="text"
                value={step.description}
                onChange={(e) => onStepChange(e, index, "description")}
                className="border p-2"
              />
            </div>
          ) : (
            <div>
              <p className="font-bold text-gray-800">
                Step {step.order}: {step.title}
              </p>
              <p className="text-gray-600">{step.description}</p>
            </div>
          )}
          <div>
            <button
              onClick={() => onEditStep(index)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              {step.isEditing ? "Save" : "Edit"}
            </button>
            <Button
              onClick={() => onDeleteStep(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              text="Delete"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepList;

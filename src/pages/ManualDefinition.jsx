// ManualDefinitionPage.js
import React, { useState } from "react";
import CreateProcess from "../components/ManualDefinition/CreateProcess";
import CreateStep from "../components/ManualDefinition/CreateStep";
import StepListComponent from "../components/ManualDefinition/StepList";
import ProcessDisplayComponent from "../components/ManualDefinition/ProcessDisplay";
import Button from "../components/common/Button";
const ManualDefinitionPage = () => {
  const [steps, setSteps] = useState([]);
  const [showProcessComponent, setShowProcessComponent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [processData, setProcessData] = useState(null);
  const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const handleCreateProcess = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`${BASE_URL}/create-process`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setProcessData(result);
      setShowProcessComponent(false);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateStep = (stepData) => {
    if (processData && processData.id) {
      setSteps([
        ...steps,
        {
          ...stepData,
          order: steps.length + 1,
          isEditing: false,
          processId: processData.id,
        },
      ]);
    } else {
      console.error("Process ID is not available");
    }
  };

  const handleEditStep = (index) => {
    const newSteps = steps.map((step, idx) =>
      idx === index ? { ...step, isEditing: !step.isEditing } : step
    );
    setSteps(newSteps);
  };

  const handleStepChange = (event, index, field) => {
    const newSteps = steps.map((step, idx) =>
      idx === index ? { ...step, [field]: event.target.value } : step
    );
    setSteps(newSteps);
  };

  const handleDeleteStep = (index) => {
    const updatedSteps = steps.filter((_, idx) => idx !== index);
    setSteps(updatedSteps);
  };

  const handleShuffleSteps = () => {
    const shuffledSteps = [...steps].sort(() => Math.random() - 0.5);
    setSteps(shuffledSteps);
  };

  const handleSaveAll = async () => {
    if (!processData || !processData.id) {
      console.error("Process ID is not available");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`${BASE_URL}/save-all-steps`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ steps }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Steps saved successfully");
      setShowButton(false);
    } catch (error) {
      console.error("Error saving steps:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">
        Manual Process Creation
      </h1>

      {error && <div className="text-red-500 text-center">{error}</div>}
      {isLoading && <div className="text-center">Loading...</div>}

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-white bg-opacity-20 border border-gray-200 rounded-lg shadow-lg p-4 glassmorphism mb-4 md:mb-0 md:mr-4">
          {showProcessComponent ? (
            <CreateProcess onSubmit={handleCreateProcess} />
          ) : (
            <ProcessDisplayComponent processData={processData} />
          )}
        </div>
        <div className="flex-1 bg-white bg-opacity-20 border border-gray-200 rounded-lg shadow-lg p-4 glassmorphism">
          <CreateStep onSubmit={handleCreateStep} />
          <StepListComponent
            steps={steps}
            onEditStep={handleEditStep}
            onDeleteStep={handleDeleteStep}
            onStepChange={handleStepChange}
          />
          <Button
            onClick={handleShuffleSteps}
            text="Shuffle Steps"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          />
          {showButton ? (
            <Button
              onClick={handleSaveAll}
              text="Save All Steps"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
            />
          ) : (
            <div className="mt-4">
              <p className="text-white">Saved Steps Successfully</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualDefinitionPage;

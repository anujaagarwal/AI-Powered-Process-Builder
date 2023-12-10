// components/ManualDefinition/ProcessDisplayComponent.js
import React from "react";

const ProcessDisplay = ({ processData }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">Process Created</h1>
      <p className="font-bold">Name: {processData?.name}</p>
      <p className="font-bold">Description: {processData?.description}</p>
    </div>
  );
};

export default ProcessDisplay;

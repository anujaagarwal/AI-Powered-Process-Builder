import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="bg-black text-white text-center p-10">
      <h2 className="text-3xl font-bold mb-2">
        Welcome to AI Process Builder!
      </h2>
      <p className="text-xl">
        Create, manage, and store your process definitions with ease. Choose
        between AI-assisted input and manual process definition for a seamless
        experience.
      </p>
    </div>
  );
};

export default WelcomeBanner;

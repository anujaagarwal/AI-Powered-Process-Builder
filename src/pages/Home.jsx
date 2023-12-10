import React from "react";
import Header from "../components/Home/Header";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Home/Footer";
import type from "../assets/type.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-gray-800">
      <Header />
      <WelcomeBanner />

      <div className="flex flex-col sm:flex-row justify-center gap-5 m-10 sm:m-40">
        <div className="flex-shrink-0">
          {" "}
          {/* Added a flex container for the image */}
          <img
            src={type}
            alt="Type Image"
            className="w-40 h-auto sm:w-64 sm:h-64" // Set responsive width and height using w-auto and sm:w-64, sm:h-64
          />
        </div>
        <Button
          className="glassmorphism border border-black border-solid p-4 h-16 rounded bg-black text-white hover:text-black hover:bg-white"
          text="AI Assistant"
          onClick={() => navigate("/ai-assisted")}
        />
        <Button
          className="glassmorphism border border-black p-4 h-16 border-solid rounded bg-black text-white hover:text-black hover:bg-white"
          text="Manual Process"
          onClick={() => navigate("/manual-definition")}
        />
      </div>
      <Footer />
    </div>
  );
}

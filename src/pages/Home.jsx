import React from "react";
import Header from "../components/Home/Header";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Home/Footer";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-gray-800">
      <Header />
      <WelcomeBanner />
      <div className="flex flex-col sm:flex-row justify-center gap-5 m-10 sm:m-40">
        <Button
          className="glassmorphism border border-black p-4 rounded hover:bg-black hover:text-white"
          text="AI Assisted Process"
          onClick={() => navigate("/ai-assisted")}
        />
        <Button
          className="glassmorphism border border-black p-4 rounded  hover:bg-black hover:text-white"
          text="Manual Process"
          onClick={() => navigate("/manual-definition")}
        />
      </div>
      <Footer />
    </div>
  );
}

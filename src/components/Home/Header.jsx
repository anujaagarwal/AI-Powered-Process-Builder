import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">AI Process Builder</h1>
        <div className="flex space-x-4">
          <NavLink
            to="/ai-assisted"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-gray-300"
          >
            AI-Assisted Process Creation
          </NavLink>
          <NavLink
            to="/manual-definition"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-gray-300"
          >
            Manual Process Definition
          </NavLink>
          {/* <NavLink
            to="/database-integration"
            className="text-white hover:text-gray-300"
            activeClassName="border-b-2 border-gray-300"
          >
            Database Integration
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;

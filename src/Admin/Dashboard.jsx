

import React from "react";
import {
  FaHome,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaDollarSign,
  FaTruck,
} from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { LuSquareArrowOutDownLeft } from "react-icons/lu";
import { Link } from "react-router-dom"; 
import Dash from "./Dash"; 
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 shadow-2xl">
        {/* Dashboard Title */}
        <h1 className="text-2xl font-bold flex items-center mb-8 pl-2">
          <span className="mr-3 ">
            <LuSquareArrowOutDownLeft className="text-2xl" />
          </span>
          Dashboard
        </h1>

        {/* Sidebar Links */}
        <ul className="space-y-3">
          <li className="flex items-center space-x-4 p-3 hover:bg-blue-600/80 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            <FaHome className="text-2xl " />
            <Link to="/Admin/Dashboard">
              <span className="text-sm">
                Overview
              </span>
            </Link>
          </li>

          <li className="flex items-center space-x-4 p-3  rounded-md cursor-pointer hover:bg-blue-600/80">
            <FaBuilding className="text-2xl text-white" />
            <Link to="/Admin/Dashboard/embassy">
              <span className="text-sm font-semibold">
                US Embassy Funded Training
              </span>
            </Link>
          </li>

          <li className="flex items-center space-x-4 p-3 hover:bg-blue-600/80 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-2xl " />
            <span className="text-sm">Lab Distribution Map</span>
          </li>

          <li className="flex items-center space-x-4 p-3 hover:bg-blue-600/80 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            <FaGraduationCap className="text-2xl " />
            <span className="text-sm">Training Programme</span>
          </li>

          <li className="flex items-center space-x-4 p-3 hover:bg-blue-600/80 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            <FaDollarSign className="text-2xl " />
            <span className="text-sm">Financial Data</span>
          </li>

          <li className="flex items-center space-x-4 p-3 hover:bg-blue-600/80 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            <FaTruck className="text-2xl " />
            <span className="text-sm">Logistics</span>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {/* <Dash />  */}

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

import ProfilePersonalInfo from "../components/ProfilePersonalInfo";
import ProfileEmergencyHistory from "../components/ProfileEmergencyHistory";

function ProfilePageUser() {
  const active = `
    bg-white shadow-md rounded-lg
`;

  const [currentTab, setCurrentTab] = useState("profile");

  return (
    <div className="pt-30 p-20 px-40 bg-brown ">
      <h1 className="font-bold text-2xl text-main-text">My Profile</h1>
      <h2 className="text-xl pt-2 text-normal-text">
        Manage your account and emergency information
      </h2>
      {/* SLIDER */}
      <ul className="grid grid-cols-3 gap-4 w-full text-center mt-4 bg-dark-grey p-2 font-semibold rounded-lg">
        <li
          className={`cursor-pointer p-2 ${
            currentTab === "profile" ? active : ""
          }`}
          onClick={() => setCurrentTab("profile")}
        >
          Profile
        </li>
        <li
          className={`cursor-pointer p-2 ${
            currentTab === "emergency_history" ? active : ""
          }`}
          onClick={() => setCurrentTab("emergency_history")}
        >
          Emergency History
        </li>
        <li
          className={`cursor-pointer p-2 ${
            currentTab === "settings" ? active : ""
          }`}
          onClick={() => setCurrentTab("settings")}
        >
          Settings
        </li>
      </ul>

      {currentTab === "profile" && <ProfilePersonalInfo />}

      {currentTab === "emergency_history" && <ProfileEmergencyHistory />}

      {currentTab === "settings" && (
        <div className="bg-white mt-6 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <IoIosSettings className="text-3xl text-dark-green" />
            <div className="text-2xl font-semibold text-main-text">
              Accont Settings
            </div>
          </div>

          <p className="text-normal-text text-sm mb-6">
            Manage your account preferences and security
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfilePageUser;

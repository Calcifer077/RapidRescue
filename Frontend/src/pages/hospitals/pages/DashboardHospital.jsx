import { useState } from "react";
import OverviewHeading from "../features/overview/OverviewHeading";
import OverviewActivity from "../features/overview/OverviewActivity";
import EmergencyRequestHeading from "../features/emergency_requests/EmergencyRequestsHeading";
import EmergencyRequestsCardsOverview from "../features/emergency_requests/EmergencyRequestsCardsOverview";

function DashboardHospital() {
  const active = `
    bg-white shadow-md rounded-lg
    `;

  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <div className="w-full p-6 px-12 h-screen">
      {/* SLIDER */}
      <ul className="grid grid-cols-5 gap-2 max-w-7xl mx-auto text-center font-medium bg-gray-100 rounded-lg p-2">
        <li
          className={`cursor-pointer p-1 ${
            currentTab === "overview" ? active : ""
          }`}
          onClick={() => setCurrentTab("overview")}
        >
          Overview
        </li>
        <li
          className={`cursor-pointer p-1 ${
            currentTab === "emergency_requests" ? active : ""
          }`}
          onClick={() => setCurrentTab("emergency_requests")}
        >
          Emergency Requests
        </li>
        <li
          className={`cursor-pointer p-1 ${
            currentTab === "live_tracking" ? active : ""
          }`}
          onClick={() => setCurrentTab("live_tracking")}
        >
          Live Tracking
        </li>
        <li
          className={`cursor-pointer p-1 ${
            currentTab === "fleet_management" ? active : ""
          }`}
          onClick={() => setCurrentTab("fleet_management")}
        >
          Fleet Management
        </li>
        <li
          className={`cursor-pointer p-1 ${
            currentTab === "communication" ? active : ""
          }`}
          onClick={() => setCurrentTab("communication")}
        >
          Communication
        </li>
      </ul>

      {currentTab === "overview" && (
        <>
          <OverviewHeading />
          <OverviewActivity />
        </>
      )}

      {currentTab === "emergency_requests" && (
        <>
          <EmergencyRequestHeading />
          <EmergencyRequestsCardsOverview />
        </>
      )}
    </div>
  );
}

export default DashboardHospital;

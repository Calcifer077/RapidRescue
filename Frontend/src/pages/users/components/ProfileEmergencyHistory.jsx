import { IoMdTime } from "react-icons/io";

import EmergencyHistoryCard from "./EmergencyHistoryCard";

function ProfileEmergencyHistory() {
  return (
    <div className="bg-white mt-6 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <IoMdTime className="text-3xl text-dark-green" />
        <div className="text-2xl font-semibold text-main-text">
          Emergency Call History
        </div>
      </div>

      <p className="text-normal-text text-sm mb-6">
        Your recent emergency service requests
      </p>

      <EmergencyHistoryCard />
      <EmergencyHistoryCard />
    </div>
  );
}

export default ProfileEmergencyHistory;

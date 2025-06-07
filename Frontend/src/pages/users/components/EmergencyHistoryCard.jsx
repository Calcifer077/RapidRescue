import { MdErrorOutline } from "react-icons/md";

function EmergencyHistoryCard() {
  return (
    <div className="bg-dark-grey px-4 p-2 mb-4 rounded-2xl border-gray-500 border-2">
      <div className="flex items-center gap-3 mb-2">
        <MdErrorOutline className="text-user-main-red text-xl" />
        <h1 className="font-semibold text-normal-text">Emergency call # 1</h1>
      </div>

      <div className="grid grid-cols-4">
        <div>Date</div>
        <div>Time</div>
        <div>Location</div>
        <div>Response Time</div>
      </div>
    </div>
  );
}

export default EmergencyHistoryCard;

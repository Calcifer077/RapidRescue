import { FaAmbulance, FaArrowRight } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const colorMap = {
  available: "bg-status-available-bg text-status-available",
  responding: "bg-status-responding-bg text-status-responding",
  transporting: "bg-status-transporting-bg text-status-transporting",
  offline: "bg-status-offline-bg text-status-offline",
  maintenance: "bg-status-offline-bg text-status-offline",
};

function FleetManagementCard({
  ambulanceId,
  driverName,
  status,
  shift,
  phone,
  vehicleInfo,
  equipments,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-7xl mt-5 mb-5 grid grid-cols-4 gap-4">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        {/* Ambulance and Driver Info */}
        <div className="flex items-center gap-2">
          <FaAmbulance className="text-2xl text-blue-600" />
          <div className="flex flex-col">
            <span className="font-bold text-lg">{ambulanceId}</span>
            <span className="text-sm text-gray-600">
              Driver: <span className="font-semibold">{driverName}</span>
            </span>
          </div>
        </div>

        {/* Status */}
        <span
          className={`uppercase text-sm w-fit p-1 px-2 rounded-xl font-semibold ${colorMap[status]}`}
        >
          {status}
        </span>

        {/* Shift Info */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">
            Current Shift:
          </span>
          <span className="text-sm text-gray-500">{shift}</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">Phone:</span>
          <span className="text-sm text-gray-500">{phone}</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-gray-800">Vehicle Info:</span>
        <span>Total Miles: {vehicleInfo.totalMiles}</span>
        <span className="text-success-or-green font-semibold">
          Fuel Level: {vehicleInfo.fuelLevel}
        </span>
        <span>Last Maintenance: {vehicleInfo.lastMaintainence}</span>
      </div>

      {/* Equipment Section */}
      <div className="flex flex-col gap-2 text-sm max-h-[150px] overflow-y-auto">
        <span className="font-semibold text-gray-800">Equipment:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {equipments.map((item) => (
            <span
              key={item}
              className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full border"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col gap-2 items-end">
        <button className="border-2 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 w-1/2">
          <span>
            <MdOutlineLocalPhone />
          </span>{" "}
          Call Driver
        </button>

        <select className="border-2 rounded-md px-4 py-2 text-sm font-medium text-normal-text bg-white w-1/2">
          <option>Responding</option>
          <option>Transporing</option>
          <option>Available</option>
          <option>Offline</option>
          <option>Maintenance</option>
        </select>

        <button className="border-2 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 w-1/2">
          <span>
            <FaArrowRight />
          </span>{" "}
          View Details
        </button>
      </div>
    </div>
  );
}

export default FleetManagementCard;

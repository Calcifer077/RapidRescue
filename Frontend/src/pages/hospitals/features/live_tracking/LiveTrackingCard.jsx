import { FaAmbulance, FaPhoneAlt } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

const bgColorMap = {
  responding: "bg-status-responding-bg",
  available: "bg-status-available-bg",
  transporting: "bg-status-transporting-bg",
  offline: "bg-status-offline-bg",
};

const textColorMap = {
  responding: "text-status-responding",
  available: "text-status-available",
  transporting: "text-status-transporting",
  offline: "text-status-offline",
};

const borderColorMap = {
  responding: "border-status-responding",
  available: "border-status-available",
  transporting: "border-status-transporting",
  offline: "border-status-offline",
};

function LiveTrackingCard({
  ambulanceId,
  ambulanceDriver,
  status,
  location,
  destination,
  eta,
  additionalInfo = "",
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-5 mb-5">
      <div className="flex justify-between items-start gap-6 w-full ">
        {/* LEFT SECTION */}
        <div className="flex items-start gap-4 w-1/3">
          {/* Icon */}
          <div className="bg-blue-100 p-3 rounded-full">
            <FaAmbulance className="text-2xl text-blue-600" />
          </div>
          {/* Text Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{ambulanceId}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold uppercase border-1 ${bgColorMap[status]} ${textColorMap[status]} ${borderColorMap[status]}`}
              >
                {status}
              </span>
            </div>
            <p className="text-sm text-gray-600">Driver: {ambulanceDriver}</p>
            <div className="mt-3">
              <p className="text-sm font-semibold"></p>
              <p className="text-sm text-gray-700">{location.address}</p>
              <p className="text-sm text-gray-900">
                {location.coordinates.lat} - {location.coordinates.lat}
              </p>
              <p className="text-xs text-gray-500"></p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="w-1/3">
          <p className="text-sm font-semibold">Destination:</p>
          <p className="text-sm text-gray-700">{destination}</p>
          <p className="text-sm text-green-600 font-semibold">ETA: {eta}</p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-3 items-end">
          <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50 transition text-sm w-full">
            <FaPhoneAlt className="text-sm" />
            Call Driver
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50 transition text-sm w-full">
            <IoArrowForwardOutline className="text-base" />
            Message
          </button>
        </div>
      </div>
      {additionalInfo && (
        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded px-4 py-2 text-sm">
          <span className="font-semibold">Patient Info:</span> {additionalInfo}
        </div>
      )}
    </div>
  );
}

export default LiveTrackingCard;

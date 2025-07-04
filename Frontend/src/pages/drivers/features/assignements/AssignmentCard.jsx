import {
  FaUser,
  FaHeart,
  FaMapMarkerAlt,
  FaRegHeart,
  FaClock,
} from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiNavigationArrowDuotone } from "react-icons/pi";
import { useState } from "react";

const styleMap = {
  critical:
    "bg-condition-critical-bg text-condition-critical border-condition-critical",
  high: "bg-condition-high-bg text-condition-high border-condition-high",
  medium:
    "bg-condition-medium-bg text-condition-medium border-condition-medium",
  low: "bg-condition-low-bg text-condition-low border-condition-low",
};

function AssignmentCard({
  id,
  priority,
  assigned,
  name,
  age,
  symptom,
  pickupLocation,
  destination,
  destinationEta,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-white border border-blue-100 rounded-xl p-6 max-w-7xl mx-auto shadow-sm my-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-lg text-gray-900">
            Assignment #{id}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-md uppercase ${styleMap[priority]}`}
            >
              {priority} priority
            </span>
            <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded-md">
              {assigned ? "Assigned" : "Pending"}
            </span>
          </div>
        </div>
        <button className="text-sm text-blue-900 hover:underline">
          {visible && (
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              Less{" "}
              <span>
                <MdExpandLess />
              </span>
            </div>
          )}

          {!visible && (
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setVisible(true)}
            >
              More
              <span>
                <MdExpandMore />
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Patient Info */}
      <div className="mt-4 flex flex-col gap-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <FaUser className="text-gray-500" />
          <span>
            <span className="font-semibold">{name}</span> ({age} years old)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHeart className="text-red-600" />
          <span className="font-bold">{symptom}</span>
        </div>
      </div>

      {/* Locations */}
      <div className="mt-4 text-sm text-gray-700 flex flex-col gap-3">
        <div className="flex gap-2">
          <FaMapMarkerAlt className="text-blue-500 mt-0.5" />
          <div>
            <p className="font-semibold">Pickup Location</p>
            <p>{pickupLocation}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <PiNavigationArrowDuotone
            className="text-green-600 mt-0.5"
            size={18}
          />
          <div>
            <p className="font-semibold">Destination</p>
            <p className="text-blue-600 underline cursor-pointer">
              {destination}
            </p>
            <p className="text-xs text-gray-500">ETA: {destinationEta} mins</p>
          </div>
        </div>
      </div>

      {/* Vitals */}
      {visible && (
        <div className="mt-4 border-t pt-4 text-sm text-gray-800">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <FaHeart className="text-gray-600" /> Patient Vitals
          </p>
          <div className="flex gap-4 flex-wrap bg-gray-50 p-3 rounded-md">
            <span>
              <strong>BP:</strong> 140/90
            </span>
            <span>
              <strong>HR:</strong> 95 bpm
            </span>
            <span>
              <strong>Temp:</strong> 98.6°F
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-gray-600">
            <FaClock />
            <span className="text-sm">Scheduled pickup: 14:30</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 border-t pt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 w-full font-bold">
          <AiOutlineCheckCircle /> Accept Assignment
        </button>
      </div>
    </div>
  );
}

export default AssignmentCard;

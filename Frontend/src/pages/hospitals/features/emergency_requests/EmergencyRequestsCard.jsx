import { FaAmbulance, FaArrowRight } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

function EmergencyRequestsCard({
  name,
  location,
  distance,
  phone,
  condition,
  time,
  symptoms,
}) {
  return (
    <div className="relative bg-white mt-5 mb-5 p-6 rounded-lg shadow-lg flex items-start">
      {/* LEFT COLUMN, FIRST COLUMN */}
      <div className="flex flex-col gap-2 w-1/3">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="capitalize font-semibold text-2xl">{name}</span>
          <span
            className={`uppercase px-2 py-1 rounded-xl text-sm font-bold
            ${
              condition === "critical"
                ? "bg-condition-critical-bg text-condition-critical border-condition-critical"
                : ""
            }
            ${
              condition === "high"
                ? "bg-condition-high-bg text-condition-high border-condition-high"
                : ""
            }
            ${
              condition === "medium"
                ? "bg-condition-medium-bg text-condition-medium border-condition-medium-"
                : ""
            }
            ${
              condition === "low"
                ? "bg-condition-low-bg text-condition-low border-condition-low"
                : ""
            }
            `}
          >
            {condition}
          </span>
          <span className="text-sm text-normal-text">{time}</span>
        </div>

        <div className="text-sm mt-1">
          <div>
            <span className="font-semibold">Location: </span>
            <span className="text-normal-text">{location}</span>
          </div>
          <div>
            <span className="font-semibold">Distance: </span>
            <span className="text-normal-text">{distance}</span>
          </div>
          <div>
            <span className="font-semibold">Phone: </span>
            <span className="text-normal-text">{phone}</span>
          </div>
        </div>
      </div>

      {/* CENTER COLUMN */}
      <div className="text-left text-sm ml-20">
        <div>
          <span className="font-semibold">Symptoms: </span>
          {symptoms.map((symptom, index) => (
            <span key={index}>
              {symptom}
              {index !== symptoms.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="text-left mt-1">
          <span className="text-success-or-green font-bold">Assigned: </span>
          <span className="text-success-or-green">Team 1</span>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="ml-auto flex flex-col items-end gap-4 w-1/4">
        <button className="border border-main-text p-2 px-4 flex items-center gap-2 rounded hover:bg-gray-100 transition w-1/2 cursor-pointer">
          <IoCallOutline className="text-lg" />
          <span className="font-semibold text-sm">Call Patient</span>
        </button>
        <select className="px-8 py-2 border rounded text-sm w-1/2">
          <option value="">Assign</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>

        {/* <button
          className="w-1/2 border p-2 px-4 rounded border-main-text cursor-pointer transition bg-success-or-green text-white font-semibold 
        flex items-center gap-2 hover:bg-success-or-green-hover"
        >
          <FaArrowRight className="text-white" />
          Track Unit
        </button> */}
      </div>
    </div>
  );
}

export default EmergencyRequestsCard;

import { IoCallOutline } from "react-icons/io5";
import { FaAmbulance } from "react-icons/fa";

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
    <div className="grid grid-cols-3 bg-white mt-6 p-6 rounded-lg shadow-lg">
      {/* FIRST COLUMN */}
      <div>
        {/* FIRST ROW */}
        <div className="flex gap-2 items-center">
          <span className="capitalize font-semibold text-2xl">{name}</span>
          <span className="uppercase">{condition}</span>
          <span className="text-sm text-normal-text">{time}</span>
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-col mt-2">
          <span className="font-semibold">
            Location:{" "}
            <span className="font-normal text-normal-text">{location}</span>{" "}
          </span>
          <span className="font-semibold">
            Distance:{" "}
            <span className="font-normal text-normal-text">{distance}</span>
          </span>
          <span className="font-semibold">
            Phone: <span className="font-normal text-normal-text">{phone}</span>
          </span>
        </div>
      </div>

      {/* SECOND COLUMN */}
      <div className="text-center text-sm mt-8">
        <span className="font-semibold">Symptoms: </span>
        {symptoms.map((symptom, index) => (
          <span key={index}>
            {symptom}
            {index !== symptoms.length - 1 && ", "}
          </span>
        ))}
      </div>

      {/* THIRD COLUMN */}
      <div>
        <button className="border p-2 px-4 flex items-center gap-2">
          <span className="text-main-text">
            <IoCallOutline />
          </span>
          <span className="font-semibold">Call Patient</span>
        </button>
        <div>
          <select>
            <FaAmbulance /> Assign
          </select>
        </div>
      </div>
    </div>
  );
}

export default EmergencyRequestsCard;

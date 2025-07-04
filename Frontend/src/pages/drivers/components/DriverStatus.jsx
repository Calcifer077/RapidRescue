import { CgProfile } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const textMap = {
  available: "Ready for assignments",
  busy: "Currently on assignment",
  off_duty: "Off duty",
};

const styleMap = {
  available: "bg-green-200 border-green-500 text-green-800",
  busy: "bg-orange-500 text-yellow-900 border-yellow-800",
  off_duty: "bg-gray-200 text-gray-800 border-gray-800",
};

function DriverStatus() {
  const [status, setStatus] = useState("busy");

  return (
    <div className="p-4 bg-white m-4 flex justify-between rounded-md max-w-7xl mx-auto">
      <div className="">
        <div className="flex items-center gap-2">
          <span>
            <CgProfile className="font-semibold text-xl" />
          </span>
          <span className="font-bold text-xl">Driver Status</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`flex items-center w-fit p-1 px-2 rounded-lg gap-2 ${styleMap[status]}`}
          >
            {status === "available" && <AiOutlineThunderbolt />}
            {status === "busy" && <FiClock />}
            {status === "off_duty" && <CgProfile />}
            <span className="capitalize">{status.replaceAll("_", " ")}</span>
          </span>
          <span>{textMap[status]}</span>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className={`border-1 border-gray-400 p-1 px-3 rounded-md cursor-pointer ${
              status === "available" ? "bg-green text-white" : ""
            }`}
            onClick={() => setStatus("available")}
          >
            Available
          </button>
          <button
            className={`border-1 border-gray-400 p-1 px-3 rounded-md cursor-pointer
            ${status === "busy" ? "bg-orange text-white" : ""}
            `}
            onClick={() => setStatus("busy")}
          >
            Busy
          </button>
          <button
            className={`border-1 border-gray-400 p-1 px-3 rounded-md cursor-pointer ${
              status === "off_duty" ? "bg-offline-grey text-white" : ""
            }`}
            onClick={() => setStatus("off_duty")}
          >
            Off Duty
          </button>
        </div>
      </div>
      <div className="my-auto flex items-center gap-1">
        <span>
          <CiLocationOn />
        </span>
        Unit 257
      </div>
    </div>
  );
}

export default DriverStatus;

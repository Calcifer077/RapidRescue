import { FaAmbulance } from "react-icons/fa";
import { CiBellOn, CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function DriverNavbar() {
  return (
    <div className="flex justify-between items-center p-4 px-6 bg-white">
      <div className="flex items-center gap-4">
        <div>
          <FaAmbulance className="text-3xl text-user-main-red" />
        </div>{" "}
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Emergency response</span>
          <span>Driver Dashboard</span>
        </div>
      </div>
      <div className="bg-red-300 p-1 px-3 rounded-xl border-1 border-red-800 text-red-800 font-semibold">
        UNIT - 1 - <span className="capitalize">Avaiable</span>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <CiBellOn className="text-xl font-semibold" />
        </div>
        <div>
          <CiSettings className="text-xl font-semibold" />
        </div>
        <div className="border-l-1 pl-2 flex gap-2 items-center">
          <span>Driver Name</span>
          <span>
            <CgProfile />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DriverNavbar;

import { FaAmbulance } from "react-icons/fa";

function DriverHeading() {
  return (
    <div className="w-full flex flex-col items-center pt-30">
      <div className="flex items-center gap-4">
        <FaAmbulance className="bg-red-400 rounded-3xl text-red-700 text-6xl p-2 px-3" />
        <span className="text-5xl font-bold">Ambulance dispatch</span>
      </div>
      <div className="text-3xl font-semibold text-normal-text content-center mt-4">
        Emergency response system
      </div>
    </div>
  );
}

export default DriverHeading;

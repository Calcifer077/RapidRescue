import { FaAmbulance } from "react-icons/fa";

function HeadingHospital() {
  return (
    <div className="w-full p-6 px-12">
      <div className="flex gap-4 items-center mb-2">
        <FaAmbulance className="text-user-main-red text-5xl bg-user-subheading-text p-2 rounded-lg" />
        <h1 className="text-main-text text-3xl font-bold tracking-wide">
          Central Hospital Dashboard
        </h1>
      </div>
      <p className="text-normal-text">Emergency Response Management System</p>
    </div>
  );
}

export default HeadingHospital;

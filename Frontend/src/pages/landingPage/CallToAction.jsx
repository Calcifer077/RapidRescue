import { FaAmbulance, FaHospitalSymbol, FaTruck } from "react-icons/fa";

function CallToAction() {
  return (
    <div className="w-full bg-brown py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-main-text">
        Choose Your Portal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* User CTA */}
        <div className="bg-light-green p-8 rounded-2xl text-center text-dark-green shadow-lg hover:scale-105 hover:shadow-2xl duration-200 transition">
          <FaAmbulance className="text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-12">Call An Ambulance</h3>

          <button className="bg-normal-green text-white font-bold px-4 py-2 rounded-full hover:bg-dark-green duration-400 cursor-pointer">
            Go to User App
          </button>
        </div>

        {/* Hospital CTA */}
        <div className="bg-dark-green p-8 rounded-2xl text-center text-white shadow-lg hover:scale-105 hover:shadow-2xl duration-200 transition">
          <FaHospitalSymbol className="text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-12">Hospital Dashboard</h3>
          <button className="bg-light-green text-dark-green font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-white duration-400">
            Go to Dashboard
          </button>
        </div>

        {/* Driver CTA */}
        <div className="bg-light-green p-8 rounded-2xl text-center text-dark-green shadow-lg hover:scale-105 hover:shadow-2xl duration-200 transition">
          <FaTruck className="text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-12">Driver App</h3>

          <button className="bg-normal-green text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-dark-green duration-400">
            Go to Driver App
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;

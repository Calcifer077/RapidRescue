import { FaAmbulance, FaHospitalSymbol, FaTruck } from "react-icons/fa";

function RoleCards() {
  return (
    <>
      <div className="w-full bg-brown py-16 px-6 md:px-20 rounded-b-[50px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-main-text">
          Access Your Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: User Card (spans full height of two cards on right) */}
          <div className="bg-light-green p-8 rounded-2xl flex flex-col justify-between shadow-lg">
            <div>
              <FaAmbulance className="text-5xl mb-4 text-main-text" />
              <h2 className="text-4xl font-bold mb-4 text-main-text">User</h2>
              <p className="text-xl font-medium mb-6 text-normal-text">
                Call an ambulance instantly, track real-time updates and ETA.
              </p>
            </div>
            <button className="bg-normal-green text-white font-bold px-4 py-2 rounded-full hover:bg-dark-green duration-400 cursor-pointer transition">
              Go to User App
            </button>
          </div>

          {/* Right: Hospital & Driver Cards */}
          <div className="flex flex-col gap-8">
            {/* Hospital */}
            <div className="bg-light-green p-8 rounded-2xl shadow-md">
              <FaHospitalSymbol className="text-4xl mb-4 text-main-text" />
              <h2 className="text-xl font-bold mb-2 text-main-text">
                Hospital
              </h2>
              <p className="mb-4 text-normal-text">
                Manage requests, dispatch ambulances, monitor arrivals.
              </p>
              <button className="bg-normal-green text-white font-bold px-4 py-2 rounded-full hover:bg-dark-green duration-400 cursor-pointer transition">
                Go to Hospital Dashboard
              </button>
            </div>

            {/* Driver */}
            <div className="bg-light-green p-8 rounded-2xl shadow-md">
              <FaTruck className="text-4xl mb-4 text-main-text" />
              <h2 className="text-xl font-bold mb-2 text-main-text">Driver</h2>
              <p className="mb-4 text-normal-text">
                View trip assignments, track destinations, update statuses.
              </p>
              <button className="bg-normal-green text-white font-bold px-4 py-2 rounded-full hover:bg-dark-green duration-400 cursor-pointer transition">
                Go to Driver App
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleCards;

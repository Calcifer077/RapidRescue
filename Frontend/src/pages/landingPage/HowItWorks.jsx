import { FaUserInjured, FaHospitalAlt, FaTruckMoving } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="bg-brown py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-main-text mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* Step 1: User */}
        <div className="bg-light-green rounded-2xl p-8 shadow-md">
          <FaUserInjured className="text-5xl text-main-text mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-main-text mb-2">Users</h3>
          <p className="text-normal-text font-medium">
            Request help instantly through the portal or app.
          </p>
        </div>

        {/* Step 2: Hospital */}
        <div className="bg-light-green rounded-2xl p-8 shadow-md">
          <FaHospitalAlt className="text-5xl text-main-text mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-main-text mb-2">Hospitals</h3>
          <p className="text-normal-text font-medium">
            Manage incoming requests and dispatch ambulances.
          </p>
        </div>

        {/* Step 3: Driver */}
        <div className="bg-light-green rounded-2xl p-8 shadow-md">
          <FaTruckMoving className="text-5xl text-main-text mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-main-text mb-2">Drivers</h3>
          <p className="text-normal-text font-medium">
            Receive live trip updates and navigate to patients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

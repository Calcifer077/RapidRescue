// Will basically have a button to call an ambulance
import { IoIosCall } from "react-icons/io";

function LandingPageUser() {
  return (
    <div className="p-20 pt-30 bg-brown">
      <h1 className="text-center text-5xl font-bold tracking-wide text-main-text">
        Emergency Help
      </h1>
      <h2 className="text-center text-3xl font-semibold tracking-wide text-normal-green p-2">
        One click away
      </h2>
      <h3 className="text-center text-xl tracking-wide text-normal-green p-2 w-180 mx-auto">
        Fast, reliable ambulance services available 24/7. Professional medical
        care when you need it most.
      </h3>

      <div className="max-w-xl mx-auto bg-white shadow-xs rounded-2xl p-8 text-center">
        <IoIosCall className="mx-auto text-user-main-red text-5xl mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Emergency Call
        </h2>
        <h3 className="text-md text-normal-green mb-6 font-bold">
          Click the button below for immediate ambulance assistance
        </h3>
        <button className="bg-user-main-red text-white font-semibold py-3 px-6 rounded-full uppercase transition duration-300 cursor-pointer">
          Call ambulance now
        </button>
      </div>
    </div>
  );
}

export default LandingPageUser;

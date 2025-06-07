import { RiStethoscopeFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";

function ServicesPageUser() {
  return (
    <div className="py-12 px-6 bg-brown rounded-b-[50px]">
      <h2 className="text-main-text text-3xl text-center font-bold tracking-wider">
        Services
      </h2>
      <div className="grid grid-cols-2 gap-8 py-10 text-center mx-20">
        <div className="border-2 rounded-2xl p-10 bg-white border-t-dark-green border-dark-green border-t-4 shadow-2xs hover:shadow-lg">
          <IoIosCall className="mx-auto text-dark-green font-bold text-5xl bg-light-green p-2 rounded-2xl" />
          <h1 className="text-main-text font-bold text-3xl pt-4">
            Emergency Response
          </h1>
          <p className="text-normal-text text-xl tracking-wide pt-4">
            Immediate ambulance dispatch for life-threatening situations
          </p>
        </div>
        <div className="border-2 rounded-2xl p-10 bg-white border-t-dark-green border-dark-green border-t-4 shadow-2xs hover:shadow-lg">
          <RiStethoscopeFill className="mx-auto text-dark-green font-bold text-5xl bg-light-green p-2 rounded-2xl" />
          <h1 className="text-main-text font-bold text-3xl pt-4">
            Medical Transport
          </h1>
          <p className="text-normal-text text-xl tracking-wide pt-4">
            Safe transport to medical facilities with care
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPageUser;

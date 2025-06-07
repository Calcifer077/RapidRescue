import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

function ProfilePersonalInfo() {
  return (
    <div className="bg-white mt-6 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <FaRegUserCircle className="text-3xl text-dark-green" />
        <div className="text-2xl font-semibold text-main-text">
          Personal Information
        </div>
      </div>

      <p className="text-normal-text text-sm mb-6">
        Keep your information up to date for faster emergency response.
      </p>

      <form className="w-full flex flex-col gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-normal-text">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-normal-green p-3 transition focus:ring-2 focus:ring-dark-green focus:outline-none"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-normal-text">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full rounded-lg border border-normal-green p-3 transition focus:ring-2 focus:ring-dark-green focus:outline-none"
          />
        </div>

        {/* Allergies */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-normal-text">
            Allergies
          </label>
          <input
            type="text"
            placeholder="List any allergies"
            className="w-full rounded-lg border border-normal-green p-3 transition focus:ring-2 focus:ring-dark-green focus:outline-none"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-normal-text">
            Home Address
          </label>
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full rounded-lg border border-normal-green p-3 transition focus:ring-2 focus:ring-dark-green focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-dark-green hover:bg-button-hover-green text-white p-4 rounded-xl font-semibold cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-primary-strong"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfilePersonalInfo;

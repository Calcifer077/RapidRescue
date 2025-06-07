import { IoIosSettings } from "react-icons/io";

function ProfileSettings() {
  return (
    <div className="bg-white mt-6 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <IoIosSettings className="text-3xl text-dark-green" />
        <div className="text-2xl font-semibold text-main-text">
          Accont Settings
        </div>
      </div>

      <p className="text-normal-text text-sm mb-6">
        Manage your account preferences and security
      </p>
    </div>
  );
}

export default ProfileSettings;

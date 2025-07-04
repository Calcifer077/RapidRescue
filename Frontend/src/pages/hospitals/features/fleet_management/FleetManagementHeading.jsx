function FleetManagementHeading() {
  return (
    <div className="bg-white p-6 px-12 rounded-lg shadow-lg mt-4 max-w-7xl mx-auto">
      <h1 className="text-main-text font-bold text-xl">Fleet Management</h1>
      <p className="text-normal-text font-medium text-md">
        Monitor and manage your ambulance fleet
      </p>

      <div className="flex gap-3 mt-3">
        <input
          placeholder="Search by Unit ID and driver name."
          className="w-full rounded-lg border-2 border-gray-100 transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none p-2"
        />
        <select
          name="condition"
          className="p-2 rounded-lg border-gray-100 border-2 focus:border-gray-900"
        >
          <option>All</option>
          <option>Available</option>
          <option>Responding</option>
          <option>Transporting</option>
          <option>Offline/Maintanence</option>
        </select>
      </div>
    </div>
  );
}

export default FleetManagementHeading;

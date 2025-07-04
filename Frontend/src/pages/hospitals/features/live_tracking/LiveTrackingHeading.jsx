function LiveTrackingHeading() {
  return (
    <div className="bg-white p-6 px-12 rounded-lg shadow-lg mt-4 max-w-7xl mx-auto">
      <h1 className="text-main-text font-bold text-xl">
        Live Ambulance Tracking
      </h1>
      <p className="text-normal-text font-medium text-md">
        Real-time location and status of all ambulance units
      </p>

      <div className="flex gap-4 mt-2">
        <select
          name="ambulance_name"
          className="p-2 px-4 rounded-lg border-gray-100 border-2 focus:border-gray-900"
        >
          <option>All Ambulance</option>
          <option>AMB - 001</option>
          <option>AMB - 002</option>
          <option>AMB - 003</option>
        </select>

        <div className="flex gap-4">
          <button className="p-2 px-4 rounded-md bg-black text-white">
            List view
          </button>
          <button className="p-2 px-4 rounded-md border-gray-200 border-2">
            Map view
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiveTrackingHeading;

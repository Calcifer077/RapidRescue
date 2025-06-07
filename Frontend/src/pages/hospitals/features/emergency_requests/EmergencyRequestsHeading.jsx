function EmergencyRequestHeading() {
  return (
    <div className="bg-white w-full p-6 px-12 rounded-lg shadow-lg mt-4 max-w-7xl mx-auto">
      <h1 className="text-main-text font-bold text-xl">Emergency Requests</h1>
      <p className="text-normal-text font-medium text-md">
        Manage incoming ambulance requests and assign available units
      </p>

      <div className="flex gap-3 mt-3">
        <input
          placeholder="Seach by patient name or location"
          className="w-full rounded-lg border-2 border-gray-100 transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none p-2"
        />
        <select
          name="condition"
          className="p-2 rounded-lg border-gray-100 border-2 focus:border-gray-900"
        >
          <option>All severities</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
    </div>
  );
}

export default EmergencyRequestHeading;

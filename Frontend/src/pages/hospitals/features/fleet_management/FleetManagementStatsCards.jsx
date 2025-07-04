const styleMap = {
  available: "text-status-available",
  responding: "text-status-responding",
  transporting: "text-status-transporting",
  maintanence: "text-status-maintanence",
};

function FleetManagementStatsCards({ number, type }) {
  return (
    <div>
      <div
        className={`p-5 rounded-lg shadow-md bg-white flex items-center flex-col`}
      >
        <div className={`${styleMap[type]}`}>{number}</div>
        <div className="capitalize font-semibold">{type}</div>
      </div>
    </div>
  );
}

export default FleetManagementStatsCards;

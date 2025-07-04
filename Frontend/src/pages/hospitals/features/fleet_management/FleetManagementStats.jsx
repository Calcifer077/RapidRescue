import FleetManagementStatsCards from "./FleetManagementStatsCards";

function FleetManagementStats() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6 max-w-7xl mx-auto">
      <FleetManagementStatsCards type="available" number={4} />
      <FleetManagementStatsCards type="responding" number={4} />
      <FleetManagementStatsCards type="transporting" number={4} />
      <FleetManagementStatsCards type="maintanence" number={4} />
    </div>
  );
}

export default FleetManagementStats;

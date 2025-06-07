import OverviewCards from "./OverviewCards";

function OverviewHeading() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6 max-w-7xl mx-auto">
      <OverviewCards heading="Active Ambulance" color="blue-500" number="12" />

      <OverviewCards heading="Pending Requests" color="red-500" number="12" />

      <OverviewCards heading="Completed Today" color="green-600" number="12" />

      <OverviewCards
        heading="Avg Response Time"
        color="indigo-600"
        number="12"
      />
    </div>
  );
}

export default OverviewHeading;

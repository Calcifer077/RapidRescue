import OverviewActivityCards from "./OverviewActivityCards";

function OverviewActivity() {
  return (
    <div className="max-w-7xl mx-auto bg-grey mt-4 p-6 rounded-lg">
      <div>
        <h1 className="text-main-text font-bold text-2xl tracking-wide">
          Recent Activity
        </h1>
        <p className="text-normal-text mt-2">
          Latest updates from the emergency response system
        </p>
      </div>

      <div>
        <OverviewActivityCards
          text="AMB-001 dispatched to emergency at Main St"
          time="2 min ago"
          priority="high"
        />

        <OverviewActivityCards
          text="AMB-003 completed transport to General Hospital"
          time="5 min ago"
          priority="low"
        />

        <OverviewActivityCards
          text="New emergency request from Downtown area"
          time="7 min ago"
          priority="medium"
        />
      </div>
    </div>
  );
}

export default OverviewActivity;

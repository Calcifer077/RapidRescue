import LiveTrackingCard from "./LiveTrackingCard";

function LiveTrackingCardsOverview() {
  return (
    <div className="max-w-7xl mx-auto h-full">
      <LiveTrackingCard
        ambulanceId="AMB-001"
        ambulanceDriver="John Martinez"
        status="responding"
        location={{
          address: "5th Ave & 42nd St",
          coordinates: { lat: 40.7124, lng: -74.0069 },
        }}
        destination="123 Main St"
        eta="6 min"
        // additionalInfo="Chest pain emergency"
      />

      <LiveTrackingCard
        ambulanceId="AMB-001"
        ambulanceDriver="John Martinez"
        status="available"
        location={{
          address: "5th Ave & 42nd St",
          coordinates: { lat: 40.7124, lng: -74.0069 },
        }}
        destination="123 Main St"
        eta="6 min"
        additionalInfo="Chest pain emergency"
      />

      <LiveTrackingCard
        ambulanceId="AMB-001"
        ambulanceDriver="John Martinez"
        status="transporting"
        location={{
          address: "5th Ave & 42nd St",
          coordinates: { lat: 40.7124, lng: -74.0069 },
        }}
        destination="123 Main St"
        eta="6 min"
        additionalInfo="Chest pain emergency"
      />

      <LiveTrackingCard
        ambulanceId="AMB-001"
        ambulanceDriver="John Martinez"
        status="offline"
        location={{
          address: "5th Ave & 42nd St",
          coordinates: { lat: 40.7124, lng: -74.0069 },
        }}
        destination="123 Main St"
        eta="6 min"
        additionalInfo="Chest pain emergency"
      />
    </div>
  );
}

export default LiveTrackingCardsOverview;

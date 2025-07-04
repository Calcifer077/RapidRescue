import FleetManagementCard from "./FleetManagementCard";

function FleetManagementCardsOverview() {
  return (
    <div className="max-w-7xl mx-auto">
      <FleetManagementCard
        ambulanceId="AMB-001"
        driverName="John Martinez"
        status="responding"
        shift="Day Shift (6AM - 6PM)"
        phone="+1 (555) 101-2001"
        vehicleInfo={{
          totalMiles: 42150,
          fuelLevel: "75%",
          lastMaintainence: "2024-05-15",
        }}
        equipments={[
          "Defibrillator",
          "Oxygen Tank",
          "Stretcher",
          "First Aid Kit",
        ]}
      />

      <FleetManagementCard
        ambulanceId="AMB-001"
        driverName="John Martinez"
        status="available"
        shift="Day Shift (6AM - 6PM)"
        phone="+1 (555) 101-2001"
        vehicleInfo={{
          totalMiles: 42150,
          fuelLevel: "75%",
          lastMaintainence: "2024-05-15",
        }}
        equipments={[
          "Defibrillator",
          "Oxygen Tank",
          "Stretcher",
          "First Aid Kit",
        ]}
      />

      <FleetManagementCard
        ambulanceId="AMB-001"
        driverName="John Martinez"
        status="transporting"
        shift="Day Shift (6AM - 6PM)"
        phone="+1 (555) 101-2001"
        vehicleInfo={{
          totalMiles: 42150,
          fuelLevel: "75%",
          lastMaintainence: "2024-05-15",
        }}
        equipments={[
          "Defibrillator",
          "Oxygen Tank",
          "Stretcher",
          "First Aid Kit",
        ]}
      />

      <FleetManagementCard
        ambulanceId="AMB-001"
        driverName="John Martinez"
        status="offline"
        shift="Day Shift (6AM - 6PM)"
        phone="+1 (555) 101-2001"
        vehicleInfo={{
          totalMiles: 42150,
          fuelLevel: "75%",
          lastMaintainence: "2024-05-15",
        }}
        equipments={[
          "Defibrillator",
          "Oxygen Tank",
          "Stretcher",
          "First Aid Kit",
        ]}
      />

      <FleetManagementCard
        ambulanceId="AMB-001"
        driverName="John Martinez"
        status="maintenance"
        shift="Day Shift (6AM - 6PM)"
        phone="+1 (555) 101-2001"
        vehicleInfo={{
          totalMiles: 42150,
          fuelLevel: "75%",
          lastMaintainence: "2024-05-15",
        }}
        equipments={[
          "Defibrillator",
          "Oxygen Tank",
          "Stretcher",
          "First Aid Kit",
        ]}
      />
    </div>
  );
}

export default FleetManagementCardsOverview;

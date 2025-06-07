import EmergencyRequestsCard from "./EmergencyRequestsCard";

function EmergencyRequestsCardsOverview() {
  return (
    <div>
      <EmergencyRequestsCard
        name="John Smith"
        location="123 Main St, Downtown"
        distance="2.3 km"
        phone="+1 (555) 123-4567"
        condition="critical"
        time="2 min ago"
        symptoms={["Chest pain", "difficulty breathing"]}
      />
    </div>
  );
}

export default EmergencyRequestsCardsOverview;

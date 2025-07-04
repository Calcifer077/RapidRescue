import EmergencyRequestsCard from "./EmergencyRequestsCard";

function EmergencyRequestsCardsOverview() {
  return (
    <div className="max-w-7xl mx-auto ">
      <EmergencyRequestsCard
        name="John Smith"
        location="123 Main St, Downtown"
        distance="2.3 km"
        phone="+1 (555) 123-4567"
        condition="critical"
        time="2 min ago"
        symptoms={["Chest pain", "difficulty breathing"]}
      />

      <EmergencyRequestsCard
        name="Sarah Johnson"
        location="456 Oak Ave, Suburbs"
        distance="4.1 km"
        phone="+1 (555) 987-6543"
        condition="high"
        time="5 min ago"
        symptoms={["Severe abdominal pain"]}
      />

      <EmergencyRequestsCard
        name="Sarah Johnson"
        location="456 Oak Ave, Suburbs"
        distance="4.1 km"
        phone="+1 (555) 987-6543"
        condition="medium"
        time="5 min ago"
        symptoms={["Severe abdominal pain"]}
      />

      <EmergencyRequestsCard
        name="Sarah Johnson"
        location="456 Oak Ave, Suburbs"
        distance="4.1 km"
        phone="+1 (555) 987-6543"
        condition="low"
        time="5 min ago"
        symptoms={["Severe abdominal pain"]}
      />

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

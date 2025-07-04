import AssignmentCard from "./AssignmentCard";

function Assignments() {
  return (
    <div className="pb-4">
      <h1 className="pl-18 py-4 font-bold text-4xl">Current Assignments (2)</h1>

      <AssignmentCard
        id="AMB-001"
        priority="high"
        assigned={true}
        name="John Miller"
        age="45"
        symptom="Chest Pain"
        pickupLocation="123 Oak Street, Downtown"
        destination="Metro Emergency Center"
        destinationEta="15"
      />

      <AssignmentCard
        id="AMB-001"
        priority="critical"
        assigned={false}
        name="John Miller"
        age="45"
        symptom="Chest Pain"
        pickupLocation="123 Oak Street, Downtown"
        destination="Metro Emergency Center"
        destinationEta="15"
      />
    </div>
  );
}

export default Assignments;

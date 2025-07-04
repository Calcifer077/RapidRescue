import DriverNavbar from "../components/DriverNavbar";
import DriverHeading from "../components/DriverHeading";
import DriverStatus from "../components/DriverStatus";
import Assignments from "../features/assignements/Assignments";

function DashboardDriver() {
  return (
    <div className="bg-brown min-h-lvh">
      <DriverNavbar />
      <DriverHeading />
      <DriverStatus />
      <Assignments />
    </div>
  );
}

export default DashboardDriver;

import HeadingHospital from "./components/HeadingHospital";
import DashboardHospital from "./pages/DashboardHospital";

function MainHospitalPage() {
  return (
    <div className="w-full bg-brown">
      <HeadingHospital />
      <DashboardHospital />
    </div>
  );
}

export default MainHospitalPage;

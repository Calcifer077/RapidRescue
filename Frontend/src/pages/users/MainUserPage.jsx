import NavbarUser from "./components/NavbarUser";
import FooterPageUser from "./pages/FooterPageUser";
import LandingPageUser from "./pages/LandingPageUser";
import ProfilePageUser from "./pages/ProfilePageUser";
import ServicesPageUser from "./pages/ServicesPageUser";

function MainUserPage() {
  return (
    <div className="w-full">
      <NavbarUser />
      {/* <LandingPageUser />
      <div className="px-4 bg-brown">
        <div className="border-b-3 border-light-green bg-brown"></div>
      </div>
      <ServicesPageUser /> */}
      <ProfilePageUser />
      <FooterPageUser />
    </div>
  );
}

export default MainUserPage;

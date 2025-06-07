import CallToAction from "./CallToAction";
import FooterLandingPage from "./FooterLandingPage";
import HeroLandingPage from "./HeroLandingPage";
import HowItWorks from "./HowItWorks";
import NavbarLandingPage from "./NavbarLandingPage";
import RoleCards from "./RoleCards";

function MainLandingPage() {
  return (
    <div className="w-full overflow-hidden">
      <NavbarLandingPage />
      <HeroLandingPage />
      <CallToAction />
      <HowItWorks />
      <RoleCards />
      <FooterLandingPage />
    </div>
  );
}

export default MainLandingPage;

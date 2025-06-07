import { FaArrowCircleDown } from "react-icons/fa";

function HeroLandingPage() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute z-0 top-0 left-0 w-full h-full">
        <img
          src="/landing-page-hero.jpg"
          alt="Landing Page Hero"
          className="object-cover w-full h-full"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-24">
        {/* 'leading-tight' is used for line height. */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg text-light-green">
          Swift Response, Safe Hands – Anytime, Anywhere
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl drop-shadow-md text-grey">
          Connect with emergency services in real time — whether you're a
          patient, hospital staff, or ambulance driver.
        </p>
      </div>

      {/* Scroll Indicator Icon */}
      {/* 'animate-bounce' is an inbuilt tailwind classe for bouncing animation.*/}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <FaArrowCircleDown className="text-white text-4xl cursor-pointer" />
      </div>
    </div>
  );
}

export default HeroLandingPage;

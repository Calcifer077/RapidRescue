import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import Heading from "../../../components/Heading";
import Button from "../../../components/Button";

function SignupUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="grid h-screen md:grid-cols-[2fr_3fr] gap-4 overflow-y-hidden">
      <div className="hidden md:inline">
        <img src="sign-up-left.jpg" className="h-screen w-full object-cover" />
      </div>
      <div className="h-screen flex flex-col items-center mt-20">
        <h1 className="text-center text-2xl font-bold text-main-text">
          Register Here
        </h1>
        <h1 className="text-center text-md text-normal-text">
          Already have a account?
          <a className="text-normal-green font-semibold cursor-pointer">
            {" "}
            Login
          </a>
        </h1>

        <form className="w-full p-30 pt-2 md:p-10 md:pt-2 lg:w-100 lg:p-0 flex flex-col gap-4 mt-10">
          <input
            placeholder="Fullname"
            className="w-full rounded-lg border-2 p-3 transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none"
          />

          <input
            placeholder="Email Address"
            className="w-full rounded-lg border-2 p-3 transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg border-2 p-3 pr-10 overflow-x-auto whitespace-nowrap transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none"
            />
            <button
              onClick={() => setShowPassword((show) => !show)}
              type="button"
              className="absolute right-4 top-4 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-main-text" />
              ) : (
                <FaEye className="text-main-text" />
              )}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full rounded-lg border-2 p-3 pr-10 overflow-x-auto whitespace-nowrap transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <button
              onClick={() => setShowConfirmPassword((show) => !show)}
              type="button"
              className="absolute right-4 top-4 cursor-pointer"
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-main-text" />
              ) : (
                <FaEye className="text-main-text" />
              )}
            </button>
          </div>

          <input
            placeholder=" Allergies (if any)"
            className="w-full rounded-lg border-2 p-3 transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none"
          />

          <Button type="submit">SIGNUP</Button>
        </form>
      </div>
    </div>
  );
}

export default SignupUser;

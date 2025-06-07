import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "../../../components/Button";

function LoginUser() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="grid md:grid-cols-[3fr_2fr] gap-4 h-screen bg-brown">
      <div className="flex flex-col items-center mt-24">
        <h1 className="text-center text-2xl font-bold text-main-text">
          Welcome Back
        </h1>
        <h1 className="text-center text-md text-normal-text">
          Don't have an account yet?
          <a className="text-normal-green font-semibold cursor-pointer">
            {" "}
            Sign up
          </a>
        </h1>

        <form className="w-full p-30 pt-2 md:p-10 md:pt-2 lg:w-100 lg:p-0 flex flex-col gap-4 mt-10">
          <input
            placeholder="Email Address"
            className="w-full rounded-lg border-2 p-3 border-normal-green transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg border-2 p-3 pr-10 border-normal-green overflow-x-auto whitespace-nowrap transition-all focus:border-transparent focus:ring-2 focus:ring-dark-green focus:outline-none"
            />
            <button
              onClick={() => setShowPassword((show) => !show)}
              type="button"
              className="absolute right-4 top-4 text-gray-600 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-main-text" />
              ) : (
                <FaEye className="text-main-text" />
              )}
            </button>
          </div>

          <div className="relative mb-5">
            <div className="absolute right-0">
              <a className="text-normal-green font-semibold cursor-pointer">
                Forgot password?
              </a>
            </div>
          </div>
          <Button type="submit">LOGIN</Button>
        </form>
      </div>
      <div className="hidden md:inline">
        <img
          src="login-page-right.avif"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}

export default LoginUser;

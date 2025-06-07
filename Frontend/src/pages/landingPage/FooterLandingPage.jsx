import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function FooterLandingPage() {
  return (
    <div className="bg-grey py-16 px-12 w-full">
      <div className="grid grid-cols-2">
        {/* LEFT */}
        <h2 className="text-main-text text-4xl font-bold">Application Name</h2>
        {/* RIGHT */}
        <div>
          <ul className="flex justify-end gap-8 text-normal-text text-xl">
            <li
              className="underline underline-offset-2
            cursor-pointer hover:underline-offset-4 hover:scale-101 duration-200"
            >
              User App
            </li>
            <li className="underline underline-offset-2 cursor-pointer hover:underline-offset-4 hover:scale-101 duration-200">
              Hospital Dashboard
            </li>
            <li className="underline underline-offset-2 cursor-pointer hover:underline-offset-4 hover:scale-101 duration-200">
              Driver App
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-dark-green py-6"></div>
      {/* Here, will come my social links */}
      <div className="flex justify-between py-2">
        {/* LEFT */}
        <div className="font-bold text-main-text tracking-wide">
          &mdash; Designed by Mahesh
        </div>
        {/* RIGHT */}
        <div className="flex gap-2 text-2xl">
          <FaGithub className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default FooterLandingPage;

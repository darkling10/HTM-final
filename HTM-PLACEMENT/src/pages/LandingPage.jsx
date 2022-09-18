import React from "react";
import landingPageHero from "../components/assets/images/landingPageHero.svg";
function LandingPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <div className="min-h-[10vh]  flex flex-row justify-evenly items-center">
        <div className="text-start w-1/3 pl-32 lg:pl-48">Icon </div>
        <div className="flex flex-row justify-center gap-10 text-gray-400 w-1/3"></div>
        <div className="pr-16 w-1/3">
          <a
            href="/sign-in"
            className="bg-blue-600 px-12 py-2 rounded-lg text-white"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center  min-h-[90vh] bg-slate-50">
        <div className="text-[4rem] font-bold uppercase mx-10 ">
          The <span className="text-red-500">Modern</span> Way of getting your{" "}
          <span className="text-blue-700">Dream</span> job
        </div>
        <div className="font-semibold text-xl  ">
          Let's Get beyond the college placements . Let's get beyond the
          network.
          <p>Let Your Skills and Hardwork pay off here.</p>
        </div>
        <a
          href="/sign-in"
          className="bg-blue-600 px-20 my-5 py-2 rounded-lg text-white"
        >
          Get Started
        </a>
        <img src={landingPageHero} className="mt-10" alt="" />
      </div>
    </div>
  );
}

export default LandingPage;

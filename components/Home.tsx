"use client";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { PersonalForm } from "./PersonalForm";
import { useState } from "react";

export const Home = () => {
  const [active, setActive] = useState("Personal");

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar active={active} onSelect={setActive} />

        {/* Left Column */}
        <div className="flex-1 overflow-y-auto">
          {active === "Personal" && <PersonalForm />}
          {active === "Work" && <p>Work Form</p>}
          {active === "Education" && <p>Education Form</p>}
          {active === "Skills" && <p>Skills Form</p>}
          {active === "Projects" && <p>Projects Form</p>}
        </div>

        {/* Right Column - Live Preview */}
        <div className="w-[420px] border-l border-gray-200 p-6 overflow-y-auto">
          <p className="text-sm font-medium text-gray-500 mb-4">LIVE PREVIEW</p>
        </div>
      </div>
    </div>
  );
};

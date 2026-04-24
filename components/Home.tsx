"use client";

import { FileText } from "lucide-react";
import { Navbar } from "./Navbar";
import { ResumeForm } from "./ResumeForm";

const categories = ["All", "Modern", "Creative", "Minimal", "ATS", "Standard"];
const links = [
  { label: "Templates", href: "/templates" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Pricing", href: "/pricing" },
];

export const Home = () => {
  return (
    <>
      <Navbar
        logoText="ResumeCraft"
        logoIcon={FileText}
        categories={categories}
        showSearch
        showUser={true}
        showHamburger={true}
        userName=""
        links={links}
      />
      <ResumeForm />
    </>
  );
};

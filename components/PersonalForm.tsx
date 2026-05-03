import { useState } from "react";
import { Input } from "./Input";

export const PersonalForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    professionalTitle: "",
    email: "",
    phone: "",
    summary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex flex-col  bg-[#FBF9F6]  px-4.5 pt-4 pb-6 gap-4">
      {/* Heading */}
      <div>
        <h2 className="text-[18px] font-bold text-gray-900 leading-tight tracking-[-0.01em]">
          Personal Information
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Let's start with the basics. This information will appear at the top
          of your resume.
        </p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6  pt-4 px-4 flex flex-col">
        <div className="grid grid-cols-2  gap-4 ">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Alex Rivera"
          />
          <Input
            label="Professional Title"
            name="professionalTitle"
            value={formData.professionalTitle}
            onChange={handleChange}
            placeholder="e.g. Senior Software Engineer"
          />
          <Input
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            type="email"
          />
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="flex flex-col pt-3 gap-1">
          <div className="flex justify-between items-center">
            <label className="text-[12px] leading-4font-medium text-gray-700">
              Professional Summary
            </label>
            <button className="text-xs text-orange-500 hover:text-orange-600 transition-colors">
              ✦ Enhance with AI
            </button>
          </div>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Briefly describe your career goals and key achievements..."
            className="w-full py-2 px-4 border border-red-300 rounded-lg text-[13px] outline-none focus:border-orange-400 resize-none"
            rows={3}
          />
        </div>
      </div>

      {/* live template */}
      <div className=""></div>
    </section>
  );
};

"use client";
import { useState } from "react";

export const ResumeForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
  });
  const [education, setEducation] = useState([
    { id: "1", school: "", degree: "", year: "" },
  ]);
  const addEducation = () => {
    setEducation([
      ...education,
      { id: Date.now().toString(), school: "", degree: "", year: "" },
    ]);
  };
  const removeEducation = (id: string) => {
    setEducation(education.filter((item) => item.id !== id));
  };
  const updateEducation = (id: string, field: string, value: string) => {
    setEducation(
      education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  // State
  const [experience, setExperience] = useState([
    { id: "1", company: "", role: "", duration: "", description: "" },
  ]);

  // Handlers
  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: Date.now().toString(),
        company: "",
        role: "",
        duration: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter((item) => item.id !== id));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setExperience(
      experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const [projects, setProjects] = useState([
    { id: "1", title: "", description: "", link: "" },
  ]);

  const addProject = () => {
    setProjects([
      ...projects,
      { id: Date.now().toString(), title: "", description: "", link: "" },
    ]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter((item) => item.id !== id));
  };

  const updateProject = (id: string, field: string, value: string) => {
    setProjects(
      projects.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };
  const handleSave = () => {
    const resumeData = {
      personalInfo,
      education,
      experience,
      skills,
      projects,
    };
    console.log("Resume Data:", resumeData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Personal Info
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
            className="border border-gray-200 rounded-lg rounded-corner px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            placeholder="Email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
            className="border border-gray-200 rounded-lg rounded-corner px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phone: e.target.value })
            }
            className="border border-gray-200 rounded-lg rounded-corner px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            placeholder="Portfolio"
            value={personalInfo.portfolio}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, portfolio: e.target.value })
            }
            className="border border-gray-200 rounded-lg rounded-corner px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Education
        </h2>
        {education.map((edu) => (
          <div
            key={edu.id}
            className="border border-gray-200 rounded-lg p-4 space-y-2"
          >
            <input
              placeholder="School / College"
              onChange={(e) =>
                updateEducation(edu.id, "school", e.target.value)
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Degree (e.g. B.Tech, MBA)"
              onChange={(e) =>
                updateEducation(edu.id, "degree", e.target.value)
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Year (e.g. 2020-2024)"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => removeEducation(edu.id)}
              className="text-red-500 text-sm hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addEducation}
          className="text-indigo-600 text-sm border border-indigo-600 rounded-lg px-3 py-1.5 hover:bg-indigo-50"
        >
          + Add Education
        </button>
      </section>
      <section>
        <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Work Experience
        </h2>

        {experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-lg p-4 space-y-2 mb-3"
          >
            <input
              placeholder="Company"
              value={exp.company}
              onChange={(e) =>
                updateExperience(exp.id, "company", e.target.value)
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Role"
              value={exp.role}
              onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Duration (e.g. Jan 2023 - Dec 2023)"
              value={exp.duration}
              onChange={(e) =>
                updateExperience(exp.id, "duration", e.target.value)
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Description"
              rows={3}
              value={exp.description}
              onChange={(e) =>
                updateExperience(exp.id, "description", e.target.value)
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-red-500 text-sm hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addExperience}
          className="text-indigo-600 text-sm border border-indigo-600 rounded-lg px-3 py-1.5 hover:bg-indigo-50"
        >
          + Add Experience
        </button>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Skills
        </h2>
        <div className="flex gap-2">
          <input
            placeholder="Skill likho (e.g. React)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addSkill()}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addSkill}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Add
          </button>
        </div>

        {/* Tags */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full flex items-center gap-1"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="text-indigo-400 hover:text-red-500 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </section>
      {/* Projects Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Projects
        </h2>

        {projects.map((proj) => (
          <div
            key={proj.id}
            className="border border-gray-200 rounded-lg p-4 space-y-2 mb-3"
          >
            <input
              placeholder="Project Title"
              value={proj.title}
              onChange={(e) => updateProject(proj.id, "title", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Description"
              rows={3}
              value={proj.description}
              onChange={(e) =>
                updateProject(proj.id, "description", e.target.value)
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="Project Link"
              value={proj.link}
              onChange={(e) => updateProject(proj.id, "link", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => removeProject(proj.id)}
              className="text-red-500 text-sm hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addProject}
          className="text-indigo-600 text-sm border border-indigo-600 rounded-lg px-3 py-1.5 hover:bg-indigo-50"
        >
          + Add Project
        </button>
      </section>

      {/* Submit Button */}
      <button
        onClick={handleSave}
        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
      >
        Save Resume
      </button>
    </div>
  );
};

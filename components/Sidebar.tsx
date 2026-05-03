import WorkIcon from "@/public/icons/work-Icon.svg";
import SkillIcon from "@/public/icons/skill-Icon.svg";
import ProjectIcon from "@/public/icons/project-Icon.svg";
import PersonalIcon from "@/public/icons/profile-Icon.svg";
import EducationIcon from "@/public/icons/education-Icon.svg";

import { SidebarSection } from "@/app/enums";

const sidebarItems = [
  { icon: PersonalIcon, label: SidebarSection.Personal },
  { icon: WorkIcon, label: SidebarSection.Work },
  { icon: EducationIcon, label: SidebarSection.Education },
  { icon: SkillIcon, label: SidebarSection.Skills },
  { icon: ProjectIcon, label: SidebarSection.Projects },
  //url send karna hai yaha se
];

type SidebarProps = {
  active: string;
  onSelect: (label: string) => void;
};
//esme destructure nahi karenge yha ander props likhnege and anser props. asese likhenfe
export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="border-r border-gray-200 bg-white z-40 h-full px-3">
      <div className="flex flex-col items-center pt-6 pb-3 gap-2">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            onClick={() => props.onSelect(item.label)}
            className={`flex flex-col items-center gap-0.5 py-1 px-1 transition-colors duration-150
          ${
            props.active === item.label
              ? "bg-orange-50 text-orange-500"
              : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          }`}
          >
            <item.icon width={12} height={12} />
            <span className="text-[7px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

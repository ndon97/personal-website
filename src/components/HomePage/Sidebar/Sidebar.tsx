import SidebarItem from "./SidebarItem";
import {
  FaHome,
  FaPeopleArrows,
  FaRocket,
  FaAddressCard,
  FaSchool,
  FaBuilding,
  FaStar,
} from "react-icons/fa";
import { MutableRefObject } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

type SideBarProps = {
  scrollToSection: (ref: MutableRefObject<HTMLDivElement | null>) => void;
  sections: {
    home: MutableRefObject<HTMLDivElement | null>;
    about: MutableRefObject<HTMLDivElement | null>;
    journey: MutableRefObject<HTMLDivElement | null>;
    skills: MutableRefObject<HTMLDivElement | null>;
    experience: MutableRefObject<HTMLDivElement | null>;
    education: MutableRefObject<HTMLDivElement | null>;
    contact: MutableRefObject<HTMLDivElement | null>;
  };
};

export default function SideBar({ scrollToSection, sections }: SideBarProps) {
  return (
    <div className="sticky top-0 flex h-[100dvh] w-max flex-col bg-slate-700 pr-6 shadow-lg">
      <div className="ml-2 mt-10 flex flex-col">
        <SidebarItem
          title="Home"
          icon={<FaHome className="mr-2" />}
          onClick={() => scrollToSection(sections.home)}
        />
        <SidebarItem
          title="About Me"
          icon={<FaPeopleArrows className="mr-2" />}
          onClick={() => scrollToSection(sections.about)}
        />
        <SidebarItem
          title="My Journey"
          icon={<FaRocket className="mr-2" />}
          onClick={() => scrollToSection(sections.journey)}
        />
        <SidebarItem
          title="Skills"
          icon={<FaStar className="mr-2" />}
          onClick={() => scrollToSection(sections.skills)}
        />
        <SidebarItem
          title="Experience"
          icon={<FaBuilding className="mr-2" />}
          onClick={() => scrollToSection(sections.experience)}
        />
        <SidebarItem
          title="Education"
          icon={<FaSchool className="mr-2" />}
          onClick={() => scrollToSection(sections.education)}
        />
        <SidebarItem
          title="Contact Me"
          icon={<FaAddressCard className="mr-2" />}
          onClick={() => scrollToSection(sections.contact)}
        />
      </div>
      <Image
        className="absolute bottom-0 rounded-full p-10"
        src={logo}
        alt="Nick Don"
      />
    </div>
  );
}

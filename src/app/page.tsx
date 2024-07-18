"use client";

import { useRef, MutableRefObject } from "react";
import SideBar from "../components/HomePage/Sidebar/Sidebar";
import HeroBanner from "../components/HomePage/HeroBanner/HeroBanner";
import About from "../components/HomePage/About/About";
import MyJourney from "../components/HomePage/MyJourney/MyJourney";
import Skills from "../components/HomePage/Skills/Skills";
import Experience from "../components/HomePage/Experience/Experience";
import Education from "../components/HomePage/Education/Education";
import ContactMe from "../components/HomePage/ContactMe/ContactMe";

type SectionRefs = {
  home: MutableRefObject<HTMLDivElement | null>;
  about: MutableRefObject<HTMLDivElement | null>;
  journey: MutableRefObject<HTMLDivElement | null>;
  skills: MutableRefObject<HTMLDivElement | null>;
  experience: MutableRefObject<HTMLDivElement | null>;
  education: MutableRefObject<HTMLDivElement | null>;
  contact: MutableRefObject<HTMLDivElement | null>;
};

export default function Homepage() {
  const heroBannerRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const myJourneyRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sections: SectionRefs = {
    home: heroBannerRef,
    about: aboutRef,
    journey: myJourneyRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
    contact: contactMeRef,
  };

  return (
    <div className="primary-text flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <SideBar scrollToSection={scrollToSection} sections={sections} />
      </div>
      <div>
        <div className="flex flex-col bg-slate-800 px-6">
          <div ref={heroBannerRef}>
            <HeroBanner />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={myJourneyRef}>
            <MyJourney />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={educationRef}>
            <Education />
          </div>
        </div>
        <div ref={contactMeRef}>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

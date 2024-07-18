import ContactMeCard from './ContactMeCard';
import { FaMobileAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center bg-cyan-900 px-4 py-10 sm:px-10">
      <h1 className="pb-8 text-center text-3xl font-medium text-teal-600">Contact</h1>
      <footer className="flex w-full flex-col justify-around gap-6 sm:flex-row sm:flex-wrap">
        <ContactMeCard
          title="Mobile"
          value="0425273316"
          icon={<FaMobileAlt size={30} className="text-teal-700" />}
        />
        <ContactMeCard
          title="Email"
          link="nick.don.1102@gmail.com"
          email={true}
          icon={<FaEnvelope size={30} className="text-red-700" />}
        />
        <ContactMeCard
          title="Github"
          link="https://github.com/ndon97"
          icon={<FaGithub size={30} className="text-slate-600" />}
        />
        <ContactMeCard
          title="LinkedIn"
          link="https://www.linkedin.com/in/nick-don/"
          icon={<FaLinkedin size={30} className="text-blue-800" />}
        />
      </footer>
    </div>
  );
}

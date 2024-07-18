import SkillsCard from './SkillsCard';
import { FaDatabase, FaLanguage, FaMicrochip } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className="flex h-auto w-full flex-col lg:h-[100dvh]">
      <div className="mb-auto mt-auto px-4 sm:px-10">
        <h1 className="mb-5 mt-6 text-center text-3xl font-medium text-teal-600 sm:text-4xl">
          Skills
        </h1>
        <div className="flex flex-col items-center justify-evenly lg:flex-row">
          <SkillsCard
            icon={<FaLanguage size={30} className="text-rose-700" />}
            title="Languages"
            description="JavaScript, TypeScript, Elixir, Ruby, Go"
            borderColor="border-cyan-700"
            backgroundColor="bg-cyan-200"
          />
          <SkillsCard
            icon={<FaMicrochip size={30} className="text-rose-700" />}
            title="Technologies"
            description="React, Rails, GraphQL, Git, AWS, Tailwind"
            borderColor="border-red-800"
            backgroundColor="bg-red-200"
          />
          <SkillsCard
            icon={<FaDatabase size={30} className="text-rose-700" />}
            title="Databases"
            description="SQL, PostgreSQL, MySQL"
            borderColor="border-orange-700"
            backgroundColor="bg-orange-200"
          />
        </div>
      </div>
    </div>
  );
}

import ExperienceTab from './ExperienceTab';

export default function Experience() {
  return (
    <div className="mt-10 flex h-auto w-full flex-col px-4 sm:px-10 lg:mt-0 lg:h-[100dvh]">
      <div className="mb-auto mt-auto">
        <h1 className="mb-8 text-center text-3xl font-medium text-teal-600 sm:text-4xl">
          Experience
        </h1>
        <ExperienceTab
          title="Xplor Technologies"
          role="Software Engineer"
          description="Xplor Technologies is the first global platform integrating Saas, Payments and Growth Technologies. They offer software solutions in fast-growing “everyday life” verticals: Childcare & Education, Fitness & Wellbeing, Field Services and Personal Services - and a global, cloud-based payment processing platform."
          points={[
            'Led the frontend development of a comprehensive website redesign project. Creating over a 100 new components.',
            'Worked on major Typescript/React features that significantly enhanced UI/UX, increasing customer satisfaction scores to over 97%.',
            'Designed and enhanced multiple Elixir backend API’s by adding and updating new endpoints to support over 20+ new web features.',
            'Developed and maintained several Elixir applications using Phoenix, Ecto, and ExUnit, resulting in a 15% increase in user engagement.',
            'Optimized existing GraphQL queries for better performance, eliminating a large number of customer complaints.',
            'Collaborated closely with product and design teams to develop an innovative, user-friendly product that meets customer needs.',
            'Identified, addressed, and resolved a range of bugs to improve overall website performance and stability.',
            'Initiated and implemented learning opportunities for junior team members, including lunch and learn sessions and team-based PR reviews.',
            'Advocated for and implemented changes that improved developer workflows and team collaboration.',
            'Assisted new employees with onboarding, ensuring a smooth transition and integration into the team.',
          ]}
        />
        <ExperienceTab
          title="Commonwealth Bank"
          role="Customer Service Representative"
          description="Commonwealth Bank is Australia's leading provider of integrated financial services including retail banking, premium banking, business banking, institutional banking, funds management, superannuation, insurance, investment and sharebroking products and services."
          points={[
            'Engaged with a diverse range of customers to understand their needs, delivering innovative solutions to address various issues.',
            'Consistently surpassed KPI targets for customer satisfaction and problem resolution, enhancing overall client experience.',
            'Assumed leadership roles in training new agents, ensuring a comprehensive and successful onboarding process.',
          ]}
        />
      </div>
    </div>
  );
}

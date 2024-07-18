type ExperienceTabProps = {
  title: string;
  role: string;
  description: string;
  points: string[];
};

export default function ExperienceTab({ title, role, description, points }: ExperienceTabProps) {
  return (
    <div className="mb-8">
      <h2 className="secondary-heading mb-3 mt-6 text-lg font-medium uppercase sm:text-xl">
        {title}
      </h2>
      <h3 className="mb-3 text-sm text-gray-400 sm:text-base">{role}</h3>
      <h4 className="mb-4 text-sm italic">{description}</h4>
      <ul className="list-inside list-disc pl-5">
        {points.map((point) => (
          <li key={point} className="mb-3 text-sm sm:text-base">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

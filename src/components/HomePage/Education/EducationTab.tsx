type EducationTabProps = {
  title: string;
  degree: string;
  description?: string;
};

export default function EducationTab({ title, degree, description }: EducationTabProps) {
  return (
    <div className="mb-6">
      <h2 className="secondary-heading mb-3 mt-6 text-lg font-medium uppercase sm:text-xl">
        {title}
      </h2>
      <ul className="list-inside list-disc text-gray-400">
        <li className="mb-3 text-sm sm:text-base">{degree}</li>
      </ul>
      {description && <p className="text-sm sm:text-base">{description}</p>}
    </div>
  );
}

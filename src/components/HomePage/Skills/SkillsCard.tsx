type SkillsCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  borderColor?: string;
  backgroundColor?: string;
};

export default function SkillsCard({
  icon,
  title,
  description,
  borderColor,
  backgroundColor,
}: SkillsCardProps) {
  return (
    <div
      className={`flex w-full max-w-xs flex-col items-center rounded-lg border-2 p-6 shadow-lg sm:w-80 sm:p-8 ${borderColor} ${backgroundColor} m-4`}
    >
      <div className="rounded-full bg-indigo-300 p-3">{icon}</div>
      <h2 className="mb-3 mt-6 text-center text-lg font-medium uppercase text-cyan-600 sm:text-xl">
        {title}
      </h2>
      <p className="mb-3 text-center text-slate-500">{description}</p>
    </div>
  );
}

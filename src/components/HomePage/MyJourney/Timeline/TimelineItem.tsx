type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
};

export default function TimelineItem({ date, title, description }: TimelineItemProps) {
  return (
    <li className="mb-6">
      <div className="flex items-center pt-3">
        <div className="mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <div className="ml-4 mt-2">
        <h4 className="secondary-heading mb-1.5 text-lg font-medium sm:text-xl">{title}</h4>
        <p className="mb-3">{description}</p>
      </div>
    </li>
  );
}

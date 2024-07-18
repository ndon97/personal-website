type ContactMeCardProps = {
  icon?: JSX.Element;
  title: string;
  value?: string;
  link?: string;
  email?: boolean;
};

export default function ContactMeCard({ icon, title, value, link, email }: ContactMeCardProps) {
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <div className="rounded-full border border-sky-500 bg-slate-100 p-3">{icon}</div>
      <div className="mt-4 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h1 className="text-2xl">{title}</h1>
        {value && <p className="secondary-heading">{value}</p>}
        {link && (
          <a
            className="secondary-heading"
            href={email ? 'mailto:nick.don.1102@gmail.com' : link}
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
}

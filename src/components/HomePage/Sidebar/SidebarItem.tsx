type SidebarItemProps = {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
};

export default function SidebarItem({ icon, title, onClick }: SidebarItemProps) {
  return (
    <button onClick={onClick}>
      <div className="flex items-center p-3 text-teal-400">
        {icon}
        <p>{title}</p>
      </div>
    </button>
  );
}

export function PageHeader({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="wrap pb-10 pt-12 lg:pb-14 lg:pt-20">
      <h1 className="display-section max-w-4xl">{title}</h1>
      {lead && <p className="lead mt-5 max-w-2xl">{lead}</p>}
      {children}
    </header>
  );
}

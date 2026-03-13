interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function ProgramCard({ icon, title, description, href }: ProgramCardProps) {
  const content = (
    <div className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary transition-all">
      <div className="text-primary">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

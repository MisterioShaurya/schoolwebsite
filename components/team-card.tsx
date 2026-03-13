interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export function TeamCard({ image, name, role, bio }: TeamCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-card overflow-hidden border border-border hover:shadow-lg transition-all">
      <div className="h-48 bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm font-medium text-accent mb-3">{role}</p>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}

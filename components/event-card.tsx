interface EventCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
  time?: string;
}

export function EventCard({ date, title, description, image, time }: EventCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-card border border-border overflow-hidden hover:shadow-lg transition-all">
      <div className="h-40 bg-muted overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded">
            {date}
          </span>
          {time && (
            <span className="text-sm text-muted-foreground">{time}</span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

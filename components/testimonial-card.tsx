import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating?: number;
}

export function TestimonialCard({ name, role, quote, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-accent text-accent"
          />
        ))}
      </div>
      <p className="text-foreground italic">"{quote}"</p>
      <div className="pt-2 border-t border-border">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'background' | 'card' | 'primary' | 'gradient';
}

export function SectionWrapper({
  children,
  className,
  bg = 'background',
}: SectionWrapperProps) {
  const bgClasses = {
    background: 'bg-background',
    card: 'bg-card',
    primary: 'bg-primary text-primary-foreground',
    gradient: 'bg-gradient-to-b from-primary/5 to-transparent',
  };

  return (
    <section className={cn('w-full py-20 sm:py-28', bgClasses[bg], className)}>
      {children}
    </section>
  );
}

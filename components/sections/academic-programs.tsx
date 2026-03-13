import { BookOpen, Microscope, Globe, Code } from 'lucide-react';
import { ProgramCard } from '@/components/program-card';

export function AcademicProgramsSection() {
  const programs = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Liberal Arts',
      description: 'A comprehensive curriculum emphasizing critical thinking, creativity, and a deep understanding of diverse disciplines.',
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: 'STEM Pathway',
      description: 'Advanced courses in Science, Technology, Engineering, and Mathematics with hands-on laboratory experience.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Studies',
      description: 'Develop international perspectives through language immersion, cultural studies, and global partnerships.',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Digital Innovation',
      description: 'Master coding, design thinking, and digital entrepreneurship in our state-of-the-art technology labs.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Academic Excellence</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Rigorous & Diverse Programs
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We offer multiple pathways to help students discover their passions and develop expertise in areas that matter most to them.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, idx) => (
            <ProgramCard
              key={idx}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

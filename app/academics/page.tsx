import { Metadata } from 'next';
import { BookOpen, Microscope, Globe, Code, Award, Users } from 'lucide-react';
import { ProgramCard } from '@/components/program-card';

export const metadata: Metadata = {
  title: 'Academic Programs - Stellar Academy',
  description: 'Explore Stellar Academy\'s rigorous and diverse academic programs including Liberal Arts, STEM, Global Studies, and Digital Innovation.',
};

export default function AcademicsPage() {
  const programs = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Liberal Arts',
      description: 'A comprehensive curriculum emphasizing critical thinking, creativity, and deep understanding across all disciplines. Students explore literature, history, languages, and philosophy.',
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: 'STEM Pathway',
      description: 'Advanced courses in Science, Technology, Engineering, and Mathematics with hands-on laboratory experience. Includes robotics, coding, and engineering design.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Studies',
      description: 'Develop international perspectives through language immersion, cultural studies, and global partnerships. Students engage with world issues and global citizenship.',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Digital Innovation',
      description: 'Master coding, design thinking, and digital entrepreneurship in our state-of-the-art technology labs. Prepare for careers in tech and innovation.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              Academic Excellence
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rigorous, diverse programs designed to challenge and inspire every student.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Choose the pathway that aligns with your interests and goals. Many students pursue multiple pathways.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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

      {/* Course Offerings */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Course Offerings</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              From foundational courses to advanced seminars, our curriculum provides depth and breadth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: 'English',
                courses: 'American Literature, British Literature, Creative Writing, AP English Language & Composition',
              },
              {
                category: 'Mathematics',
                courses: 'Algebra, Geometry, Trigonometry, Calculus, AP Calculus, Statistics',
              },
              {
                category: 'Sciences',
                courses: 'Biology, Chemistry, Physics, Environmental Science, AP Biology, AP Chemistry',
              },
              {
                category: 'Social Studies',
                courses: 'World History, US History, Government, Economics, AP US History',
              },
              {
                category: 'Languages',
                courses: 'Spanish, French, Mandarin Chinese, Japanese',
              },
              {
                category: 'Arts & Electives',
                courses: 'Visual Arts, Music, Theater, Technology, Entrepreneurship',
              },
            ].map((subject, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-3">{subject.category}</h3>
                <p className="text-sm text-muted-foreground">{subject.courses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Advanced Placement */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Honors & AP Courses</h2>
                <p className="text-base text-muted-foreground mb-4">
                  For students seeking additional academic challenge, we offer a comprehensive Honors program and 18 Advanced Placement courses.
                </p>
                <p className="text-base text-muted-foreground">
                  Our students consistently score above national averages on AP exams, with 85% earning college credit.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Advanced Placement in 18 subjects',
                  'Honors sections in core subjects',
                  'Independent study opportunities',
                  'Research internships',
                  'Dual enrollment with local colleges',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Class Size</p>
                  <p className="text-2xl font-bold text-primary">12-15 students</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Student-Teacher Ratio</p>
                  <p className="text-2xl font-bold text-primary">7:1</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">AP Pass Rate</p>
                  <p className="text-2xl font-bold text-primary">85%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">College Acceptance</p>
                  <p className="text-2xl font-bold text-primary">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Student Support</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We believe in supporting the whole student. Our comprehensive support services help every student thrive.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Academic Advising',
                description: 'Personalized guidance on course selection and academic planning.',
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: 'Tutoring & Tutors',
                description: 'Individual and group tutoring available in all subjects.',
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Counseling',
                description: 'Professional counselors support students\' emotional and social wellbeing.',
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'College Prep',
                description: 'Dedicated support for college applications and career planning.',
              },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col gap-4 p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all">
                <div className="text-primary">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

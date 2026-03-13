import { Palette, Music, Trophy, BookOpen } from 'lucide-react';

export function ActivitiesSection() {
  const categories = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Sports',
      activities: 'Varsity teams, intramurals, and fitness programs in basketball, soccer, volleyball, and more.',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Arts & Culture',
      activities: 'Theater, visual arts, debate, and cultural clubs celebrating creativity and expression.',
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Music & Performing Arts',
      activities: 'Band, orchestra, choir, and dance ensembles performing throughout the year.',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Academic Clubs',
      activities: 'Science club, math team, robotics, environmental club, and subject-specific societies.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Beyond the Classroom</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Clubs & Activities
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Students develop leadership, friendship, and passions through over 50 clubs and activities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all">
              <div className="text-accent">{category.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.activities}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

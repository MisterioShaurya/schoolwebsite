export function AchievementsSection() {
  const achievements = [
    {
      icon: '🏆',
      title: 'National Recognition',
      description: 'Ranked among top schools nationally for academic excellence and student achievement.',
    },
    {
      icon: '📚',
      title: 'Advanced Placement',
      description: 'Comprehensive AP program with 85% of students earning college credit.',
    },
    {
      icon: '🌍',
      title: 'Global Partnerships',
      description: 'Exchange programs and partnerships with schools across six continents.',
    },
    {
      icon: '👨‍🎓',
      title: 'Ivy League Success',
      description: '40% of graduates accepted to Ivy League and equivalent universities.',
    },
    {
      icon: '🎯',
      title: 'College Placement',
      description: '100% of graduates accepted to four-year universities of their choice.',
    },
    {
      icon: '💡',
      title: 'Innovation Awards',
      description: 'Students regularly win national competitions in science, technology, and the arts.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Proud Record</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Our Achievements Speak for Themselves
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            At Stellar Academy, success is measured not just in grades, but in the positive impact our students make.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary transition-all">
              <div className="text-4xl">{achievement.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  const facilities = [
    {
      image: 'https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?w=400&h=300&fit=crop',
      title: 'Modern Library',
      description: 'A comprehensive resource center with digital databases, quiet study areas, and collaborative spaces.',
    },
    {
      image: 'https://images.pexels.com/photos-3735707/pexels-photo-3735707.jpeg?w=400&h=300&fit=crop',
      title: 'STEM Labs',
      description: 'State-of-the-art laboratories equipped with cutting-edge technology for hands-on learning.',
    },
    {
      image: 'https://images.pexels.com/photos/3394541/pexels-photo-3394541.jpeg?w=400&h=300&fit=crop',
      title: 'Sports Complex',
      description: 'Olympic-quality facilities including courts, fields, and wellness centers for physical excellence.',
    },
    {
      image: 'https://images.pexels.com/photos-3587478/pexels-photo-3587478.jpeg?w=400&h=300&fit=crop',
      title: 'Performing Arts Center',
      description: 'A 500-seat theater featuring professional-grade equipment for music, drama, and dance.',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">World-Class Facilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Learning Spaces Designed for Success
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Our campus features modern facilities that support academic achievement, artistic expression, and athletic excellence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {facilities.map((facility, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all">
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

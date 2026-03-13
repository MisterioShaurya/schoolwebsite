import { EventCard } from '@/components/event-card';

export function EventsSection() {
  const events = [
    {
      date: 'March 22',
      title: 'Spring Concert',
      description: 'A celebration of music featuring our band, orchestra, and vocal ensembles.',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?w=400&h=300&fit=crop',
      time: '7:00 PM',
    },
    {
      date: 'April 5',
      title: 'Science Fair',
      description: 'Students showcase innovative research projects and experiments.',
      image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?w=400&h=300&fit=crop',
      time: '2:00 PM',
    },
    {
      date: 'April 18',
      title: 'Annual Athletic Day',
      description: 'Join us for competitions, field events, and celebrations of sportsmanship.',
      image: 'https://images.pexels.com/photos/3394541/pexels-photo-3394541.jpeg?w=400&h=300&fit=crop',
      time: '9:00 AM',
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Upcoming Events</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Join Us For Memorable Moments
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Our campus buzzes with energy year-round. Check out our upcoming events and mark your calendar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <EventCard
              key={idx}
              date={event.date}
              title={event.title}
              description={event.description}
              image={event.image}
              time={event.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

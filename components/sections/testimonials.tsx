import { TestimonialCard } from '@/components/testimonial-card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Recent Graduate, Harvard University',
      quote: 'Stellar Academy gave me the academic foundation and confidence I needed to thrive at Harvard. The teachers genuinely care about student growth.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Parent',
      quote: 'I\'ve seen my daughter blossom into a confident, thoughtful young woman. The holistic approach to education here is exceptional.',
      rating: 5,
    },
    {
      name: 'Maria Williams',
      role: 'Class of 2024',
      quote: 'The combination of academic rigor and supportive community made my high school experience unforgettable. I\'ll always be proud to be a Stellar Academy student.',
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Success Stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            What Our Community Says
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Hear from students, parents, and alumni about their Stellar Academy experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

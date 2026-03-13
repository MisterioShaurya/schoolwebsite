import { Metadata } from 'next';
import { TeamCard } from '@/components/team-card';

export const metadata: Metadata = {
  title: 'About Us - Stellar Academy',
  description: 'Learn about Stellar Academy\'s mission, values, leadership team, and commitment to educational excellence.',
};

export default function AboutPage() {
  const leadership = [
    {
      image: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg?w=400&h=400&fit=crop',
      name: 'Dr. Elizabeth Thompson',
      role: 'Head of School',
      bio: 'With 25 years in education, Dr. Thompson leads our vision of academic excellence and student growth.',
    },
    {
      image: 'https://images.pexels.com/photos-3651019/pexels-photo-3651019.jpeg?w=400&h=400&fit=crop',
      name: 'Mr. James Patterson',
      role: 'Academic Dean',
      bio: 'An innovative educator passionate about curriculum development and student success.',
    },
    {
      image: 'https://images.pexels.com/photos-5632399/pexels-photo-5632399.jpeg?w=400&h=400&fit=crop',
      name: 'Ms. Maria Santos',
      role: 'Director of Admissions',
      bio: 'Maria is dedicated to finding the right fit for each prospective student.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              About Stellar Academy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our mission, values, and the people who make our school exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <img
              src="https://images.pexels.com/photos-3938022/pexels-photo-3938022.jpeg?w=600&h=600&fit=crop"
              alt="School building"
              className="rounded-2xl"
            />
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-base text-muted-foreground mb-4">
                  Stellar Academy was founded in 1995 with a simple but profound vision: to create a school where every student could discover and develop their unique potential. What began as a small community of educators and families has grown into a thriving institution recognized for academic excellence and character development.
                </p>
                <p className="text-base text-muted-foreground">
                  Today, nearly 800 students across grades 6-12 experience our comprehensive educational program, supported by over 100 dedicated faculty and staff members.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-base text-muted-foreground italic border-l-4 border-primary pl-4">
                  "To inspire and empower students to become thoughtful leaders, critical thinkers, and compassionate global citizens."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define the Stellar Academy experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Excellence',
                description: 'We pursue the highest standards in everything we do, from academics to athletics to the arts.',
              },
              {
                title: 'Integrity',
                description: 'We act with honesty, responsibility, and respect for ourselves and others.',
              },
              {
                title: 'Community',
                description: 'We foster a supportive environment where everyone belongs and contributes.',
              },
              {
                title: 'Innovation',
                description: 'We embrace creative thinking and prepare students for an ever-changing world.',
              },
              {
                title: 'Inclusivity',
                description: 'We celebrate diversity and create opportunities for all students to succeed.',
              },
              {
                title: 'Growth Mindset',
                description: 'We believe in the potential of every student and embrace challenges as opportunities.',
              },
            ].map((value, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Experienced educators committed to student success and institutional excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((leader, idx) => (
              <TeamCard
                key={idx}
                image={leader.image}
                name={leader.name}
                role={leader.role}
                bio={leader.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Accreditation & Recognition</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Stellar Academy maintains rigorous standards and is recognized by leading educational organizations.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3 pt-8">
              {[
                'Middle States Association Accredited',
                'National Association of Independent Schools',
                'Ranked Top 50 Schools Nationally',
              ].map((cert, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-background border border-border">
                  <p className="font-semibold text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

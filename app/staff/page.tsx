import { Metadata } from 'next';
import { TeamCard } from '@/components/team-card';

export const metadata: Metadata = {
  title: 'Faculty & Staff - Stellar Academy',
  description: 'Meet the dedicated educators and support staff committed to student success at Stellar Academy.',
};

export default function StaffPage() {
  const faculty = [
    {
      image: 'https://images.pexels.com/photos-3807517/pexels-photo-3807517.jpeg?w=400&h=400&fit=crop',
      name: 'Dr. Michael Chen',
      role: 'Math Department Chair',
      bio: 'PhD in Mathematics Education with 15 years of experience. Passionate about developing critical thinking skills.',
    },
    {
      image: 'https://images.pexels.com/photos-3651019/pexels-photo-3651019.jpeg?w=400&h=400&fit=crop',
      name: 'Dr. Sarah Williams',
      role: 'English Department Chair',
      bio: 'Expert in contemporary literature and writing instruction. Mentor to countless award-winning student authors.',
    },
    {
      image: 'https://images.pexels.com/photos-5632399/pexels-photo-5632399.jpeg?w=400&h=400&fit=crop',
      name: 'Dr. James Murphy',
      role: 'Science Department Chair',
      bio: 'Former research scientist now dedicated to inspiring the next generation of scientists and thinkers.',
    },
    {
      image: 'https://images.pexels.com/photos-2993206/pexels-photo-2993206.jpeg?w=400&h=400&fit=crop',
      name: 'Ms. Maria Garcia',
      role: 'World Languages',
      bio: 'Native Spanish speaker with extensive study abroad experience. Makes language learning engaging and practical.',
    },
    {
      image: 'https://images.pexels.com/photos-3769021/pexels-photo-3769021.jpeg?w=400&h=400&fit=crop',
      name: 'Mr. Robert Jackson',
      role: 'History & Social Studies',
      bio: 'Brings history to life through engaging discussions and innovative project-based learning.',
    },
    {
      image: 'https://images.pexels.com/photos-3938022/pexels-photo-3938022.jpeg?w=400&h=400&fit=crop',
      name: 'Ms. Alexandra Lee',
      role: 'Technology & Innovation',
      bio: 'Leads our cutting-edge technology program and guides students through digital innovation.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              Our Faculty & Staff
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated educators committed to student success and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* About Teachers */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <img
              src="https://images.pexels.com/photos-4145353/pexels-photo-4145353.jpeg?w=600&h=600&fit=crop"
              alt="Teachers collaborating"
              className="rounded-2xl"
            />
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Exceptional Educators</h2>
              <p className="text-base text-muted-foreground">
                Our faculty members are carefully selected for their expertise, passion for teaching, and commitment to student development. They bring real-world experience, advanced degrees, and a genuine love for their disciplines.
              </p>
              <p className="text-base text-muted-foreground">
                With an average of 10+ years of teaching experience, our educators create engaging, challenging, and supportive learning environments where every student can thrive.
              </p>

              <div className="grid gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-4 w-4 bg-primary rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ongoing Professional Development</p>
                    <p className="text-sm text-muted-foreground">Regular training in latest teaching methodologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-4 w-4 bg-primary rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Advanced Degrees</p>
                    <p className="text-sm text-muted-foreground">60% hold advanced degrees (Masters or PhD)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-4 w-4 bg-primary rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mentorship Culture</p>
                    <p className="text-sm text-muted-foreground">Each student has a dedicated advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Faculty Directory</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Meet some of our outstanding faculty members.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member, idx) => (
              <TeamCard
                key={idx}
                image={member.image}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Support Team</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Behind every great school is a dedicated support team committed to student success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'College Counselors',
                description: 'Guide students through the college application process and career exploration.',
              },
              {
                title: 'Academic Advisors',
                description: 'Help students plan their academic pathway and select courses.',
              },
              {
                title: 'School Counselors',
                description: 'Support student emotional wellbeing and personal development.',
              },
              {
                title: 'Learning Specialists',
                description: 'Work with students who need additional academic support.',
              },
              {
                title: 'Athletics Staff',
                description: 'Coach varsity and intramural sports programs.',
              },
              {
                title: 'Administrative Team',
                description: 'Ensure smooth operations and school community support.',
              },
            ].map((role, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Staff Matters */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Our Staff Makes the Difference</h2>
            <p className="text-base text-muted-foreground">
              Our educators don't just teach subjects—they inspire students to discover their passions, develop critical thinking skills, and become engaged citizens of the world. Every interaction is an opportunity to support growth.
            </p>

            <div className="grid gap-6 md:grid-cols-3 pt-8">
              {[
                {
                  stat: '95%',
                  label: 'Student Satisfaction Rating',
                },
                {
                  stat: '10+',
                  label: 'Average Years of Experience',
                },
                {
                  stat: '100',
                  label: 'Faculty & Staff Members',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-background border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{item.stat}</p>
                  <p className="text-foreground font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

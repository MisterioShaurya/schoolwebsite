'use client';

import { useState } from 'react';
import { Check, Calendar, FileText, Users } from 'lucide-react';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gradeLevel: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will be in touch soon.');
    setFormData({ name: '', email: '', phone: '', gradeLevel: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              Join Our Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our admissions process and take the next step toward a transformative education.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Admissions Process</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We seek curious, engaged students who are ready to challenge themselves academically and grow as people.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '1',
                icon: <FileText className="h-8 w-8" />,
                title: 'Submit Application',
                description: 'Complete our online application with transcripts and recommendations.',
              },
              {
                step: '2',
                icon: <Users className="h-8 w-8" />,
                title: 'Interview',
                description: 'Meet with our admissions team to learn about your academic interests.',
              },
              {
                step: '3',
                icon: <FileText className="h-8 w-8" />,
                title: 'Testing',
                description: 'Take our entrance exam to assess academic readiness.',
              },
              {
                step: '4',
                icon: <Check className="h-8 w-8" />,
                title: 'Notification',
                description: 'Receive your admissions decision and enrollment information.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <div className="absolute top-8 -right-8 text-primary-foreground">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Important Dates</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar for key admissions dates.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { event: 'Application Opens', date: 'September 1' },
              { event: 'Campus Tours Begin', date: 'September 15' },
              { event: 'Application Deadline', date: 'January 15' },
              { event: 'Admissions Decisions', date: 'March 1' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-accent flex-shrink-0" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.event}</h3>
                <p className="text-base text-primary font-semibold">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Request Information</h2>
            <p className="text-base text-muted-foreground">
              Tell us about yourself and we'll send you more details about Stellar Academy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-card border border-border p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Interested Grade Level *
                </label>
                <select
                  required
                  value={formData.gradeLevel}
                  onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select grade level</option>
                  <option value="6-7">Middle School (6-7)</option>
                  <option value="8-9">Freshman (8-9)</option>
                  <option value="10">Sophomore (10)</option>
                  <option value="11">Junior (11)</option>
                  <option value="12">Senior (12)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                placeholder="Tell us about your interest in Stellar Academy..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is the application fee?',
                a: 'The application fee is $75. This fee is non-refundable and helps us process applications efficiently.',
              },
              {
                q: 'What tests do I need to take?',
                a: 'We require our entrance exam in English and Mathematics. Standardized test scores (SSAT, ISEE) are optional but helpful.',
              },
              {
                q: 'What is the acceptance rate?',
                a: 'We accept approximately 25-30% of applicants. We seek students who demonstrate academic potential and a commitment to community.',
              },
              {
                q: 'Do you offer financial aid?',
                a: 'Yes! We offer need-based and merit-based financial aid to ensure qualified students can attend regardless of financial circumstances.',
              },
              {
                q: 'Can I schedule a campus tour?',
                a: 'Absolutely! Tours are available throughout the academic year. Please contact our admissions office to schedule.',
              },
              {
                q: 'What is your boarding situation?',
                a: 'Stellar Academy is a day school. We do not offer boarding, but we serve a regional community.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

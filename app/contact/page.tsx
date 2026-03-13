'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Contact our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Phone</p>
                <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 8 AM - 4 PM</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Email</p>
                <p className="text-sm text-muted-foreground">info@stellaracademy.edu</p>
                <p className="text-xs text-muted-foreground mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Address</p>
                <p className="text-sm text-muted-foreground">123 Education Street</p>
                <p className="text-sm text-muted-foreground">Learning City, LC 12345</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground mb-2">Office Hours</p>
                <p className="text-sm text-muted-foreground">Monday - Friday</p>
                <p className="text-sm text-muted-foreground">8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Send Us a Message</h2>
            <p className="text-base text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-background border border-border p-8">
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
                  className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={6}
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Departments */}
      <section className="w-full py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Department Contacts</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Contact specific departments for specialized inquiries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                dept: 'Admissions Office',
                email: 'admissions@stellaracademy.edu',
                phone: '(555) 123-4568',
              },
              {
                dept: 'Academic Affairs',
                email: 'academics@stellaracademy.edu',
                phone: '(555) 123-4569',
              },
              {
                dept: 'Student Life',
                email: 'studentlife@stellaracademy.edu',
                phone: '(555) 123-4570',
              },
              {
                dept: 'Athletics',
                email: 'athletics@stellaracademy.edu',
                phone: '(555) 123-4571',
              },
              {
                dept: 'Development Office',
                email: 'giving@stellaracademy.edu',
                phone: '(555) 123-4572',
              },
              {
                dept: 'Human Resources',
                email: 'careers@stellaracademy.edu',
                phone: '(555) 123-4573',
              },
            ].map((dept, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-4">{dept.dept}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                    <a href={`mailto:${dept.email}`} className="text-sm text-primary hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a href={`tel:${dept.phone}`} className="text-sm text-primary hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-20 sm:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Visit Our Campus</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              123 Education Street, Learning City, LC 12345
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border h-96 bg-muted">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <p className="text-foreground font-semibold">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground">Check back soon for our interactive campus map</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

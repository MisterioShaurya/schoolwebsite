import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export function ContactPreviewSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Contact Our Admissions Office
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our admissions team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
            <div className="p-3 rounded-lg bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <p className="text-sm text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
            <div className="p-3 rounded-lg bg-accent/10">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p className="text-sm text-muted-foreground">admissions@stellaracademy.edu</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground mb-1">Address</p>
              <p className="text-sm text-muted-foreground">123 Education Street, Learning City, LC 12345</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
            <div className="p-3 rounded-lg bg-accent/10">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground mb-1">Hours</p>
              <p className="text-sm text-muted-foreground">Mon - Fri, 8 AM - 4 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Send us a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent">Welcome to Excellence</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Shape Tomorrow's Leaders Today
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                At Stellar Academy, we blend academic rigor with character development to inspire students to achieve their full potential.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=600&h=600&fit=crop"
              alt="Students learning together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

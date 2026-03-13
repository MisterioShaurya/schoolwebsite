import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Take the next step toward a transformative educational experience. Learn about our admissions process and schedule a campus visit today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Apply Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-3 text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

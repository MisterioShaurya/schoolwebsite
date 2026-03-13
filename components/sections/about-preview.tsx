import Link from 'next/link';

export function AboutPreviewSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Image */}
          <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?w=600&h=600&fit=crop"
              alt="School campus"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                A Legacy of Excellence
              </h2>
              <p className="text-base text-muted-foreground">
                Founded in 1995, Stellar Academy has been a beacon of educational excellence for nearly three decades. Our commitment to nurturing intellectual curiosity, character development, and leadership skills has produced alumni who make a meaningful impact in their communities and the world.
              </p>
              <p className="text-base text-muted-foreground">
                With a faculty of dedicated educators and a community of engaged families, we create an environment where every student can thrive academically and personally.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground">Alumni</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">College Acceptance</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Clubs & Activities</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex w-fit rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

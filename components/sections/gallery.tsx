export function GallerySection() {
  const gallery = [
    'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=400&h=400&fit=crop',
    'https://images.pexels.com/photos-3938022/pexels-photo-3938022.jpeg?w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/3651019/pexels-photo-3651019.jpeg?w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/2993206/pexels-photo-2993206.jpeg?w=400&h=400&fit=crop',
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3">Campus Life</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            A Glimpse of Our Community
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant energy and tight-knit community that defines Stellar Academy.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, idx) => (
            <div
              key={idx}
              className="relative h-64 sm:h-72 rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all group cursor-pointer"
            >
              <img
                src={image}
                alt={`Campus moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

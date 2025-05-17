import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Creating unforgettable events with premium furniture rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground mb-8">
                Founded with a passion for creating exceptional event experiences, ElegantRentals has become a leading provider of premium furniture rentals for events of all sizes.
              </p>

              <div className="bg-muted rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To transform events into extraordinary experiences by providing high-quality furniture and exceptional service.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in our furniture collection, ensuring every piece meets our strict quality criteria.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Expert Service</h3>
                  <p className="text-muted-foreground">
                    Our team of event specialists provides personalized guidance to help you create the perfect atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
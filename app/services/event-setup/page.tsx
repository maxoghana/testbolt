import { SectionHeading } from "@/components/ui/section-heading";

export default function EventSetupPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Setup & Breakdown</h1>
            <p className="text-lg text-muted-foreground">
              Professional setup and breakdown services for seamless events.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-lg">Event setup services details coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
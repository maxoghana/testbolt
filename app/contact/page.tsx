import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for any inquiries or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Event Avenue, Paris, 75001, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@elegantrentals.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map or Additional Content */}
              <div className="bg-muted rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Visit Our Showroom</h2>
                <p className="text-muted-foreground mb-4">
                  Experience our furniture collection in person at our Paris showroom. 
                  Schedule an appointment for a personalized consultation.
                </p>
                <p className="text-sm text-muted-foreground">
                  * Appointments are recommended for the best experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
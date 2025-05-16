"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteForm } from "@/components/quote/quote-form";

export default function QuotePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your event, and we'll create a custom furniture package that fits your needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card shadow-sm rounded-xl p-6 md:p-8">
              <SectionHeading 
                title="Your Event Details" 
                subtitle="Please provide as much information as possible to help us understand your needs."
              />
              
              <QuoteForm />
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <h3 className="text-xl font-medium mb-3">What happens next?</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">1</div>
                  <div>
                    <p className="text-muted-foreground">
                      Our team reviews your request (typically within 24 hours)
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">2</div>
                  <div>
                    <p className="text-muted-foreground">
                      We create a personalized proposal based on your event needs
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">3</div>
                  <div>
                    <p className="text-muted-foreground">
                      You receive a detailed quote via email with furniture options and pricing
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">4</div>
                  <div>
                    <p className="text-muted-foreground">
                      We refine the proposal together until it perfectly meets your vision
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ConsultationPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Consultation</h1>
            <p className="text-lg text-muted-foreground">
              Expert guidance for your event design needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-lg">Design consultation services details coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
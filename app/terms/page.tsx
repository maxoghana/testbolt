"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">
              These terms and conditions outline the rules and regulations for the use of ElegantRentals's services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Rental Terms</h2>
              <p className="text-muted-foreground mb-4">
                Coming soon...
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Coming soon...
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Delivery & Setup</h2>
              <p className="text-muted-foreground mb-4">
                Coming soon...
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
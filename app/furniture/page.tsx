"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FurnitureGrid } from "@/components/furniture/furniture-grid";
import { FURNITURE_CATEGORIES, FEATURED_FURNITURE } from "@/lib/constants";

export default function FurniturePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Furniture Collection</h1>
            <p className="text-lg text-muted-foreground">
              Browse our extensive collection of premium furniture available for your next event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Browse by Category"
            subtitle="Find the perfect pieces for your event"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {FURNITURE_CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Furniture */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Available Furniture"
            subtitle="Explore our collection of premium furniture pieces"
            centered
          />

          <div className="mt-12">
            <FurnitureGrid items={FEATURED_FURNITURE} columns={4} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Need Help Selecting Furniture?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our event specialists are here to help you choose the perfect pieces for your occasion.
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/quote"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Request a Quote
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
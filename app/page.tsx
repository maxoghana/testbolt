"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FurnitureGrid } from "@/components/furniture/furniture-grid";
import { TestimonialSlider } from "@/components/testimonials/testimonial-slider";
import { CollectionCard } from "@/components/collections/collection-card";
import { EventTypeCard } from "@/components/home/event-type-card";
import { 
  FEATURED_FURNITURE, 
  COLLECTIONS, 
  TESTIMONIALS,
  EVENT_TYPES
} from "@/lib/constants";

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Elevate Your Event with Premium Furniture"
        subtitle="Curated collections of elegant furniture for weddings, corporate events, and special occasions."
        ctaText="Explore Furniture"
        ctaLink="/furniture"
        secondaryCtaText="Request a Quote"
        secondaryCtaLink="/quote"
        backgroundImage="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
        overlayOpacity={0.5}
      />

      {/* Featured Furniture */}
      <section className="py-20 px-4 container mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Featured Furniture"
            subtitle="Discover our most popular pieces for your next event"
            centered
          />
        </motion.div>

        <FurnitureGrid items={FEATURED_FURNITURE} />

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/furniture" className="px-6">
              View All Furniture
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Curated Collections"
              subtitle="Perfectly coordinated furniture sets for a cohesive look"
              centered
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COLLECTIONS.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Event Inspiration"
            subtitle="Browse our furniture selections by event type"
            centered
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EVENT_TYPES.slice(0, 3).map((eventType) => (
            <EventTypeCard key={eventType.id} eventType={eventType} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/inspiration" className="px-6">
              Explore All Event Types
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Hear from event planners and hosts who have used our furniture"
              centered
            />
          </motion.div>

          <div className="mt-12">
            <TestimonialSlider testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Transform Your Event?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let our furniture experts help you create the perfect atmosphere for your special occasion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-primary-foreground/20">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
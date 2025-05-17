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
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg')",
          }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Location de Meubles Premium
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pour vos événements d'exception
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg"
              >
                <Link href="/quote">
                  Demander un Devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos Catégories"
            subtitle="Découvrez notre sélection de meubles haut de gamme"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {COLLECTIONS.slice(0, 3).map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos Produits Phares"
            subtitle="Une sélection de nos meubles les plus demandés"
            centered
          />
          <FurnitureGrid items={FEATURED_FURNITURE.slice(0, 6)} columns={3} />
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Types d'Événements"
            subtitle="Des solutions adaptées à chaque occasion"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {EVENT_TYPES.slice(0, 3).map((eventType) => (
              <EventTypeCard key={eventType.id} eventType={eventType} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ils Nous Font Confiance"
            subtitle="Ce que nos clients disent de nous"
            centered
          />
          <div className="mt-12">
            <TestimonialSlider testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Créer Votre Événement de Rêve ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour un devis personnalisé
          </p>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/quote">
              Demander un Devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
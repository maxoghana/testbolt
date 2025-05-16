"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "relative flex flex-col p-6 bg-card rounded-xl shadow-sm overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <QuoteIcon className="text-primary/20 h-12 w-12 absolute right-6 top-6" />
      
      <div className="z-10 flex-1">
        <p className="text-foreground leading-relaxed mb-6 relative z-10">
          "{testimonial.quote}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full overflow-hidden relative">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          
          <div>
            <h4 className="font-medium">{testimonial.author}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.event}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
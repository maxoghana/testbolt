"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EventTypeCardProps {
  eventType: EventType;
  className?: string;
}

export function EventTypeCard({ eventType, className }: EventTypeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden shadow-sm group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="aspect-[3/2] relative overflow-hidden">
        <Image
          src={eventType.image}
          alt={eventType.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="absolute bottom-0 w-full p-6 text-white">
        <h3 className="text-xl font-medium mb-2">{eventType.name}</h3>
        
        <div 
          className={cn(
            "py-1.5 px-3 text-sm bg-white/10 backdrop-blur-sm rounded-full w-fit transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0 translate-y-4"
          )}
        >
          Get Inspired
        </div>
      </div>

      <Link
        href={`/inspiration/${eventType.id}`}
        className="absolute inset-0 z-10"
        aria-label={`Browse ${eventType.name} inspiration`}
      />
    </motion.div>
  );
}
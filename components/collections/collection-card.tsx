"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Collection } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
  className?: string;
}

export function CollectionCard({ collection, className }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl aspect-[4/3]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          "object-cover transition-transform duration-700",
          isHovered && "scale-110"
        )}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-1">{collection.name}</h3>
        <p className="text-white/80 mb-4 text-sm">{collection.description}</p>
        
        <div 
          className={cn(
            "flex items-center text-sm font-medium transition-all duration-300 opacity-60 group-hover:opacity-100",
            isHovered && "translate-x-2"
          )}
        >
          Explore Collection <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
      
      <Link
        href={`/collections/${collection.id}`}
        className="absolute inset-0 z-10"
        aria-label={`Explore ${collection.name} collection`}
      />
    </motion.div>
  );
}
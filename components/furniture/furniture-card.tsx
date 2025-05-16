"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlusCircle, Eye } from "lucide-react";
import { FurnitureItem } from "@/lib/types";

interface FurnitureCardProps {
  item: FurnitureItem;
  className?: string;
  priority?: boolean;
}

export function FurnitureCard({ item, className, priority = false }: FurnitureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden shadow-sm transition-all duration-300 h-full",
        isHovered && "shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover object-center transition-transform duration-500",
            isHovered && "scale-110"
          )}
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-semibold">€{item.price} <span className="text-sm font-normal text-muted-foreground">/ day</span></p>
          <Button
            variant="ghost"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add to Quote
          </Button>
        </div>
      </div>

      <Link
        href={`/furniture/${item.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${item.name}`}
      />
    </motion.div>
  );
}
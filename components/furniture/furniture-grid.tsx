"use client";

import { FurnitureItem } from "@/lib/types";
import { FurnitureCard } from "@/components/furniture/furniture-card";
import { motion } from "framer-motion";

interface FurnitureGridProps {
  items: FurnitureItem[];
  columns?: number;
}

export function FurnitureGrid({ items, columns = 3 }: FurnitureGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <motion.div
      className={`grid ${columnClasses[columns as keyof typeof columnClasses]} gap-6`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, index) => (
        <FurnitureCard
          key={item.id}
          item={item}
          priority={index < 6}
        />
      ))}
    </motion.div>
  );
}
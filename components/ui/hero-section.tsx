"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
  overlayOpacity?: number;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText = "Browse Furniture",
  ctaLink = "/furniture",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  overlayOpacity = 0.4,
  className,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      />
      
      <div className="relative z-10 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            className={cn(
              "text-xl md:text-2xl text-white/90 mb-8 transition-all duration-700 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {subtitle}
          </p>
        )}
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <Button 
            asChild
            size="lg"
            className="rounded-full bg-white text-black hover:bg-white/90"
          >
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="rounded-full border-white text-white hover:bg-white/20"
            >
              <Link href={secondaryCtaLink}>
                {secondaryCtaText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
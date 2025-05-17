"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={cn(
                "text-2xl font-bold transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {SITE_CONFIG.logoText}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              variant={isScrolled ? "default" : "outline"}
              className={cn(
                "rounded-full",
                !isScrolled && "border-white text-white hover:bg-white/20"
              )}
            >
              <Link href="/quote" className="flex items-center gap-2">
                <Phone size={16} />
                <span>Devis Gratuit</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={cn(
                  "h-6 w-6",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} />
              <span>Devis Gratuit</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
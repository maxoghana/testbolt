import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">{SITE_CONFIG.logoText}</h3>
            <p className="text-muted-foreground">
              Premium furniture rentals for weddings, corporate events, galas, and special occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/furniture"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Furniture Rental
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/custom-design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Design Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/event-setup"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Event Setup & Breakdown
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/consultation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Design Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Event Avenue, Paris, 75001, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span className="text-muted-foreground">contact@elegantrentals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
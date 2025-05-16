"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function FurniturePage() {
  const params = useParams();
  const id = params.id as string;
  
  // In a real application, you would fetch the furniture details from your database
  // using the ID from the params. For now, we'll show a basic layout.
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Link 
        href="/furniture" 
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Furniture
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
          {/* Placeholder for furniture image */}
          <p className="text-gray-500">Product Image</p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold mb-4 capitalize">
              {id.replace(/-/g, " ")}
            </h1>
            
            <p className="text-gray-600 mb-6">
              Experience luxury and comfort with our premium furniture piece. 
              Crafted with attention to detail and using high-quality materials.
            </p>
            
            <div className="text-2xl font-bold mb-6">$1,299.99</div>
            
            <Button className="w-full" size="lg">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            
            <div className="mt-8">
              <h2 className="font-semibold mb-2">Product Details</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Premium quality materials</li>
                <li>Ergonomic design</li>
                <li>Easy maintenance</li>
                <li>5-year warranty</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
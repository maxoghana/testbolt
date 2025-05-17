"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COLLECTIONS } from "@/lib/constants";

export default function CollectionPage() {
  const params = useParams();
  const id = params.id as string;
  const collection = COLLECTIONS.find(c => c.id === id);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link 
        href="/collections" 
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Collections
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{collection?.name || "Collection"}</h1>
        <p className="text-muted-foreground mb-8">{collection?.description}</p>

        <div className="bg-muted rounded-lg p-8 text-center">
          <p className="text-lg">Collection details coming soon...</p>
        </div>
      </div>
    </main>
  );
}
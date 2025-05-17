"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EVENT_TYPES } from "@/lib/constants";

// This needs to be a Server Component function, so it's defined outside the Client Component
export function generateStaticParams() {
  return EVENT_TYPES.map((eventType) => ({
    id: eventType.id,
  }));
}

export default function EventTypePage() {
  const params = useParams();
  const id = params.id as string;
  const eventType = EVENT_TYPES.find(e => e.id === id);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link 
        href="/inspiration" 
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Inspiration
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{eventType?.name || "Event Type"}</h1>
        
        <div className="bg-muted rounded-lg p-8 text-center">
          <p className="text-lg">Event inspiration details coming soon...</p>
        </div>
      </div>
    </main>
  );
}
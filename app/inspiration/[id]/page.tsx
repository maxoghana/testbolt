import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { EVENT_TYPES } from "@/lib/constants";

export function generateStaticParams() {
  return EVENT_TYPES.map((eventType) => ({
    id: eventType.id,
  }));
}

export default function EventTypePage({ params }: { params: { id: string } }) {
  const id = params.id;
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
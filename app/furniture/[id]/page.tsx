import { FurniturePageClient } from './client';

// This runs on the server at build time to generate all possible furniture page routes
export function generateStaticParams() {
  // In a real application, you would fetch these IDs from your database
  // These are example furniture IDs that will be pre-rendered at build time
  return [
    { id: 'luxury-sofa' },
    { id: 'modern-dining-table' },
    { id: 'leather-armchair' },
    { id: 'queen-bed-frame' },
    { id: 'storage-cabinet' }
  ];
}

export default function FurniturePage({ params }: { params: { id: string } }) {
  return <FurniturePageClient />;
}
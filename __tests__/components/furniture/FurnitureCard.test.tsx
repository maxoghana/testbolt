import { render, screen } from '@testing-library/react';
import { FurnitureCard } from '@/components/furniture/furniture-card';

const mockItem = {
  id: 'test-furniture',
  name: 'Test Furniture',
  category: 'seating',
  price: '100',
  image: 'https://example.com/image.jpg',
  description: 'Test description',
};

describe('FurnitureCard', () => {
  it('renders furniture information correctly', () => {
    render(<FurnitureCard item={mockItem} />);
    
    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
    expect(screen.getByText('€100')).toBeInTheDocument();
  });

  it('includes a link to the furniture detail page', () => {
    render(<FurnitureCard item={mockItem} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/furniture/${mockItem.id}`);
  });
});
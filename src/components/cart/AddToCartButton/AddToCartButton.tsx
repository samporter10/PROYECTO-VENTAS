'use client';

import React from 'react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button/Button';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image_url?: string | null;
  };
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.image_url || undefined,
    });
  };

  return (
    <Button variant="secondary" fullWidth onClick={handleAdd}>
      Agregar al carrito
    </Button>
  );
};

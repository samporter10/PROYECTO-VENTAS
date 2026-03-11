import React from 'react';
import styles from './ProductCard.module.css';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { ProductImage } from './ProductImage';

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
  badge?: string;
  onAddToCart?: (id: string) => void;
  isLoading?: boolean;
  actionSlot?: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  badge,
  onAddToCart,
  isLoading,
  actionSlot
}) => {
  if (isLoading) {
    return (
      <article className={styles.cardSkeleton} aria-busy="true">
        <div className={styles.imageSkeleton} />
        <div className={styles.contentSkeleton}>
          <div className={styles.titleSkeleton} />
          <div className={styles.priceSkeleton} />
          <div className={styles.buttonSkeleton} />
        </div>
      </article>
    );
  }

  const formattedPrice = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  }).format(price);

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {badge && (
          <div className={styles.badgeWrapper}>
            <Badge variant="primary">{badge}</Badge>
          </div>
        )}
        {imageUrl ? (
          <ProductImage
            src={imageUrl}
            alt={title}
            className={styles.image}
            placeholderClassName={styles.placeholderImage}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <span>Sin imagen</span>
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>
        <p className={styles.price}>{formattedPrice}</p>
        
        <div className={styles.actions}>
          {actionSlot || (
            <Button 
              variant="secondary" 
              fullWidth 
              onClick={() => onAddToCart && onAddToCart(id)}
            >
              Agregar
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

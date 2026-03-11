'use client';

import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ 
  src, 
  alt, 
  className,
  placeholderClassName 
}) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={placeholderClassName}>
        <span>Sin imagen</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
};

import { productService } from '@/services/productService';
import { ProductCard } from '@/components/ui/ProductCard/ProductCard';
import { ErrorMessage } from '@/components/ui/ErrorMessage/ErrorMessage';
import { AddToCartButton } from '@/components/cart/AddToCartButton/AddToCartButton';
import styles from './page.module.css';

export const revalidate = 60; // Revalidate every minute for TikTok dynamic flow

export default async function CatalogPage() {
  const { data: products, error } = await productService.getProducts();

  if (error) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Catálogo</h1>
          <ErrorMessage 
            message="No pudimos cargar el catálogo en este momento. Por favor, intenta de nuevo más tarde." 
          />
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Catálogo de Productos</h1>
        <p className={styles.subtitle}>Descubre nuestra selección pensada para ti</p>
        
        {products && products.length > 0 ? (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                imageUrl={product.image_url || undefined}
                badge={product.is_featured ? 'Destacado' : undefined}
                actionSlot={<AddToCartButton product={product} />}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No hay productos disponibles por el momento.</p>
          </div>
        )}
      </div>
    </main>
  );
}

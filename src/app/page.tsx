import Link from 'next/link';
import { productService } from '@/services/productService';
import { ProductCard } from '@/components/ui/ProductCard/ProductCard';
import { Button } from '@/components/ui/Button/Button';
import { AddToCartButton } from '@/components/cart/AddToCartButton/AddToCartButton';
import styles from './page.module.css';

export const revalidate = 60; // Revalidate every minute 

export default async function Home() {
  const { data: products } = await productService.getProducts();
  
  // Show only up to 4 featured products on home
  const featuredProducts = products?.filter(p => p.is_featured).slice(0, 4) || [];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Descubre las últimas <span className={styles.accent}>tendencias</span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span className={styles.marketingPhrase}>"No todo lo que se oculta debe ser ignorado."</span>
            <br/><br/>
            Catálogo exclusivo para nuestra comunidad de TikTok. Encuentra lo que buscas al mejor precio.
          </p>
          <div className={styles.heroActions}>
            <Link href="/catalog" tabIndex={-1}>
              <Button size="large">Ir al Catálogo</Button>
            </Link>
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className={styles.featured}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Destacados de la semana</h2>
              <Link href="/catalog" className={styles.viewAllBtn}>
                Ver todo →
              </Link>
            </div>
            
            <div className={styles.grid}>
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  imageUrl={product.image_url || undefined}
                  badge="Destacado"
                  actionSlot={<AddToCartButton product={product} />}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

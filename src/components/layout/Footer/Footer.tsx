import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <h2 className={styles.brandTitle}>Ventas<span className={styles.accent}>App</span></h2>
            <p className={styles.description}>
              Tu catálogo en línea de confianza. Envíos a todo el país.
            </p>
          </div>
          
          <div className={styles.links}>
            <h3 className={styles.linksTitle}>Enlaces Rápidos</h3>
            <ul className={styles.linksList}>
              <li><a href="/catalog">Catálogo de Productos</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Políticas de Envío</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>&copy; {currentYear} VentasApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

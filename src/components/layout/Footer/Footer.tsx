import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <div className={styles.brandHeader}>
              <img src="/logo.png" alt="Sam Porter Logo" className={styles.footerLogo} />
              <h2 className={styles.brandTitle}>Sam <span className={styles.accent}>Porter</span></h2>
            </div>
            <p className={styles.description}>
              "No todo lo que se oculta debe ser ignorado."
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
          <p>&copy; {currentYear} Sam Porter. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

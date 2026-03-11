import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo Online | Ventas",
  description: "Encuentra la mejor selección de productos. Catálogo actualizado dinámicamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 60px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

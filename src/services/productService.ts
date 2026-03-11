import { supabase } from '../lib/supabaseClient';
import { Database } from '../types/database.types';

type ProductRow = Database['public']['Tables']['products']['Row'];
type CategoryRow = Database['public']['Tables']['categories']['Row'];

export const productService = {
  /**
   * Obtiene todos los productos, opcionalmente filtrados por categoría.
   */
  async getProducts(categoryId?: string): Promise<{ data: ProductRow[] | null; error: Error | null }> {
    try {
      let query = supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      console.error('Error fetching products:', err);
      return { data: null, error: err instanceof Error ? err : new Error('Unknown error') };
    }
  },

  /**
   * Obtiene un producto por su ID
   */
  async getProductById(id: string): Promise<{ data: ProductRow | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
        
      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      console.error(`Error fetching product ${id}:`, err);
      return { data: null, error: err instanceof Error ? err : new Error('Unknown error') };
    }
  },

  /**
   * Obtiene todas las categorías
   */
  async getCategories(): Promise<{ data: CategoryRow[] | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
        
      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      console.error('Error fetching categories:', err);
      return { data: null, error: err instanceof Error ? err : new Error('Unknown error') };
    }
  }
};

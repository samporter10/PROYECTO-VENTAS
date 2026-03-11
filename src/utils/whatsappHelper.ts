import { CartItem } from '../store/cartStore';

const WHATSAPP_NUMBER = '51993877775';

export const formatWhatsAppMessage = (items: CartItem[], total: number): string => {
  let message = '👋 Hola, vengo de TikTok y me gustaría realizar el siguiente pedido:\n\n';
  
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Cantidad: ${item.quantity}\n`;
    message += `   Precio unitario: S/ ${item.price.toFixed(2)}\n`;
    message += `   Subtotal: S/ ${(item.price * item.quantity).toFixed(2)}\n\n`;
  });
  
  message += `*Total a pagar: S/ ${total.toFixed(2)}*\n\n`;
  message += 'Por favor, confírmame los métodos de pago y el envío. ¡Gracias! 🚀';
  
  return encodeURIComponent(message);
};

export const getWhatsAppLink = (items: CartItem[], total: number): string => {
  const encodedMessage = formatWhatsAppMessage(items, total);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

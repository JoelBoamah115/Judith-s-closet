import { CartItem, Product } from "./types";

export const WHATSAPP_PHONE_NUMBER = "233547631900";
export const WHATSAPP_DISPLAY_NUMBER = "+233 54 763 1900";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

/**
 * Format WhatsApp message for a single product direct order
 */
export function createSingleProductWhatsAppUrl(
  product: Product,
  size: string,
  color?: string,
  quantity: number = 1
): string {
  const colorLine = color ? `\nColor: ${color}` : "";
  const total = product.price * quantity;
  
  const message = `Hello Judith's Closet! I would like to order:
Product: ${product.name}
Price: GH₵${product.price.toLocaleString()}
Size: ${size}${colorLine}
Quantity: ${quantity}
Total: GH₵${total.toLocaleString()}

Please let me know how I can complete my order.`;

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Format WhatsApp message for the entire shopping bag
 */
export function createCartWhatsAppUrl(items: CartItem[], totalAmount: number): string {
  if (items.length === 0) {
    return WHATSAPP_BASE_URL;
  }

  const itemsList = items
    .map((item, index) => {
      const colorText = item.selectedColor ? ` | Color: ${item.selectedColor}` : "";
      const itemSubtotal = item.product.price * item.quantity;
      return `${index + 1}. ${item.product.name}
   • Size: ${item.selectedSize}${colorText}
   • Quantity: ${item.quantity}
   • Price: GH₵${item.product.price.toLocaleString()} (Subtotal: GH₵${itemSubtotal.toLocaleString()})`;
    })
    .join("\n\n");

  const message = `Hello Judith's Closet! I would like to place an order for the following items from my shopping bag:

${itemsList}

========================
Estimated Order Total: GH₵${totalAmount.toLocaleString()}
========================

Please let me know availability and how I can proceed to finalize this order. Thank you!`;

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * General inquiry WhatsApp URL
 */
export function createGeneralInquiryWhatsAppUrl(topic?: string): string {
  const message = topic
    ? `Hello Judith's Closet! I am contacting you regarding: ${topic}. Could you kindly assist me?`
    : `Hello Judith's Closet! I would like to inquire about your fashion collections and styling availability.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

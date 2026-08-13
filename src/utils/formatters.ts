/**
 * Formats a date to "August 13, 2024" format.
 */
export function formatDate(date: string | null): string {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/**
 * Formats a date to "Aug 13" format.
 */
export function formatShortDate(date: string | null): string {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Formats a phone number into a tel: link.
 */
export function formatPhoneLink(phone: string | null): string {
  if (!phone) return '';
  // Remove non-numeric characters for the href except +
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  return `tel:${cleanPhone}`;
}

/**
 * Formats a WhatsApp number into a wa.me link.
 */
export function formatWhatsAppLink(phone: string | null): string {
  if (!phone) return '';
  // Remove all non-numeric characters for WhatsApp link
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}`;
}

/**
 * Formats an email into a mailto: link.
 */
export function formatEmailLink(email: string | null): string {
  if (!email) return '';
  return `mailto:${email}`;
}

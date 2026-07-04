import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

/** Build a WhatsApp chat URL from a display phone number. */
export function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return `https://wa.me/${digits}`
}

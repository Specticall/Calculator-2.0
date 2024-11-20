import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatNumber(num?: number | string) {
  if (!num) return undefined;
  if (typeof num === "string") {
    num = parseFloat(num);
  }
  return num.toLocaleString("de-DE");
}

export function isValidNumberString(num?: string) {
  if (!num) return undefined;
  const regex = /^-?(?!0\d)\d*(,\d+)?$/;
  return regex.test(num);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

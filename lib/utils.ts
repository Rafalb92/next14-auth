import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function hashPassword(password: string, bytes: number = 16) {
  const salt = crypto.randomBytes(bytes).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return `${hash}$${salt}`;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const [hash_, salt] = hashedPassword.split("$");
  const hash2 = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hash_ === hash2;
}

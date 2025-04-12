import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

export const imageSchema = z
  .any()
  .transform((value) => {
    if (value instanceof FileList) {
      return Array.from(value);
    }
    return [value];
  })
  .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
    message: "Максимальный размер файла — 5MB.",
  })
  .refine((files) => files.every((file) => ALLOWED_TYPES.includes(file.type)), {
    message: "Разрешены только JPEG и PNG.",
  });

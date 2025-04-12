import { imageSchema } from "./schema";

export const validateFile = (file: File, schema: typeof imageSchema) => {
  const result = schema.safeParse(file);
  if (!result.success) {
    return false;
  }
  return true;
};

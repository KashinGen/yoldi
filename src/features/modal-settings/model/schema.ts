import { z } from "zod";
  
  export const editProfileSchema = z.object({
      name: z.string().min(1, "Required"),
      slug: z.string().min(1, "Required"),
      description: z.string().min(1, "Required"),
    });
    
  
  export type editProfileValues = z.infer<typeof editProfileSchema>;
  
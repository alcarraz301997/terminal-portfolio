import { z } from "zod";

export const skillJsonSchema = z.object({
  title: z.string(),
  tech: z.array(z.string()),
});

export const skillsJsonSchema = z.array(skillJsonSchema);

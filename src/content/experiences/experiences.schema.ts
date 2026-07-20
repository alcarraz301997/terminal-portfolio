import { z } from "zod";

export const experienceJsonSchema = z.object({
  title: z.string(),
  company: z.string(),
  start_year: z.number(),
  end_year: z.number().nullable().transform((val) => val ?? undefined),
  city: z.string(),
  descriptions: z.array(z.string()),
  tech: z.array(z.string()),
});

export const experiencesJsonSchema = z.array(experienceJsonSchema);

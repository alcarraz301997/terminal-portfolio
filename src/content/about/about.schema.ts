import { z } from "zod";

export const aboutSchema = z.object({
  title: z.string(),
  description: z.string(),
  name: z.string(),
  email: z.string(),
  location: z.string(),
  github: z.string(),
  whoamiCommand: z.string(),
  whoamiText: z.string(),
});

export type About = z.infer<typeof aboutSchema>;

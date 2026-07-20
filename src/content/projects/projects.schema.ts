import { z } from "zod";

export const projectJsonSchema = z.object({
  title: z.string(),
  description: z.string(),
  github: z.string(),
  url: z.string(),
  tech: z.array(z.string()),
});

export const projectsJsonSchema = z.array(projectJsonSchema);

export type Project = z.infer<typeof projectJsonSchema> & { id: number };

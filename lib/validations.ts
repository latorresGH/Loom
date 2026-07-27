import { z } from 'zod';

export const contactSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  tipo: z.string().min(1),
  mensaje: z.string().min(10).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

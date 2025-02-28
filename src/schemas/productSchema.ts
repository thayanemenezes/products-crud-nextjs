import { z } from "zod";

export const productSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(1, "Título é obrigatório")
    .max(30, "Título deve conter no máximo 30 caracteres"),
  price: z.coerce.number().min(1, "Preço é obrigatório"),
  category: z.string().min(1, "Categoria é obrigatória"),
  description: z.string().min(1, "Descrição é obrigatória"),
  image: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;

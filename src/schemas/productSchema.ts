// src/schemas/productSchema.ts
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  oldPrice: z.number(),
  price: z.number(),
  image: z.string(),
  installments: z.string(),
  freeShipping: z.boolean(),
});

export const ProductsListSchema = z.array(ProductSchema);

// Tipo inferido automaticamente pelo Zod para usar nos componentes
export type Product = z.infer<typeof ProductSchema>;
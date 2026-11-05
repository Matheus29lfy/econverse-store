// src/schemas/productSchema.ts
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  oldPrice: z.number(),
  price: z.number(),
  image: z.string(),
  token: z.string().optional(),
  installments: z.string(),
  freeShipping: z.boolean(),
});

export const ProductsListSchema = z.array(ProductSchema);
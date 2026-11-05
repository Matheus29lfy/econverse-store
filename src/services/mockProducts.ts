// src/services/api.ts ou src/data/mockProducts.ts
import { ProductsListSchema } from '../schemas/productSchema';

const rawProductsData = [
  {
    name: 'Iphone 11 Pro Max Branco',
    description: 'Lorem ipsum dolor sit amet',
    oldPrice: 18000,
    price: 15000,
    image: 'iphone.png',
    installments: 'ou 2x de R$ 7.500,00 sem juros',
    freeShipping: true,
  },
  // ... outros produtos
];

// Valida os dados em tempo de execução garantindo robustez de Sênior
export const getProducts = () => {
  const result = ProductsListSchema.safeParse(rawProductsData);
  
  if (!result.success) {
    console.error('Falha na validação do contrato de produtos:', result.error);
    return [];
  }
  
  return result.data;
};
// src/services/api.ts
import type { Product } from '../types/product';

export async function fetchProducts(): Promise<Product[]> {
  try {
    // const response = await fetch('http://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
const products =  [
{
productName: "Iphone 11 PRO MAX BRANCO 1",
descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
price: 15000
},
{
productName: "IPHONE 13 MINI 1",
descriptionShort: "IPHONE 13 MINI 1",
photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
price: 9000
},
{
productName: "Iphone 11 PRO MAX BRANCO 2",
descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
price: 14990
},
{
productName: "IPHONE 13 MINI 2",
descriptionShort: "IPHONE 13 MINI 2",
photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
price: 12000
},
{
productName: "Iphone 11 PRO MAX BRANCO 3",
descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
price: 4550
}
]

return products
    // const data = await response.json();
    // return data.products || data; 
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}
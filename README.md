
```markdown
# Econverse Store - E-commerce Application

Aplicação de e-commerce moderna desenvolvida como projeto de portfólio de alta performance, focada em componentização modular, tipagem estrita com TypeScript, testes unitários robustos e arquitetura limpa.

🔗 **Acesse o site em produção:** [https://econverse-store.vercel.app/](https://econverse-store.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas de mercado:

* **React** + **TypeScript** (Tipagem estrita e componentes reutilizables)
* **Vite** (Build tool de altíssima performance)
* **SCSS / SASS** (Modularização de estilos e arquitetura limpa)
* **Vitest** + **React Testing Library** (Ambiente de testes unitários rápido e moderno)
* **Vercel** (Deploy contínuo e hospedagem em nuvem)

---

## 🛠️ Funcionalidades e Componentes Principais

* **Header & Navegação:** Barra superior completa com barra de pesquisa e menu de departamentos.
* **Banner Principal:** Destaques promocionais com chamadas para ação.
* **Categorias Dinâmicas:** Navegação por ícones interativos com controle de estado ativo.
* **Produtos Relacionados:** Carrossel horizontal suave (`useRef`) com suporte a abas de filtragem por categorias.
* **Modal de Detalhes do Produto (`ProductModal`):** Visualização rápida com seletor de quantidade formatada em dois dígitos (`01`, `02`...) e cálculo em moeda local (`Intl.NumberFormat`).
* **Marcas e Rodapé (`Brands & Footer`):** Seções institucionais completas.

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para clonar e executar a aplicação na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) e o **npm** instalados.

### 2. Clonar o repositório
```bash
git clone [git@github.com:Matheus29lfy/econverse-store.git](git@github.com:Matheus29lfy/econverse-store.git)
cd econverse-store

```

### 3. Instalar as dependências

```bash
npm install

```

### 4. Executar em modo de desenvolvimento

```bash
npm run dev

```

O projeto estará disponível em `http://localhost:5173`.

---

## 🧪 Como Executar os Testes Unitários

A aplicação conta com uma suíte de testes abrangente cobrindo os principais componentes visuais e de interação (`ProductCard`, `ProductModal`, `RelatedProducts`, `Categories`, `Brands`, etc.) utilizando **Vitest** e **React Testing Library**.

Para rodar os testes em modo interativo (Watch Mode):

```bash
npm run test

```

Para rodar a suíte completa de testes uma única vez (Ideal para pipelines de CI/CD):

```bash
npx vitest run

```

---

## 📦 Como Gerar o Build de Produção

Para validar a compilação e gerar os arquivos otimizados para deploy:

```bash
npm run build

```

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio profissional.

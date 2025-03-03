# Products CRUD - Next.js

<img href="https://github.com/thayanemenezes/products-crud-nextjs/blob/main/screenshot.png">
Este é um projeto de CRUD (Create, Read, Update, Delete) de produtos desenvolvido com **Next.js**, **TypeScript**, **Material-UI (MUI)** e **React Hook Form**. O projeto utiliza a **Context API** para gerenciamento de estado global e faz chamadas a uma API fake ([Fake Store API](https://fakestoreapi.com/)) para simular operações de criação, leitura, atualização e exclusão de produtos.

---

## 📋 Tabela de Conteúdos

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Rotas Disponíveis](#-rotas-disponíveis)

---

## 🚀 Funcionalidades

- **Listagem de Produtos**: Exibe todos os produtos em uma tabela.
- **Criação de Produtos**: Permite adicionar novos produtos.
- **Atualização de Produtos**: Permite editar produtos existentes.
- **Exclusão de Produtos**: Permite remover produtos.
- **Validação de Formulários**: Utiliza **Zod** para validação de dados.
- **Gerenciamento de Estado**: Utiliza a **Context API** para gerenciar o estado global dos produtos.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos.
- **[TypeScript](https://www.typescriptlang.org/)**: Adiciona tipagem estática ao JavaScript.
- **[Material-UI (MUI)](https://mui.com/)**: Biblioteca de componentes UI para React.
- **[React Hook Form](https://react-hook-form.com/)**: Biblioteca para gerenciamento de formulários.
- **[Zod](https://zod.dev/)**: Biblioteca para validação de esquemas.
- **[Fake Store API](https://fakestoreapi.com/)**: API fake para simular operações de CRUD.
- **[React Hot Toast](https://react-hot-toast.com/)**: Biblioteca para exibir notificações (toasts).

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente.

---

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

---

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/products-crud-nextjs.git
   cd products-crud-nextjs


2. **Instale as dependências:**

    npm install
    ## ou
    yarn install 

3. **Inicie o servidor de desenvolvimento:**    

    npm run dev
    ## ou
    yarn dev

3. **Acesse o projeto:**   

Abra o navegador e acesse:
    http://localhost:3000
    
---    

### Rotas Disponíveis

- /: Página inicial com a listagem de produtos.

- /product/create: Página para criar um novo produto.

- /product/update/[id]: Página para editar um produto existente.

- /product/view/[id]: Página para visualizar os detalhes de um produto.    


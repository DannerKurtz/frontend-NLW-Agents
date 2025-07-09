# NW Agents - Frontend

Este é o repositório do frontend para o projeto **NW Agents**, desenvolvido durante a Next Level Week (NLW) AI, um evento online promovido pela [Rocketseat](https://www.rocketseat.com.br/).

## 🚀 Tecnologias Utilizadas

O projeto foi construído com um conjunto de tecnologias modernas para o desenvolvimento frontend:

- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática para um código mais robusto.
- **Vite:** Ferramenta de build para um desenvolvimento frontend mais rápido e otimizado.
- **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável.
- **shadcn/ui:** Coleção de componentes de UI reutilizáveis e acessíveis, construídos sobre o Radix UI e Tailwind CSS.
- **Lucide React:** Biblioteca de ícones leve e consistente.
- **Biome:** Ferramenta integrada para formatação e linting do código, garantindo consistência e qualidade.

## 🏛️ Padrões e Estrutura

O projeto segue uma estrutura organizada, utilizando **path aliases** (apelidos de caminho) para simplificar as importações e evitar caminhos relativos complexos (`../../`). Os principais aliases configurados no `components.json` são:

- `@/components`: Para componentes da UI.
- `@/lib` e `@/utils`: Para funções utilitárias.
- `@/hooks`: Para React Hooks customizados.

## ⚙️ Setup e Configuração

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

1.  **Clonar o repositório**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd frontend
    ```

2.  **Instalar as dependências**
    O projeto utiliza `npm` como gerenciador de pacotes. Execute o comando abaixo na raiz da pasta `frontend`.

    ```bash
    npm install
    ```

3.  **Executar o projeto**
    Após a instalação, inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

O servidor Vite será iniciado, e você poderá acessar a aplicação no endereço fornecido pelo terminal (geralmente `http://localhost:5173`).

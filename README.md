## 📝 Descrição do Projeto

Este projeto foi desenvolvido como parte do desafio para a posição de Desenvolvedor Fullstack na Ammo Varejo.

A aplicação está implantada na [Vercel](https://vercel.com/) e pode ser acessada através deste [link](https://).

## 🚀 Tecnologias Utilizadas

- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [React Query](https://tanstack.com/query/latest/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🛠️ Instalação

### Configuração das Variáveis de Ambiente

1. Faça uma cópia do arquivo `.env.example` e renomeie-o para `.env.local`.

### Instalando as Dependências

2. Execute o seguinte comando para instalar as dependências necessárias:

```bash
yarn install
```

### Executando a Aplicação

3. Inicie a aplicação com o seguinte comando:

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto em ação.

### Testes Automatizados

4. Para executar os testes, utilize o seguinte comando:

```bash
yarn test
```

## 🧱 Estrutura do Projeto

O projeto foi organizado visando escalabilidade, seguindo esta estrutura:

### **App** (`./app`)

Esta pasta é responsável por definir as rotas da aplicação. Leia mais em [App Router - NextJs](https://nextjs.org/docs/app)

### **Config** (`./config`)

Contém configurações importantes, como temas, validação de variáveis de ambientes e integrações com bibliotecas de terceiros.

### **Features** (`./features`)

Contém as regras de negócios da aplicação, divididas por contexto/funcionalidade. Cada funcionalidade inclui seus próprios componentes e hooks.

### **Hooks** (`./hooks`)

Nesta pasta, você encontrará alguns [hooks](https://react.dev/reference/react) utilizados em toda a aplicação.

### **Models** (`./models`)

Aqui você encontrará todos os modelos/entidades usados pela aplicação.

### **Services** (`./services`)

Esta pasta contém todos os serviços responsáveis por chamar a API backend.

### **Test** (`./test`)

Esta pasta inclui utilitários comuns a serem usados durante os testes.

### **Utils** (`./utils`)

Esta pasta inclui funções comuns usadas em toda a aplicação, como validações, formatações e mais.

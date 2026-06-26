# API REST — Fundamentos do Express

Projeto de estudos com uma API REST construída em **Node.js + TypeScript**, focada nos
fundamentos do framework **Express** e na validação de dados com **Zod**.

> ⚠️ Projeto educacional. Não há banco de dados nem persistência — o objetivo é
> praticar os conceitos de rotas, controllers, middlewares, tratamento de erros e
> validação.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/) — framework HTTP
- [Zod](https://zod.dev/) — validação e tipagem de schemas
- [tsx](https://github.com/privatenumber/tsx) — execução do TypeScript em modo watch

## 📂 Estrutura do projeto

```
src/
├── controllers/
│   └── products-controller.ts   # Lógica das rotas de produtos (index, create)
├── middlewares/
│   └── my-middleware.ts         # Exemplo de middleware (injeta user_id na request)
├── routes/
│   ├── index.ts                 # Agrupa todas as rotas
│   └── products-routes.ts       # Rotas de /products
├── types/
│   └── request.d.ts             # Extensão da tipagem global da Request do Express
├── utils/
│   └── app-error.ts             # Classe de erro customizada
└── server.ts                    # Ponto de entrada e tratamento global de erros
```

## ✅ Conceitos abordados

- **Roteamento** com `express.Router()` e agrupamento de rotas.
- **Controllers** organizados em classe, seguindo o padrão de nomes:
  - `index` → GET para listar vários registros
  - `show` → GET para exibir um registro específico
  - `create` → POST para criar um registro
  - `update` → PUT para atualizar um registro
  - `remove` → DELETE para deletar um registro
- **Middlewares** — interceptando e modificando a requisição.
- **Validação com Zod** — schemas com mensagens de erro customizadas, regras
  (`min`, `positive`, `trim`) e `required_error`.
- **Tratamento global de erros** — middleware de erro que diferencia `AppError`,
  `ZodError` e erros genéricos (500).
- **Tipagem customizada da Request** — sobrescrevendo a interface global do Express
  para adicionar a propriedade `user_id`.

## 🔧 Pré-requisitos

- Node.js 18+ instalado

## ⚙️ Instalação

```bash
# Clonar o repositório
git clone https://github.com/kayobitencourt/api-rest.git
cd api-rest

# Instalar as dependências
npm install
```

## ▶️ Como executar

```bash
npm run dev
```

O servidor sobe em modo watch (reinicia a cada alteração) em:

```
http://localhost:3333
```

## 📡 Endpoints

### `GET /products`

Lista produtos. Aceita os query params `page` e `limit`.

```bash
curl "http://localhost:3333/products?page=1&limit=10"
```

### `POST /products`

Cria um produto. Passa pelo `myMiddleware` (que injeta o `user_id`) e valida o body com Zod.

**Body esperado:**

```json
{
  "name": "Nome do produto",
  "price": 100
}
```

**Regras de validação:**

| Campo   | Regras                                              |
| ------- | --------------------------------------------------- |
| `name`  | string obrigatória, com no mínimo 6 caracteres      |
| `price` | número obrigatório e positivo                       |

**Resposta (201):**

```json
{
  "name": "Nome do produto",
  "price": 100,
  "user_id": "123456"
}
```

**Resposta em caso de erro de validação (400):**

```json
{
  "message": "Validation Error",
  "issues": { "...": "detalhes do Zod" }
}
```

## 📝 Licença

ISC — Kayo Bitencourt

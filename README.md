# 🚀 Tarefas API (Node.js + TypeScript)

API RESTful simples desenvolvida para consolidar os conceitos fundamentais de backend, roteamento, middlewares e arquitetura MVC em Node.js.

---

## 🛠️ Tecnologias

- **Node.js** & **TypeScript**
- **Express** (Framework Web)
- **Insomnia** (Testes de endpoints)

---

## 🏗️ Arquitetura do Projeto

O projeto utiliza o padrão **MVC (Model-View-Controller)** para separação de responsabilidades:
- `src/routes.ts`: Mapeamento das URLs e direcionamento de tráfego.
- `src/controllers/TarefaController.ts`: Regras de negócio, validações e manipulação do array em memória.

---

## 📌 Endpoints da API

### Rotas de Estudo (Demonstrativas)
- `GET /inicio-demo` — Retorno estático de boas-vindas.
- `GET /busca?termo=node` — Exemplo de leitura de **Query Params**.
- `GET /tarefas-demo/:id` — Exemplo de leitura de **Route Params**.
- `POST /tarefas-demo` — Exemplo de leitura de **Request Body**.

### Rotas Funcionais (CRUD de Tarefas)

| Método | Rota | Descrição | Status de Resposta |
| :--- | :--- | :--- | :--- |
| `GET` | `/tarefas` | Lista todas as tarefas | `200 OK` |
| `GET` | `/tarefa/:index` | Busca uma tarefa pelo índice | `200 OK` ou `404 Not Found` |
| `POST` | `/tarefa` | Cadastra uma nova tarefa | `201 Created` ou `400 Bad Request` |
| `PUT` | `/tarefa/:index` | Atualiza uma tarefa existente | `200 OK` ou `400/404` |
| `DELETE` | `/tarefa/:index` | Remove uma tarefa da memória | `200 OK` ou `404 Not Found` |

---

## 🚀 Como Executar

```bash
# 1. Clonar o repositório e entrar na pasta
cd primeira-api

# 2. Instalar as dependências
yarn

# 3. Iniciar o servidor de desenvolvimento
yarn dev
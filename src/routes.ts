import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/tarefas", (req: Request, res: Response) => {
  res.json({ message: "Minha primeira api", Aluno: "Vitor Costadela" });
});

// QUERY PARAMS: Filtros e busca via URL (Ex: /busca?termo=node)
routes.get("/busca", (req: Request, res: Response) => {
  const { termo } = req.query;

  res.json({
    tipo: "Query Params",
    termoBuscado: termo || "Nenhum filtro enviado",
  });
});

// ROUTE PARAMS: Buscar algo específico por ID na URL (Ex: /tarefas/15)
routes.get("/tarefas/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    tipo: "Route Params",
    mensagem: `Buscando os detalhes da tarefa com ID: ${id}`,
  });
});

// REQUEST BODY: Envio de dados via corpo da requisição (POST)
routes.post("/tarefas", (req: Request, res: Response) => {
  const { titulo, responsavel } = req.body;

  res.json({
    tipo: "Request Body",
    mensagem: "Nova tarefa criada com sucesso!",
    dadosRecebidos: {
      titulo,
      responsavel,
    },
  });
});

export { routes };
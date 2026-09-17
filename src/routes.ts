import { Router, Request, Response } from "express";

const routes = Router();

const tarefas: string[] = ["Estudar Node JS", "Estudar JavaScript"];

routes.get("/inicio-demo", (req: Request, res: Response) => {
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
routes.get("/tarefas-demo/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    tipo: "Route Params",
    mensagem: `Buscando os detalhes da tarefa com ID: ${id}`,
  });
});

// REQUEST BODY: Envio de dados via corpo da requisição (POST)
routes.post("/tarefas-demo", (req: Request, res: Response) => {
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

// ==========================================
// ROTAS FUNCIONAIS (Manipulando o Array)
// ==========================================

// Listar todas as tarefas do array
routes.get("/tarefas", (req: Request, res: Response) => {
  return res.json(tarefas);
});

// Buscar tarefa específica pelo índice (/tarefa/0)
routes.get("/tarefa/:index", (req: Request, res: Response) => {
  const { index } = req.params;
  const tarefaEncontrada = tarefas[Number(index)];

  if (!tarefaEncontrada) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  return res.json({ tarefa: tarefaEncontrada });
});

// Cadastrar nova tarefa no array (POST /tarefa)
routes.post("/tarefa", (req: Request, res: Response) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "Erro ao cadastrar. Nome obrigatório." });
  }

  tarefas.push(nome);

  return res.status(201).json(tarefas);
});

export { routes };
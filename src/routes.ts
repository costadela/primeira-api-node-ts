import { Router, Request, Response } from "express";
import { TarefaController } from "./controllers/TarefaController";

const routes = Router();
const tarefaController = new TarefaController();

// Middleware global de log
routes.use((req: Request, res: Response, next) => {
  console.log("Requisição recebida em:", new Date().toLocaleString());
  next();
});

// Rotas demonstrativas
routes.get("/inicio-demo", (req: Request, res: Response) => {
  res.json({ message: "Minha primeira api", Aluno: "Vitor Costadela" });
});

routes.get("/busca", (req: Request, res: Response) => {
  const { termo } = req.query;
  res.json({ tipo: "Query Params", termoBuscado: termo || "Nenhum filtro enviado" });
});

routes.get("/tarefas-demo/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ tipo: "Route Params", mensagem: `Buscando os detalhes da tarefa com ID: ${id}` });
});

routes.post("/tarefas-demo", (req: Request, res: Response) => {
  const { titulo, responsavel } = req.body;
  res.json({ tipo: "Request Body", mensagem: "Nova tarefa criada com sucesso!", dadosRecebidos: { titulo, responsavel } });
});

// ROTAS FUNCIONAIS (Apenas apontando para o Controller)
routes.get("/tarefas", tarefaController.index);
routes.get("/tarefa/:index", tarefaController.show);
routes.post("/tarefa", tarefaController.create);
routes.put("/tarefa/:index", tarefaController.update);
routes.delete("/tarefa/:index", tarefaController.delete);

export { routes };
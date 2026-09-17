import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/tarefas", (req: Request, res: Response) => {
  res.json({ message: "Minha primeira api", Aluno: "Vitor Costadela" });
});

export { routes };
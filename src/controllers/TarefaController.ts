import { Request, Response } from "express";

// Estado em memória
const tarefas: string[] = ["Estudar Node JS", "Estudar JavaScript"];

export class TarefaController {
  // 1. Listar todas as tarefas (GET /tarefas)
  index(req: Request, res: Response) {
    return res.json(tarefas);
  }

  // 2. Buscar tarefa por índice (GET /tarefa/:index)
  show(req: Request, res: Response) {
    const { index } = req.params;
    const tarefaEncontrada = tarefas[Number(index)];

    if (!tarefaEncontrada) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    return res.json({ tarefa: tarefaEncontrada });
  }

  // 3. Cadastrar nova tarefa (POST /tarefa)
  create(req: Request, res: Response) {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ message: "Erro ao cadastrar. Nome obrigatório." });
    }

    tarefas.push(nome);

    return res.status(201).json(tarefas);
  }

  // 4. Atualizar tarefa (PUT /tarefa/:index)
  update(req: Request, res: Response) {
    const { index } = req.params;
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ message: "Erro ao atualizar. Nome obrigatório." });
    }

    if (!tarefas[Number(index)]) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    tarefas[Number(index)] = nome;

    return res.json(tarefas);
  }

  // 5. Deletar tarefa (DELETE /tarefa/:index)
  delete(req: Request, res: Response) {
    const { index } = req.params;

    if (!tarefas[Number(index)]) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    tarefas.splice(Number(index), 1);

    return res.json({ message: "Tarefa deletada com sucesso", tarefas });
  }
}
import express from "express";
import avaliationModel from "../models/avaliationModel.js";

class AvaliationController {
  getAll = async (req, res) => {
    try {
      const avaliacoes = await avaliationModel.getAll();
      res.json(avaliacoes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar avaliação" });
    }
  };

  create = async (req, res) => {
    const { usuario, avaliacao } = req.body;
    try {
      if (!usuario || !avaliacao) {
        return res.status(400).json({ erro: "Usuário e avaliação são obrigatórios" });
      }

      const novaAvaliation = await avaliationModel.create(usuario, avaliacao);
      res.status(201).json(novaAvaliation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao avaliar" });
    }
  };
}

const avaliationController = new AvaliationController();
const router = express.Router();

// Definindo as rotas e associando os métodos
router.get("/", avaliationController.getAll);
router.post("/", avaliationController.create);

export default router;
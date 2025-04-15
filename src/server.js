import express from "express";
import avaliationController from "./controllers/avaliationController.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use("/avaliacoes", avaliationController);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

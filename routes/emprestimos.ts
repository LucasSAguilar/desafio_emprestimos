import { Express } from "express";
import solicitacao from "../interfaces/solicitacaoInterface.js";
import {
  retornaEmprestimosPermitidos,
  solicitacaoValida,
} from "../utils/emprestimos.js";

const rotasEmprestimos = (app: Express) => {
  app.post("/customer-loans", (req, res) => {
    try {
      const supostoSolicitante: solicitacao = req.body;
      if (!solicitacaoValida(supostoSolicitante)) {
        res
          .status(500)
          .send(`Os dados enviados estão incorretos ou não foram enviados`);
        return;
      }
      const emprestimosPermitidos =
        retornaEmprestimosPermitidos(supostoSolicitante);
      res.status(200).json(emprestimosPermitidos);
    } catch (error) {
      res.status(500).send("Ocorreu um erro: " + error);
    }
  });
};
export default rotasEmprestimos;

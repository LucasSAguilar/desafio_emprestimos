import { Express } from "express";

const rotasEmprestimos = (app: Express) => {
  app.get("/", (req, res) => {
    res.send("Olá");
  });
};

export default rotasEmprestimos;

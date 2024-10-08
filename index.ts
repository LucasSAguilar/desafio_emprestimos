import express, { json } from "express";
import rotasEmprestimos from "./routes/emprestimos.js";
const app = express();
const PORT: number = 3000;

app.use(json())

rotasEmprestimos(app)

app.listen(PORT, () => {
  console.log(`Servidor funcionando em: http://localhost:${PORT}/`);
});

export default app;

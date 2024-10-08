import emprestimos from "../interfaces/emprestimosInterface";

const taxasEmprestimos: Array<emprestimos> = [
  {
    tipo: "Empréstimo pessoal",
    taxa_juros: 4,
  },
  {
    tipo: "Empréstimo consignado",
    taxa_juros: 2,
  },
  {
    tipo: "Empréstimo garantia",
    taxa_juros: 3,
  },
];

export default taxasEmprestimos;

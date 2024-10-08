import emprestimosConcedidos from "../interfaces/emprestimosConcedidosInterface.js";
import solicitacao from "../interfaces/solicitacaoInterface.js";
import taxasEmprestimos from "../mocks/taxas.js";

const solicitacaoValida = (dados: any): solicitacao | boolean => {
  if (
    typeof dados.idade !== "number" ||
    typeof dados.cpf !== "string" ||
    typeof dados.nome !== "string" ||
    typeof dados.renda !== "number" ||
    typeof dados.localizacao !== "string"
  ) {
    return false;
  }
  dados.cpf = formatarCPF(dados.cpf);
  return dados;
};

const formatarCPF = (cpf: string): string => {
  const cpfLimpo = cpf.replace(/[^\d]/g, "");

  if (cpfLimpo.length === 11) {
    return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return cpf;
};

const retornaEmprestimosPermitidos = (
  solicitante: solicitacao
): emprestimosConcedidos => {
  const emprestimosPermitidos: emprestimosConcedidos = {
    nome: solicitante.nome,
    emprestimos: [],
  };
  if (solicitante.renda < 3000) {
    emprestimosPermitidos.emprestimos.push(taxasEmprestimos[0]);
  }
  if (
    solicitante.renda >= 3000 &&
    solicitante.renda <= 5000 &&
    solicitante.localizacao == "SP" &&
    solicitante.idade < 30
  ) {
    emprestimosPermitidos.emprestimos.push(taxasEmprestimos[0]);
  }
  if (solicitante.renda >= 5000) {
    emprestimosPermitidos.emprestimos.push(taxasEmprestimos[1]);
  }
  if (solicitante.renda <= 3000) {
    emprestimosPermitidos.emprestimos.push(taxasEmprestimos[2]);
  }
  if (
    solicitante.renda > 3000 &&
    solicitante.renda < 5000 &&
    solicitante.localizacao == "SP" &&
    solicitante.idade < 30
  ) {
    emprestimosPermitidos.emprestimos.push(taxasEmprestimos[2]);
  }

  return emprestimosPermitidos;
};

export { solicitacaoValida, formatarCPF,  retornaEmprestimosPermitidos};

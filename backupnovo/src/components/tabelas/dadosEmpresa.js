const dadosEmpresa = {
  logotipo: "https://via.placeholder.com/80",
  nome: "Empresa de Energia",
  contato: "(00) 99999-0000",
  email: "contato@empresa.com",
  identificacaoQuadro: "Quadro Principal",
  localizacaoQuadro: "1º Andar",
  voltagem: "220V",
  dataInstalacao: "15/12/2024",
  suporteTelefone: "(00) 12345-6789",
  suporteEmail: "suporte@empresa.com",
  qrCodeLink: "https://empresa.com/documentacao",
};

const circuitos = [
  { nome: "Circuito 1", tensao: "127V", corrente: "10A", descricao: "Luzes da Sala" },
  { nome: "Circuito 2", tensao: "220V", corrente: "15A", descricao: "Ar Condicionado" },
];

<ModelosTabela dadosEmpresa={dadosEmpresa} circuitos={circuitos} />;

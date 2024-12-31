import React from "react";

const CompartilharPlanilha = ({ dadosEmpresa, circuitos }) => {
  const handleShare = () => {
    const mensagem = `
      Dados da Empresa:
      - Nome: ${dadosEmpresa.nome}
      - Contato: ${dadosEmpresa.contato}
      - Email: ${dadosEmpresa.email}
      - Voltagem: ${dadosEmpresa.voltagem}

      Circuitos:
      ${circuitos
        .map(
          (circuito) =>
            `- ${circuito.nome}: Tensão ${circuito.tensao}, Corrente ${circuito.corrente}, Descrição: ${circuito.descricao}`
        )
        .join("\n")}

      Confira mais detalhes no link: ${dadosEmpresa.qrCodeLink}
    `;

    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    const emailURL = `mailto:?subject=Planilha de Circuitos&body=${encodeURIComponent(
      mensagem
    )}`;

    return { whatsappURL, emailURL };
  };

  const { whatsappURL, emailURL } = handleShare();

  return (
    <div style={{ marginTop: "20px" }}>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Compartilhar no WhatsApp
      </a>
      <a
        href={emailURL}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0072C6",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Compartilhar por E-mail
      </a>
    </div>
  );
};

export default CompartilharPlanilha;

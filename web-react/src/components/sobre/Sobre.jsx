import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/logo.svg";

const Sobre = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 8, textAlign: "center" }}>
      {/* Logotipo */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <img
          src={logo}
          alt="Logo da Empresa"
          style={{
            width: "120px",
            height: "auto",
          }}
        />
      </Box>

      {/* Informações da Aplicação */}
      <Typography variant="h5" gutterBottom>
        Bem-vindo ao Sistema de Gerenciamento de Etiquetas
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Nosso software foi desenvolvido para simplificar o trabalho de
        eletricistas e profissionais da área elétrica, permitindo a criação e
        gerenciamento de etiquetas personalizadas para quadros de distribuição,
        sistemas de ar condicionado, e muito mais.
      </Typography>

      {/* Sobre a Empresa */}
      <Typography variant="h6" gutterBottom>
        Sobre a Empresa Desenvolvedora
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Desenvolvido pela <strong>Tech Solutions</strong>, uma empresa focada em
        criar soluções inovadoras para o setor da construção civil. Estamos
        comprometidos em oferecer ferramentas que aumentam a eficiência e a
        qualidade dos serviços.
      </Typography>

      {/* Contatos */}
      <Typography variant="h6" gutterBottom>
        Entre em Contato Conosco
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <IconButton color="primary" aria-label="email">
          <EmailIcon />
        </IconButton>
        <Typography variant="body1" component="span">
          <Link href="mailto:support@techsolutions.com" color="inherit">
            support@techsolutions.com
          </Link>
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <IconButton color="primary" aria-label="phone">
          <PhoneIcon />
        </IconButton>
        <Typography variant="body1" component="span">
          <Link href="tel:+5511999999999" color="inherit">
            +55 (11) 99999-9999
          </Link>
        </Typography>
      </Box>

      {/* Redes Sociais */}
      <Typography variant="h6" gutterBottom>
        Siga-nos nas Redes Sociais
      </Typography>
      <Box>
        <IconButton
          color="primary"
          component={Link}
          href="https://www.facebook.com/techsolutions"
          aria-label="facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="primary"
          component={Link}
          href="https://www.twitter.com/techsolutions"
          aria-label="twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="primary"
          component={Link}
          href="https://www.instagram.com/techsolutions"
          aria-label="instagram"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Sobre;

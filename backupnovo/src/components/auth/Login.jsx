import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import userService from "../../services/userService";
import logo from "../../assets/logo.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  // useEffect para verificar o token ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Redireciona ao painel de controle se o token for válido
      navigate("/admin");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const { token } = await userService.login(data.email, data.password);
      localStorage.setItem("token", token); // Armazena o token no localStorage
      navigate("/admin"); // Redireciona para o painel após login bem-sucedido
    } catch (error) {
      setSnackbarMessage(error.response?.data?.message || "Erro ao fazer login.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 8 }}>
      <img
        src={logo}
        alt="Logo"
        style={{
          display: "block",
          margin: "0 auto",
          width: "100px",
          height: "auto",
        }}
      />
      <Typography component="h1" variant="h5" align="center" sx={{ mt: 2 }}>
        Sistema de Gestão - Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          autoComplete="email"
          autoFocus
          {...register("email", { required: "Email é obrigatório" })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          {...register("password", { required: "Senha é obrigatória" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Não tem uma conta?{" "}
        <Link href="/registro" variant="body2">
          Cadastre-se aqui
        </Link>
      </Typography>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;

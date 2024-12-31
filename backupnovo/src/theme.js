import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul para botões e destaques
    },
    secondary: {
      main: '#ff5722', // Laranja para alertas e interações
    },
    background: {
      default: '#f4f4f4', // Cinza claro para o fundo da aplicação
    },
    text: {
      primary: '#333', // Cor do texto principal
      secondary: '#777', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default theme;

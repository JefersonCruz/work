import React, { useState } from "react";
import Draggable from "react-draggable";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
} from "@mui/material";

const initialLabels = [
  { id: 1, text: "Disjuntor 1: Iluminação Sala", x: 0, y: 0 },
  { id: 2, text: "Disjuntor 2: Tomadas Cozinha", x: 100, y: 50 },
  { id: 3, text: "Disjuntor 3: Ar Condicionado", x: 200, y: 100 },
  { id: 4, text: "Disjuntor 4: Chuveiro", x: 300, y: 150 },
];

const QuadroDistribuicao = () => {
  const [labels, setLabels] = useState(initialLabels);

  const handleStop = (e, data, id) => {
    setLabels((prevLabels) =>
      prevLabels.map((label) =>
        label.id === id ? { ...label, x: data.x, y: data.y } : label
      )
    );
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Quadro de Distribuição de Energia
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Arraste as etiquetas para posicioná-las sobre os disjuntores.
      </Typography>

      <Paper
        elevation={3}
        sx={{
          margin: "auto",
          width: "600px",
          height: "400px",
          position: "relative",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", padding: 2, backgroundColor: "#0288d1", color: "white" }}
        >
          Frente do Quadro de Distribuição
        </Typography>
        {labels.map((label) => (
          <Draggable
            key={label.id}
            position={{ x: label.x, y: label.y }}
            onStop={(e, data) => handleStop(e, data, label.id)}
          >
            <Paper
              elevation={4}
              sx={{
                padding: 1,
                width: "200px",
                cursor: "move",
                position: "absolute",
                textAlign: "center",
                border: "1px solid #0288d1",
                backgroundColor: "#ffffff",
              }}
            >
              {label.text}
            </Paper>
          </Draggable>
        ))}
      </Paper>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Circuitos:</Typography>
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          {labels.map((label) => (
            <Grid item xs={12} sm={6} md={4} key={label.id}>
              <Paper elevation={2} sx={{ padding: 2 }}>
                <Typography variant="body1">{label.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={() => setLabels(initialLabels)}
      >
        Resetar Posições
      </Button>
    </Box>
  );
};

export default QuadroDistribuicao;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Delete,
  Preview,
  Print,
} from "@mui/icons-material";
import { circuitsLibrary } from "../../utils/iconLibrary";

const sizeMapping = {
  unipolar: { width: "120px", height: "60px" },
  bipolar: { width: "240px", height: "60px" },
  tripolar: { width: "360px", height: "60px" },
};

const CardConfigurator = () => {
  const [cards, setCards] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedCards = Array.from(cards);
    const [movedCard] = reorderedCards.splice(result.source.index, 1);
    reorderedCards.splice(result.destination.index, 0, movedCard);
    setCards(reorderedCards);
  };

  const handleChangeName = (id, name) => {
    const icon =
      circuitsLibrary.find(
        (circuit) => circuit.name.toLowerCase() === name.toLowerCase()
      )?.icon || null;
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, name, icon } : card))
    );
  };

  const handleAddCard = () => {
    const newCard = {
      id: Date.now().toString(),
      name: "Novo Circuito",
      size: "unipolar",
      color: "#2196F3",
      icon: null,
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handlePreviewToggle = () => {
    setPreviewMode(!previewMode);
  };

  const handleChangeColor = (id, color) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, color } : card))
    );
  };

  const handlePrint = () => {
    const printableArea = document.getElementById("print-area");
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(
      `<html><head><title>Impressão</title></head><body style='margin: 0; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;'>` +
        printableArea.innerHTML +
        "</body></html>"
    );
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Configurador de Etiquetas
      </Typography>

      {/* Ferramentas Globais */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginBottom: 3,
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: "8px",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleAddCard}>
          Adicionar Etiqueta
        </Button>
        <Button
          variant="contained"
          color={previewMode ? "secondary" : "primary"}
          onClick={handlePreviewToggle}
        >
          {previewMode ? "Voltar" : "Pré-visualizar"}
        </Button>
        {previewMode && (
          <Button variant="contained" color="success" onClick={handlePrint}>
            Imprimir
          </Button>
        )}
      </Box>

      {/* Modo de Edição */}
      {!previewMode && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="cards">
            {(provided) => (
              <Grid
                container
                spacing={2}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <Grid
                        item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          width: sizeMapping[card.size].width,
                          height: sizeMapping[card.size].height,
                        }}
                      >
                        <Paper
                          elevation={3}
                          sx={{
                            padding: 2,
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            border: `3px solid ${card.color}`,
                            boxShadow: `0px 4px 8px ${card.color}`,
                          }}
                        >
                          <Box sx={{ fontSize: "32px", marginBottom: 1 }}>
                            {card.icon}
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {card.name}
                          </Typography>
                          <TextField
                            variant="outlined"
                            label="Descrição"
                            value={card.name}
                            onChange={(e) =>
                              handleChangeName(card.id, e.target.value)
                            }
                            fullWidth
                            sx={{ marginTop: 1 }}
                          />
                          <FormControl fullWidth sx={{ marginTop: 1 }}>
                            <InputLabel>Cor</InputLabel>
                            <Select
                              value={card.color}
                              onChange={(e) =>
                                handleChangeColor(card.id, e.target.value)
                              }
                            >
                              <MenuItem value="#2196F3">Azul</MenuItem>
                              <MenuItem value="#4CAF50">Verde</MenuItem>
                              <MenuItem value="#FF5722">Laranja</MenuItem>
                              <MenuItem value="#9C27B0">Roxo</MenuItem>
                            </Select>
                          </FormControl>
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteCard(card.id)}
                            sx={{ marginTop: 1 }}
                          >
                            <Delete />
                          </IconButton>
                        </Paper>
                      </Grid>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {/* Modo de Pré-visualização */}
      {previewMode && (
        <Box
          id="print-area"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            padding: 2,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.id}
              sx={{
                width: sizeMapping[card.size].width,
                height: sizeMapping[card.size].height,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                padding: "10px",
                border: `3px solid ${card.color}`,
                boxShadow: `0px 4px 8px ${card.color}`,
              }}
            >
              <Box sx={{ fontSize: "32px", marginBottom: 1 }}>{card.icon}</Box>
              <Typography>{card.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CardConfigurator;

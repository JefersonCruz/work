import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  IconButton,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaHome, FaLightbulb, FaPlug, FaShower } from "react-icons/fa";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const iconMapper = {
  casa: <FaHome />,
  iluminação: <FaLightbulb />,
  tomada: <FaPlug />,
  chuveiro: <FaShower />,
};

const CardConfigurator = () => {
  const [cards, setCards] = useState([
    { id: "1", label: "Casa", type: "unipolar", color: "#fff", iconColor: "#000" },
    { id: "2", label: "Iluminação", type: "bipolar", color: "#fff", iconColor: "#000" },
    { id: "3", label: "Tomada", type: "unipolar", color: "#fff", iconColor: "#000" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(cards);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setCards(reordered);
  };

  const handleAddCard = () => {
    const newId = (cards.length + 1).toString();
    setCards([
      ...cards,
      { id: newId, label: "Novo", type: "unipolar", color: "#fff", iconColor: "#000" },
    ]);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleLabelChange = (id, label) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        label: card.id === id ? label : card.label,
        icon: card.id === id ? iconMapper[label.toLowerCase()] || <FaPlug /> : card.icon,
      }))
    );
  };

  const handleTypeChange = (id, type) => {
    setCards((prev) => prev.map((card) => (card.id === id ? { ...card, type } : card)));
  };

  const handleColorChange = (id, color) => {
    setCards((prev) => prev.map((card) => (card.id === id ? { ...card, color } : card)));
  };

  const handleIconColorChange = (id, color) => {
    setCards((prev) => prev.map((card) => (card.id === id ? { ...card, iconColor: color } : card)));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Configurador de Etiquetas
      </Typography>

      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleAddCard}
        sx={{ mb: 3 }}
      >
        Adicionar Card
      </Button>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards" direction="horizontal">
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
                      xs={card.type === "unipolar" ? 1 : card.type === "bipolar" ? 2 : 3}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          padding: 2,
                          backgroundColor: card.color,
                          borderRadius: "8px",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "24px",
                            color: card.iconColor,
                            textAlign: "center",
                            mb: 1,
                          }}
                        >
                          {iconMapper[card.label.toLowerCase()] || <FaPlug />}
                        </Box>
                        <TextField
                          variant="outlined"
                          size="small"
                          label="Descrição"
                          value={card.label}
                          onChange={(e) => handleLabelChange(card.id, e.target.value)}
                          fullWidth
                          sx={{ mb: 1 }}
                        />
                        <Select
                          value={card.type}
                          onChange={(e) => handleTypeChange(card.id, e.target.value)}
                          fullWidth
                          size="small"
                          sx={{ mb: 1 }}
                        >
                          <MenuItem value="unipolar">Unipolar</MenuItem>
                          <MenuItem value="bipolar">Bipolar</MenuItem>
                          <MenuItem value="tripolar">Tripolar</MenuItem>
                        </Select>
                        <TextField
                          type="color"
                          label="Cor do Card"
                          value={card.color}
                          onChange={(e) => handleColorChange(card.id, e.target.value)}
                          fullWidth
                          size="small"
                          sx={{ mb: 1 }}
                        />
                        <TextField
                          type="color"
                          label="Cor do Ícone"
                          value={card.iconColor}
                          onChange={(e) => handleIconColorChange(card.id, e.target.value)}
                          fullWidth
                          size="small"
                          sx={{ mb: 1 }}
                        />
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteCard(card.id)}
                          sx={{ mt: 1 }}
                        >
                          <DeleteIcon />
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
    </Box>
  );
};

export default CardConfigurator;

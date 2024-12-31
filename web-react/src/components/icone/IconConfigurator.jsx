import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  Paper,
  IconButton,
  Slider,
  Divider,
} from "@mui/material";
import { FaShower, FaLightbulb, FaPlug } from "react-icons/fa"; // Exemplos de ícones
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const IconConfigurator = () => {
  const [iconData, setIconData] = useState([
    { id: "1", label: "Chuveiro", icon: <FaShower />, size: 1, color: "#000" },
    { id: "2", label: "Iluminação", icon: <FaLightbulb />, size: 1, color: "#000" },
    { id: "3", label: "Tomada", icon: <FaPlug />, size: 1, color: "#000" },
  ]);
  const [preview, setPreview] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(iconData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setIconData(items);
  };

  const handleAddIcon = () => {
    const newId = (iconData.length + 1).toString();
    setIconData([
      ...iconData,
      { id: newId, label: "Novo", icon: <FaPlug />, size: 1, color: "#000" },
    ]);
  };

  const handleDeleteIcon = (id) => {
    setIconData((prev) => prev.filter((icon) => icon.id !== id));
  };

  const handleLabelChange = (id, label) => {
    setIconData((prev) =>
      prev.map((icon) => (icon.id === id ? { ...icon, label } : icon))
    );
  };

  const handleSizeChange = (id, size) => {
    setIconData((prev) =>
      prev.map((icon) => (icon.id === id ? { ...icon, size } : icon))
    );
  };

  const handleColorChange = (id, color) => {
    setIconData((prev) =>
      prev.map((icon) => (icon.id === id ? { ...icon, color } : icon))
    );
  };

  const togglePreview = () => setPreview(!preview);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Configuração de Ícones para Impressão
      </Typography>

      <Paper sx={{ padding: 2, mb: 3 }}>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddIcon}
          sx={{ mr: 2 }}
        >
          Adicionar Ícone
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={togglePreview}
        >
          {preview ? "Editar Configuração" : "Pré-visualizar"}
        </Button>
      </Paper>

      {preview ? (
        <Paper sx={{ padding: 2, mb: 3, border: "1px solid #ccc", boxShadow: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Pré-visualização
          </Typography>
          <Grid container spacing={2}>
            {iconData.map((icon) => (
              <Grid
                item
                xs={12 / iconData.length}
                key={icon.id}
                sx={{
                  textAlign: "center",
                  border: "1px solid #ccc",
                  boxShadow: 3,
                  padding: 2,
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    fontSize: `${icon.size * 20}px`,
                    color: icon.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {icon.icon}
                </Box>
                <Typography>{icon.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="icons" direction="horizontal">
            {(provided) => (
              <Grid
                container
                spacing={2}
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ padding: 2, border: "1px dashed #ccc" }}
              >
                {iconData.map((icon, index) => (
                  <Draggable key={icon.id} draggableId={icon.id} index={index}>
                    {(provided) => (
                      <Grid
                        item
                        xs={3}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Paper
                          elevation={3}
                          sx={{
                            padding: 2,
                            textAlign: "center",
                            borderRadius: "8px",
                            boxShadow: 3,
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: `${icon.size * 20}px`,
                              color: icon.color,
                              marginBottom: 1,
                            }}
                          >
                            {icon.icon}
                          </Box>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Descrição"
                            value={icon.label}
                            onChange={(e) =>
                              handleLabelChange(icon.id, e.target.value)
                            }
                            fullWidth
                            sx={{ mb: 1 }}
                          />
                          <Select
                            value={icon.size}
                            onChange={(e) =>
                              handleSizeChange(icon.id, e.target.value)
                            }
                            fullWidth
                            size="small"
                            sx={{ mb: 1 }}
                          >
                            <MenuItem value={1}>Unipolar</MenuItem>
                            <MenuItem value={2}>Bipolar</MenuItem>
                            <MenuItem value={3}>Tripolar</MenuItem>
                          </Select>
                          <TextField
                            type="color"
                            label="Cor do Ícone"
                            value={icon.color}
                            onChange={(e) =>
                              handleColorChange(icon.id, e.target.value)
                            }
                            fullWidth
                            size="small"
                            sx={{ mb: 1 }}
                          />
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteIcon(icon.id)}
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
      )}

      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Imprimir
        </Button>
        <Button variant="contained" color="secondary">
          Compartilhar
        </Button>
      </Box>
    </Box>
  );
};

export default IconConfigurator;

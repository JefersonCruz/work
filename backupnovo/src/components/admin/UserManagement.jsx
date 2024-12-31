import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Switch,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin", email: "admin@example.com", active: true },
    { id: 2, name: "User", email: "user@example.com", active: false },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleToggleActive = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleSave = () => {
    if (editUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editUser.id ? editUser : user
        )
      );
    }
    setEditUser(null);
    setOpenDialog(false);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Gerenciamento de Usuários
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenDialog(true)}
        sx={{ marginBottom: 2 }}
      >
        Adicionar Usuário
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Switch
                    checked={user.active}
                    onChange={() => handleToggleActive(user.id)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editUser ? "Editar Usuário" : "Adicionar Usuário"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            value={editUser?.name || ""}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, name: e.target.value }))
            }
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            value={editUser?.email || ""}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, email: e.target.value }))
            }
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;

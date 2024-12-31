import React, { useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

const ChatSuporte = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { user: "Você", text: currentMessage }]);
      setCurrentMessage("");

      // Simula uma resposta automática
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: "Suporte", text: "Obrigado pela sua mensagem! Estamos analisando." },
        ]);
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        width: isOpen ? "300px" : "50px",
        height: isOpen ? "400px" : "50px",
        backgroundColor: "#0288d1",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#01579b",
          color: "white",
          padding: "5px 10px",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "16px" }}>
          {isOpen ? "Suporte" : ""}
        </Typography>
        <IconButton onClick={toggleChat} sx={{ color: "white" }}>
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </IconButton>
      </Box>

      {isOpen && (
        <Box sx={{ flexGrow: 1, padding: "10px", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              marginBottom: "10px",
              padding: "5px",
              backgroundColor: "#e3f2fd",
              borderRadius: "5px",
            }}
          >
            {messages.map((msg, index) => (
              <Box key={index} sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    fontWeight: msg.user === "Você" ? "bold" : "normal",
                    color: msg.user === "Você" ? "#0288d1" : "#000",
                  }}
                >
                  {msg.user}:
                </Typography>
                <Typography>{msg.text}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: "5px" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Digite sua mensagem"
              fullWidth
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatSuporte;

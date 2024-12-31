import React, { useState } from "react";
import { Box, IconButton, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";

const ChatSupportPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages([...messages, { sender: "user", text: currentMessage }]);
      setCurrentMessage("");

      // Simular uma resposta automática
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "support", text: "Obrigado por entrar em contato! Estamos aqui para ajudar." },
        ]);
      }, 1000);
    }
  };

  return (
    <Box>
      {!isOpen ? (
        <IconButton
          onClick={toggleChat}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "primary.main",
            color: "white",
            zIndex: 1000,
          }}
        >
          <ChatIcon />
        </IconButton>
      ) : (
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          {/* Header do Chat */}
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <Typography variant="h6">Suporte ao Cliente</Typography>
            <IconButton onClick={toggleChat} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Corpo do Chat */}
          <Box
            sx={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: message.sender === "user" ? "primary.light" : "grey.300",
                  color: "black",
                  padding: "10px",
                  borderRadius: "10px",
                  maxWidth: "80%",
                }}
              >
                {message.text}
              </Box>
            ))}
          </Box>

          {/* Entrada do Chat */}
          <Box
            sx={{
              padding: "10px",
              borderTop: "1px solid #ddd",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Digite sua mensagem..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              sx={{ flex: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatSupportPage;

import React from "react";
import {
  Lightbulb,
  Outlet,
  AcUnit,
  Shower,
  Kitchen,
  Bolt,
  DirectionsCar,
  Security,
  Thermostat,
  SolarPower,
  Garage,
} from "@mui/icons-material";

export const circuitsLibrary = [
  { name: "Iluminação", icon: <Lightbulb fontSize="large" /> },
  { name: "Tomadas", icon: <Outlet fontSize="large" /> },
  { name: "Ar-Condicionado", icon: <AcUnit fontSize="large" /> },
  { name: "Chuveiro Elétrico", icon: <Shower fontSize="large" /> },
  { name: "Cozinha", icon: <Kitchen fontSize="large" /> },
  { name: "Aquecedor de Água", icon: <Thermostat fontSize="large" /> },
  { name: "Sistema de Segurança", icon: <Security fontSize="large" /> },
  { name: "Energia Solar", icon: <SolarPower fontSize="large" /> },
  { name: "Carro Elétrico", icon: <DirectionsCar fontSize="large" /> },
  { name: "Garagem", icon: <Garage fontSize="large" /> },
  { name: "Energia Alternativa", icon: <Bolt fontSize="large" /> },
];

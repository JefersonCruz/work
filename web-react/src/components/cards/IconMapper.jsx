import React from "react";
import { FaShower, FaLightbulb, FaPlug } from "react-icons/fa";

const iconMapping = {
  Chuveiro: <FaShower />,
  Iluminação: <FaLightbulb />,
  Tomada: <FaPlug />,
};

export const IconMapper = (name) => {
  return iconMapping[name] || <FaPlug />; // Ícone padrão caso o nome não corresponda
};

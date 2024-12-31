import React from "react";
import { FaHome, FaLightbulb, FaPlug, FaShower, FaUtensils, FaTv, FaFan } from "react-icons/fa";
import { MdOutlineKitchen, MdOutlineLocalLaundryService } from "react-icons/md";

// Mapeamento de nomes para ícones
const iconMapper = {
  casa: <FaHome />,
  iluminação: <FaLightbulb />,
  tomada: <FaPlug />,
  chuveiro: <FaShower />,
  cozinha: <MdOutlineKitchen />,
  sala: <FaTv />,
  ar: <FaFan />,
  lavanderia: <MdOutlineLocalLaundryService />,
};

export const getIconByName = (name) => {
  const lowerName = name.toLowerCase();
  return iconMapper[lowerName] || <FaPlug />; // Retorna um ícone padrão se o nome não corresponder
};

export default iconMapper;

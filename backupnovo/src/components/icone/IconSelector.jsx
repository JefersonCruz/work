import React from "react";
import {
  FaShower,
  FaLightbulb,
  FaUtensils,
  FaBed,
  FaCouch,
  FaPlug,
  FaChargingStation,
  FaFan,
  FaSeedling,
  FaSnowflake,
  FaToilet,
  FaWater,
} from "react-icons/fa"; // Ícones Font Awesome
import { MdElevator } from "react-icons/md"; // Ícones Material Design
import { IoIosBicycle } from "react-icons/io"; // Ícones Ionicons

const IconSelector = () => {
  const icons = [
    { id: 1, label: "Chuveiro", icon: <FaShower /> },
    { id: 2, label: "Iluminação", icon: <FaLightbulb /> },
    { id: 3, label: "Cozinha", icon: <FaUtensils /> },
    { id: 4, label: "Quarto", icon: <FaBed /> },
    { id: 5, label: "Sala", icon: <FaCouch /> },
    { id: 6, label: "Tomada TUE", icon: <FaPlug /> },
    { id: 7, label: "Tomada TUG", icon: <FaChargingStation /> },
    { id: 8, label: "Forno", icon: <FaFan /> },
    { id: 9, label: "Jardim", icon: <FaSeedling /> },
    { id: 10, label: "Ar Condicionado", icon: <FaSnowflake /> },
    { id: 11, label: "Máquina de Lavar", icon: <FaToilet /> },
    { id: 12, label: "Torneira Elétrica", icon: <FaWater /> },
    { id: 13, label: "Elevador", icon: <MdElevator /> }, // Novo ícone
    { id: 14, label: "Bicicleta", icon: <IoIosBicycle /> }, // Novo ícone
  ];

  return (
    <div>
      <h2>Selecione Ícones</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {icons.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80px",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "24px" }}>{item.icon}</div>
            <span style={{ fontSize: "12px", textAlign: "center" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSelector;

import React, { useState } from "react";
import LabelCustomizationTools from "./customization/LabelCustomizationTools";
import EditableTable from "./tables/EditableTable";
import { Box } from "@mui/material";

const ParentComponent = () => {
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("Arial");

  const handleLogoChange = (newLogo) => {
    setLogo(newLogo);
  };

  const handleBackgroundChange = (newBackground) => {
    setBackground(newBackground);
  };

  const handleFontChange = (newFont) => {
    setFont(newFont);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f0f0f0" }}>
      <LabelCustomizationTools
        onLogoChange={handleLogoChange}
        onBackgroundChange={handleBackgroundChange}
        onFontChange={handleFontChange}
      />
      <EditableTable
        logo={logo}
        background={background}
        font={font}
      />
    </Box>
  );
};

export default ParentComponent;

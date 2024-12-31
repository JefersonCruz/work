import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import UserManagement from "./UserManagement";
import AuditLogs from "./AuditLogs";
import SystemUpdates from "./SystemUpdates";

const ConfigPanel = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab label="Gerenciamento de Usuários" />
        <Tab label="Auditoria" />
        <Tab label="Atualização do Sistema" />
      </Tabs>
      <Box sx={{ marginTop: 3 }}>
        {activeTab === 0 && <UserManagement />}
        {activeTab === 1 && <AuditLogs />}
        {activeTab === 2 && <SystemUpdates />}
      </Box>
    </Box>
  );
};

export default ConfigPanel;

import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Pages/global/Topbar";
import Sidebar from "./Pages/global/Sidebar";
import Dashboard from "./Pages/dashboard";
import Team from "./Pages/Team";
import Login from "./Pages/login";
import Contacts from "./Pages/contacts";
import FAQ from "./Pages/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {<Route path="/" element={<Dashboard />}/>}
              {<Route path="/team" element={<Team />} />}
              {<Route path="/contacts" element={<Contacts />} />}
              {<Route path="/faq" element={<FAQ />} />}
              {<Route path="/login" element={<Login />} />}
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
  
}

  
export default App;
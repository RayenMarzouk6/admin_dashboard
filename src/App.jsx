import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import DrawerBar from "./components/DrawerBar";
import Home from "./components/Home";
import { Box, createTheme, ThemeProvider, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { getDesginTokens } from "./components/theme";
import { CssBaseline } from "@mui/material";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/faq/FAQ";
import BarChart from "./pages/bar/BarChart";
import PieChart from "./pages/pie/PieChart";
import LineChart from "./pages/line/LineChart";
import GeographyChart from "./pages/geography/GeographyChart";
import Invoices from "./pages/invoices/Invoices";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  // Get the theme mode from localStorage or default to "light"
  const [modee, setMode] = useState(localStorage.getItem("currentMode") || "light");

  // State for managing the drawer open/close
  const [open, setOpen] = useState(false);

  // Function to toggle the drawer open/close
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Function to toggle the theme mode
  const toggleThemeMode = () => {
    const newMode = modee === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("currentMode", newMode); // Save the new mode to localStorage
  };

  // Create the theme based on the current mode
  const theme = React.useMemo(() => createTheme(getDesginTokens(modee)), [modee]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <BrowserRouter>
        <NavBar
          modee={modee}
          setMode={setMode}
          toggleThemeMode={toggleThemeMode}
          handleDrawerOpen={handleDrawerOpen}
        />
        <DrawerBar open={open} handleDrawerClose={handleDrawerClose} />
      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', px: 30 , py : 8 }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/pie" element={<PieChart />} />
          <Route path="/line" element={<LineChart />} />
          <Route path="/geography" element={<GeographyChart />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>

        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
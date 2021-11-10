import React from "react";
import { ThemeProvider } from "@mui/system";
import theme from "./temaConfig";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Hero />
      <Projects />
      <Services />
      <Services />
    </ThemeProvider>
  );
}

export default App;

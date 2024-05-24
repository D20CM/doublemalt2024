import { useState } from "react";
import Homepage from "../src/components/Homepage/Homepage";
import Videopage from "./components/Videopage/Videopage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Homepage />
      <Videopage />
      <About />
      <Contact />
    </>
  );
}

export default App;

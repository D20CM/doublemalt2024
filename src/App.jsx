import Navbar from "./components/Navbar/Navbar";
import Homepage from "../src/components/Homepage/Homepage";
import Videopage from "./components/Videopage/Videopage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Videopage />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;

import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Service from "./Service";
import Skils from "./Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Skils />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

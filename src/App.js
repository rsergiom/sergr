import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./content/Home";
import Skills from "./content/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">projects</section>
      <section id="contact">contact</section>
      <Footer />
    </div>
  );
}

export default App;

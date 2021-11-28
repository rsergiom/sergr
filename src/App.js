import "./styles/App.css";
import NavBar from "./components/NavBar";
// import About from "./content/About";
import Home from "./content/Home";
import Skills from "./content/Skills";
// import Projects from "./content/Projects";
// import Contact from "./content/Contact";
import Footer from "./components/Footer";
import ProjectsCrs from "./content/ProjectsCrs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      {/* <section id="about">
        <About />
      </section> */}
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        {/* <Projects /> */}
        <ProjectsCrs />
      </section>
      {/* <section id="contact">
        <Contact />
      </section> */}
      <Footer />
    </div>
  );
}

export default App;

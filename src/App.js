import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./content/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="about">
        <Home />
      </section>
      <section id="skills">skills</section>
      <section id="work">work</section>
      <section id="contact">contact</section>
      <Footer />
    </div>
  );
}

export default App;

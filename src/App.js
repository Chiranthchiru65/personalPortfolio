import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </div>
  );
}

export default App;

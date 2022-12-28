import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;

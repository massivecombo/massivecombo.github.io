import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import MainCTA from "./components/MainCTA";
import Events from "./components/Events";
import Accomodations from "./components/Accomodations.js";
import FAQ from "./components/FAQ";
import Registry from "./components/Registry";

function App() {
  return (
    <div className="App">
      <Header />
      <MainCTA />
      <Events />
      <Accomodations />
      <FAQ />
      <Registry />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import plantLogo from "./assets/plant-svgrepo-com.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={plantLogo} className="logo plant" alt="Plant logo" />

        <h1>Hello from PlantSavvy</h1>
      </header>
    </div>
  );
}

export default App;

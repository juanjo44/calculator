import './App.css';
import juanBetancourtLogo from "./images/juan-betancourt-logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img
          src={juanBetancourtLogo}
          className="logo"
          alt="My own logo"
        />
      </div>
    </div>
  );
}

export default App;

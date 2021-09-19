import "bootstrap/dist/css/bootstrap.css";
import logo from './KIO-logo.png';
import logoHeader from './KIO-text2.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="Know It Owl logo" />
        <img src={logoHeader} className="App-logo-text img-fluid" alt="Know It Owl text" />
      </header>
      <main>
        <Dictionary defaultKeyword="candy" />
        </main>
        <br /><br />
      </div>
    </div>
  );
}

export default App;

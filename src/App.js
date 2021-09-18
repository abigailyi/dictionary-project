import logo from './KIO-logo.png';
import logoHeader from './KIO-text.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Know It Owl logo" />
        <img src={logoHeader} className="App-logo-text" alt="Know It Owl text" />
      </header>
    </div>
  );
}

export default App;

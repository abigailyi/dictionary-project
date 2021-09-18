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
        <Dictionary />
        </main>
      <footer className="App-footer text-center">👩‍💻 Coded by <a href="https://eloquent-swartz-9918f7.netlify.app/" className="App-link" alt="Link to Abigail Yi's Portfolio Site">Abigail Yi</a> and is <a href="https://github.com/abigailyi/dictionary-project" className="App-link" alt="Link to Dictionary App GitHub Repository">open-sourced on GitHub</a> and is hosted on <a href="https://amazing-cori-f622f5.netlify.app/" className="App-link" alt="Link to Dictionary App hosted on Netlify">Netlify</a><br />
      ✏️ She also drew Owlbert our friendly, feathered helper and mascot!</footer>
      </div>
    </div>
  );
}

export default App;

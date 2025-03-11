import { useState, useEffect } from "react";
import { PdfTeXEngine, XeTeXEngine, DvipdfmxEngine } from "swiftlatex";
import Sidebar from "./components/Sidebar";
import './App.css'

function App() {
  const [pdf, setpdf] = useState(null);

  async function compilePdf() {
    const engine = new PdfTeXEngine();
    await engine.loadEngine();
    
    engine.writeMemFSFile("main.tex", "\\documentclass{article}\\begin{document}Hello, World!\\end{document}");
    engine.setEngineMainFile("main.tex");
    let r = await engine.compileLaTeX();

    setpdf(new Blob([r.pdf], {type: "application/pdf"}));
  }
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TexResume</h1>
      </header>
      <div className="main-body">
      <aside>
        <Sidebar />
      </aside>
      <main>
        <form></form>
        <div className="pdf-wrapper">
        {pdf && (
          <iframe
          src={URL.createObjectURL(pdf)}
          height="100%"
          width="500px"
          />
        )}
        </div>
      </main>
      </div>
      <footer className="button-container">
        <button onClick={compilePdf}>Generate PDF</button>
      </footer>
    </div>
  );
}

export default App;
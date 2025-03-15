import { useState, useEffect } from "react";
import { PdfTeXEngine, XeTeXEngine, DvipdfmxEngine } from "swiftlatex";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './App.css'
import ProfileSection from "./components/FormSections/ProfileSection"
import EducationSection from "./components/FormSections/EducationSection"
import SkillsSection from "./components/FormSections/SkillsSection"
import WorkSection from "./components/FormSections/WorkSection"
import ProjectSection from "./components/FormSections/ProjectSection";

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
            <Routes>
                <Route path="/" element={<ProfileSection />}></Route>
                <Route path="/education" element={<EducationSection />}></Route>
                <Route path="/projects" element={<ProjectSection />}></Route>
                <Route path="/skills" element={<SkillsSection />}></Route>
                <Route path="/work" element={<WorkSection />}></Route>
            </Routes>
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
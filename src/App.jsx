import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './App.css'
import ProfileSection from "./components/FormSections/ProfileSection"
import EducationSection from "./components/FormSections/EducationSection"
import SkillsSection from "./components/FormSections/SkillsSection"
import WorkSection from "./components/FormSections/WorkSection"
import ProjectSection from "./components/FormSections/ProjectSection";
import { useForm, FormProvider } from "react-hook-form";
import { useAtom } from "jotai";
import { resumeAtom } from "./atoms/resume";
import { generateLatexTemplate } from "./utils/template";
import { compilePdf } from "./utils/compilePdf";

function App() {
  const methods = useForm();
  const [resume, setResume] = useAtom(resumeAtom);

  async function handleGeneratePdf(data) {
      setResume({ ...resume, isLoading: true });
      try {
          const latexContent = generateLatexTemplate(data);
          const pdfBlob = await compilePdf(latexContent);
          setResume({ ...resume, pdfUrl: URL.createObjectURL(pdfBlob), isLoading: false });
      } catch (error) {
          setResume({ ...resume, isError: true, isLoading: false });
      }
  }
  
  return (
    <FormProvider {...methods}>
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
        {resume.pdfUrl && (
          <iframe src={resume.pdfUrl} height="100%" width="500px" />
        )}
        </div>
      </main>
      </div>
      <footer className="button-container">
        <button onClick={methods.handleSubmit(handleGeneratePdf)}>Generate PDF</button>
      </footer>
    </div>
    </FormProvider>
  );
}

export default App;
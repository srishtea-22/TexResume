import { useEffect } from "react";
import { PdfTeXEngine, XeTeXEngine, DvipdfmxEngine } from "swiftlatex";

function App() {
  useEffect(() => {
    const loadEngine = async () => {
      try {
        const pdftex = new PdfTeXEngine();
        console.log("PdfTeXEngine loaded!", pdftex);
      } catch (error) {
        console.error("Error loading PdfTeXEngine:", error);
      }
    };

    loadEngine();
  }, []);

  return <div>LaTeX Engine Ready!</div>;
}

export default App;

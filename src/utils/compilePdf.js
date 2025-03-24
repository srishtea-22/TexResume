import { PdfTeXEngine } from "swiftlatex"; 

export async function compilePdf(latexCode) {
    const engine = new PdfTeXEngine();
    await engine.loadEngine();
    engine.writeMemFSFile("main.tex", latexCode);
    engine.setEngineMainFile("main.tex");

    let result = await engine.compileLaTeX();
    return new Blob([result.pdf], { type: "application/pdf" });
}

# TexResume
TexResume is a web-based resume builder designed specifically for tech students and professionals. It allows users to create structured, professional LaTeX resumes by filling out a form. The LaTeX code is generated dynamically, and a real-time PDF preview is compiled using SwiftLaTeX in WebAssembly (WASM).

Tech Stack - 

Frontend: React + Vite

LaTeX Compilation: SwiftLaTeX (WASM)

The LaTex template used in this project is a slightly modified version of [this template](https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn)


![App Screenshot](./public/screenshot.png)

⚠️ Known Issue

This app currently does not function as expected due to an issue with the SwiftLaTeX CDN. 

This is a [known problem](https://github.com/SwiftLaTeX/SwiftLaTeX/issues/105) reported in the SwiftLaTeX GitHub repository. Until it is resolved, PDF compilation is not supported in this app.
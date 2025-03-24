export function generateLatexTemplate(data) {
    console.log(data);
    return `
    \\documentclass[letterpaper,11pt]{article}
    \\begin{document}
    \\textnormal{${data.headings.fullName}} \\\\
    \\textnormal{${data.headings.location}}
    \\end{document}
    `;
}

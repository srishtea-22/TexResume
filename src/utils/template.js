const resumeHeader = 
`\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

\\newcommand{\\resumeItem}[1]{
  \\item\\small{{#1 \\vspace{-2pt}}}
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}`

function generateProfile (profile) {
  const { fullName, location, email, mobile, linkedin, github } = profile;
  const emailLine = email
    ? `\\href{mailto:${email}}{\\raisebox{-0.2\\height}\\faEnvelope\\ \\underline{${email}}}`
    : "";
  const phoneLine = mobile ? `\\small \\raisebox{-0.1\\height}\\faPhone\\ ${mobile}` : "";
  const linkedinLine = linkedin
    ? `\\href{${linkedin}}{\\raisebox{-0.2\\height}\\faLinkedin\\ \\underline{LinkedIn}}`
    : "";
  const githubLine = github
    ? `\\href{${github}}{\\raisebox{-0.2\\height}\\faGithub\\ \\underline{GitHub}}`
    : "";

  const contactInfo = [phoneLine, emailLine, linkedinLine, githubLine].filter(Boolean).join(" ~ ");

  return `    
    \\begin{center}
      ${fullName ? `{\\Huge \\scshape ${fullName}} \\\\` : ""}
      ${location ? `${location} \\\\` : ""}
      ${contactInfo ? `${contactInfo}` : ""}
    \\end{center}`
}

function generateEducation(educationList) {
  if (!educationList || educationList.length === 0) {
    return "";
  }

  const educationEntries = educationList
    .map(({ degree, schoolName, schoolLocation, gpa, startDate, endDate }) => {
      const degreeLine = degree ? `\\textbf{${degree}}` : "";
      const dateLine = startDate && endDate ? `\\textbf{${startDate} - ${endDate}}` : "";
      const schoolLine = schoolName || schoolLocation ? `${schoolName || ""}, ${schoolLocation || ""}` : "";
      const gpaLine = gpa ? `CGPA: ${gpa}` : "";

      return [
        [degreeLine, dateLine].filter(Boolean).join(" \\> ") + " \\\\ ",
        [schoolLine, gpaLine].filter(Boolean).join(" \\> ") + " \\\\[1ex]"
      ].join("\n    ");
    })
    .join("\n\n");

  return `
  \\section{ACADEMIC QUALIFICATIONS}
  \\begin{tabbing}
    \\hspace{16.5cm} \\= \\kill
    ${educationEntries}
  \\end{tabbing}`;
}

function generateSkills(skills) {
  if (!skills) { return ` `;}

  const { progLang, frameworks, tools, others } = skills;

  const skillLines = [
    progLang ? `\\item{\\textbf{Programming Languages}{ : ${progLang}}}` : "",
    frameworks ? `\\item{\\textbf{Frameworks \\& Libraries}{ : ${frameworks}}}` : "",
    tools ? `\\item{\\textbf{Tools \\& Technologies}{ : ${tools}}}` : "",
    others ? `\\item{\\textbf{Other Skills}{ : ${others}}}` : ""
  ].filter(Boolean).join("\n    ");

  return skillLines
    ? `
    \\section{SKILLS}
  \\begin{itemize}[leftmargin=0in, label={}]
    ${skillLines}
  \\end{itemize}`
    : ` `;
}

function generateProjects(projects) {
  if (!projects) { return ` `; }

  const projectLines = projects.map(({ projectName, projectLink, techStack, projectDesc }) => {
    return [
      projectName ? `\\resumeSubheading{${projectName}}{}{\\href{${projectLink}}{\\faGithub \\hspace{1mm} Repository}}{}` : "",
      "\\resumeItemListStart",
      techStack ? `  \\resumeItem{Tech Stack - ${techStack}}` : "",
      projectDesc ? `  \\resumeItem{${projectDesc}}` : "",
      "\\resumeItemListEnd"
    ].filter(Boolean).join("\n        ");    
  }).filter(Boolean).join("\n\n"); 

  return projectLines
    ? `
    \\section{PROJECTS}
    \\vspace{1mm}
    \\resumeSubHeadingListStart
    ${projectLines}
    \\resumeSubHeadingListEnd`
    : ` `;
}

function generateWork(work) {
  if (!work) {return ` `};

  const workLines = work.map(({ jobTitle, company, jobDesc, fromDate, toDate }) => {
    return [
      jobTitle ? `\\resumeSubheading{${jobTitle}}{${fromDate} - ${toDate}}{${company}}{}` : "",
      "\\resumeItemListStart",
      jobDesc ? `  \\resumeItem{${jobDesc}}` : "",
      "\\resumeItemListEnd"
    ].filter(Boolean).join("\n        ");
  }).filter(Boolean).join("\n\n");

  return workLines
    ? `
    \\section{WORK EXPERIENCE}
\\vspace{1mm}
  \\resumeSubHeadingListStart
    ${workLines}
  \\resumeSubHeadingListEnd`
    : ` `;
}

export function generateLatexTemplate(data) {
  
  const { headings } = data;
  const basics = generateProfile(headings.profile);
  const education = generateEducation(headings.education);
  const skills = generateSkills(headings.skills);
  const projects = generateProjects(headings.projects);
  const work = generateWork(headings.work);
  
    return `
\\documentclass[letterpaper,11pt]{article}

\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{tabularx}
\\usepackage{fontawesome}
\\usepackage{multicol}
\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}

\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}
\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

${resumeHeader}

\\begin{document}

${basics}

${education}

${skills}

${projects}

${work}

\\end{document}
    `;
}

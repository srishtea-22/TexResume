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

function generateEducation (education) {
  const {degree, schoolName, schoolLocation, gpa, startDate, endDate} = education;

  return `
  \\begin{tabbing}
    \\hspace{16.5cm} \\= \\kill
    \\textbf{${degree}} \\> \\textbf{${startDate} - ${endDate}} \\\\
    ${schoolName}, ${schoolLocation} \\> CGPA: ${gpa} \\\\[1ex]
  \\end{tabbing}`
}

function generateSkills(skills){
  const {progLang, frameworks, tools, others} = skills;

  return `
  \\begin{itemize}[leftmargin=0in, label={}]
    \\item{\\textbf{Programming Languages}{ : ${progLang}}}
    \\item{\\textbf{Frameworks \\& Libraries}{ : ${frameworks}}}
    \\item{\\textbf{Tools \\& Technologies}{ : ${tools}}}
    \\item{\\textbf{Other Skills}{ : ${others}}}
  \\end{itemize}
  `
}

function generateProjects(projects){
  const {projectName, projectLink, techStack, projectDesc} = projects;

  return `
\\vspace{1mm}
  \\resumeSubHeadingListStart
    \\resumeSubheading{${projectName}}{}{\\href{${projectLink}}{\\faGithub \\hspace{1mm} Repository}}{}
      \\resumeItemListStart
        \\resumeItem{Tech Stack - ${techStack}}
        \\resumeItem{${projectDesc}}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd
  `
}

function generateWork(work){
  const {jobTitle, company, jobDesc, startDate, endDate} = work;

  return `
\\vspace{1mm}
  \\resumeSubHeadingListStart
    \\resumeSubheading{${jobTitle}}{${startDate} - ${endDate}}{${company}}{}
      \\resumeItemListStart
        \\resumeItem{${jobDesc}}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd
  `
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

\\section{ACADEMIC QUALIFICATIONS}
${education}

\\section{SKILLS}
${skills}

\\section{PROJECTS}
${projects}

\\section{WORK EXPERIENCE}
${work}

\\section{CERTIFICATIONS / AWARDS}
  \\resumeSubHeadingListStart
    \\resumeSubheading{Certification Name}{Year}{Issuing Organization}{}
    \\resumeItem{Details of the certification/award.}
  \\resumeSubHeadingListEnd
  \\resumeSubHeadingListStart
    \\resumeSubheading{Certification Name}{Year}{Issuing Organization}{}
    \\resumeItem{Details of the certification/award.}
  \\resumeSubHeadingListEnd
\\end{document}


    `;
}

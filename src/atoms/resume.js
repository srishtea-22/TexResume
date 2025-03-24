import { atom } from "jotai";

export const resumeAtom = atom({
    data: {
        headings: {},
        sections: ["profile", "education", "projects", "skills", "work"],
    },
    pdfUrl: null,
    isLoading: false,
    isError: false,
});

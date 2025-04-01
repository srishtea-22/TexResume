import { useFormContext } from "react-hook-form"

export default function ProjectSection() {
    const { register } = useFormContext();

    return (
        <div className="form">
            <div className="form-input">
                <label htmlFor="projectName">Project Name</label>
                <input type="text" {...register("headings.projects.projectName")}/>
            </div>
            <div className="form-input">
                <label htmlFor="projectLink">Project Link</label>
                <input type="url" {...register("headings.projects.projectLink")}/>
            </div>
            <div className="form-input">
                <label htmlFor="techStack">Tech Stack</label>
                <input type="text" {...register("headings.projects.techStack")}/>
            </div>
            <div className="form-input">
                <label htmlFor="projectDesc">Project Description</label>
                <input type="text" {...register("headings.projects.projectDesc")}/>
            </div>
        </div>
    )
}
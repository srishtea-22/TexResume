import { useFormContext, useFieldArray } from "react-hook-form";

export default function ProjectSection() {
    const { register, control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "headings.projects",
    });

    if (fields.length === 0) {
        append({ projectName: "", projectLink: "", techStack: "", projectDesc: "" }, { shouldFocus: false });
    }

    return (
        <div className="form">
            {fields.map((field, index) => (
                <div key={field.id} className="project-entry">
                    <div className="form-input">
                        <label htmlFor={`projectName-${index}`}>Project Name</label>
                        <input type="text" id={`projectName-${index}`} {...register(`headings.projects.${index}.projectName`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`projectLink-${index}`}>Project Link</label>
                        <input type="url" id={`projectLink-${index}`} {...register(`headings.projects.${index}.projectLink`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`techStack-${index}`}>Tech Stack</label>
                        <input type="text" id={`techStack-${index}`} {...register(`headings.projects.${index}.techStack`)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={`projectDesc-${index}`}>Project Description</label>
                        <input type="text" id={`projectDesc-${index}`} {...register(`headings.projects.${index}.projectDesc`)} />
                    </div>
                    {index > 0 && <button type="button" className="remove-btn" onClick={() => remove(index)}>Remove</button>}
                </div>
            ))}
            <button type="button" className="add-btn" onClick={() => append({ projectName: "", projectLink: "", techStack: "", projectDesc: "" })}>
                Add Project
            </button>
        </div>
    );
}
